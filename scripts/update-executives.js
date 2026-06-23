const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "js");
const files = fs.readdirSync(root).filter((f) => f.endsWith(".js"));

const replacements = [
  ['approvedBy: "Sumanth"', 'approvedBy: "Abdul Syed"'],
  ['user: "Sumanth", role: "CEO"', 'user: "Abdul Syed", role: "CEO"'],
  ["Sumanth (CEO)", "Abdul Syed (CEO)"],
  ['CEO approval received", user: "Sumanth"', 'CEO approval received", user: "Abdul Syed"'],
  ['uploadedBy: "Sumanth", date: "22 Jun 2024", size: "3.8 MB", changes: "CEO countersigned', 'uploadedBy: "Abdul Syed", date: "22 Jun 2024", size: "3.8 MB", changes: "CEO countersigned'],
  ['author: "Sumanth", time: "22 Jun 2024", body: "Approved with condition', 'author: "Abdul Syed", time: "22 Jun 2024", body: "Approved with condition'],
  ['user: "Abdul Syed", role: "Sales Executive"', 'user: "Abdul Syed", role: "CEO"'],
  ['name: "Abdul Syed", role: "Sales Executive"', 'name: "Abdul Syed", role: "CEO"'],
  ['{ author: "Abdul Syed", role: "Sales Executive"', '{ author: "Abdul Syed", role: "CEO"'],
  ['approvedBy: "CEO"', 'approvedBy: "Abdul Syed"'],
  ['user: "CEO"', 'user: "Abdul Syed"'],
  ['actor: "CEO"', 'actor: "Abdul Syed"'],
  ['currentApprover: "CEO"', 'currentApprover: "Abdul Syed"'],
  ['recipient: "CEO", recipientRole: "CEO"', 'recipient: "Abdul Syed", recipientRole: "CEO"'],
  ['recipient: "Abdul Syed", recipientRole: "Sales Executive"', 'recipient: "Abdul Syed", recipientRole: "CEO"'],
  ['{ time: "22 Jun 2024, 11:00 AM", title: "Approval granted", desc: "CEO approved Odette Premium for publication.", user: "Sumanth" }', '{ time: "22 Jun 2024, 11:00 AM", title: "Approval granted", desc: "CEO approved Odette Premium for publication.", user: "Abdul Syed" }'],
  ['{ date: "15 Jun 2024", user: "Abdul Syed", fromRole: "Sales Executive", toRole: "Sales Executive", by: "Himani Bhargava", reason: "Region change — Bengaluru" }', '{ date: "15 Jun 2024", user: "Abdul Syed", fromRole: "Sales Executive", toRole: "CEO", by: "Board", reason: "Promoted to Chief Executive Officer" }'],
  ['salesExec: "Abdul Syed"', 'salesExec: "Diksha"'],
  ['approver: "CEO", status: "Pending"', 'approver: "Abdul Syed", status: "Pending"'],
  ['<td>CEO</td><td>2</td><td>36h</td><td>90%</td></tr>', '<td>Abdul Syed</td><td>2</td><td>36h</td><td>90%</td></tr>'],
  ['<td>CEO</td><td>—</td><td>—</td><td>✓</td><td>✓</td></tr>', '<td>Abdul Syed</td><td>—</td><td>—</td><td>✓</td><td>✓</td></tr>'],
  ['{ level: 3, name: "CEO Approval", approver: "CEO", status: "Pending" }', '{ level: 3, name: "CEO Approval", approver: "Abdul Syed", status: "Pending" }'],
  ['<td>Q2 Revenue by Brand</td><td>CEO</td>', '<td>Q2 Revenue by Brand</td><td>Abdul Syed</td>'],
  ['manager: "Sumanth", notes:', 'manager: "Abdul Syed", notes:'],
];

for (const file of files) {
  const filePath = path.join(root, file);
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;
  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log("Updated", file);
  }
}
