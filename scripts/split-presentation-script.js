const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "../docs/iFranchise-Detailed-Presentation-Script.md");
const outDir = path.join(__dirname, "../docs/modules");
const text = fs.readFileSync(src, "utf8");
const lines = text.split(/\r?\n/);

const modules = [
  { line: 5, file: "00-opening.md", title: "Opening" },
  { line: 15, file: "01-authentication.md", title: "Authentication" },
  { line: 154, file: "02-dashboard.md", title: "Dashboard" },
  { line: 347, file: "03-lead-management.md", title: "Lead Management" },
  { line: 815, file: "04-customers.md", title: "Customer Management" },
  { line: 1158, file: "05-brands.md", title: "Brand Management" },
  { line: 1520, file: "06-franchise-models.md", title: "Franchise Models" },
  { line: 1893, file: "07-meetings.md", title: "Meeting Management" },
  { line: 2260, file: "08-approvals.md", title: "Approval Management" },
  { line: 2595, file: "09-accounts.md", title: "Accounts & Payments" },
  { line: 2970, file: "10-documents.md", title: "Document Management" },
  { line: 3304, file: "11-notifications.md", title: "Notification Center" },
  { line: 3639, file: "12-analytics.md", title: "Reporting & Analytics" },
  { line: 4156, file: "13-automation.md", title: "Automation Engine" },
  { line: 4624, file: "14-users.md", title: "User Management" },
  { line: 5088, file: "15-roles.md", title: "Role & Permission Management" },
  { line: 5550, file: "16-audit.md", title: "Audit & Activity Logs" },
  { line: 6004, file: "17-settings.md", title: "System Configuration" },
  { line: 6942, file: "18-master-data.md", title: "Master Data Management" },
  { line: 7160, file: "19-call-intelligence.md", title: "Call Intelligence" },
  { line: 7422, file: "20-marketing-intelligence.md", title: "Marketing Intelligence" },
  { line: 7591, file: "21-templates.md", title: "Template Management" },
  { line: 7754, file: "22-closing.md", title: "Closing" }
];

fs.mkdirSync(outDir, { recursive: true });

const header = (title) =>
  `# iFranchise CRM — ${title}\n\n*Presentation script for management review*\n\n---\n\n`;

for (let i = 0; i < modules.length; i++) {
  const start = modules[i].line - 1;
  const end = i + 1 < modules.length ? modules[i + 1].line - 1 : lines.length;
  let body = lines.slice(start, end).join("\n").trim();
  if (i > 0) {
    body = body.replace(/^# MODULE \d+ —[^\n]*\n\n?/, "");
  }
  const content = header(modules[i].title) + body + "\n";
  fs.writeFileSync(path.join(outDir, modules[i].file), content);
  console.log("Wrote", modules[i].file);
}

const index = `# iFranchise CRM — Module Presentation Scripts

Each file below is a separate presentation script for one module. Read **00-opening.md** first and **22-closing.md** last.

| # | Module | File |
|---|--------|------|
${modules
  .filter((m) => !m.file.startsWith("00") && !m.file.startsWith("22"))
  .map((m, i) => `| ${String(i + 1).padStart(2, "0")} | ${m.title} | [${m.file}](./${m.file}) |`)
  .join("\n")}

**Also:**
- [00-opening.md](./00-opening.md) — How to start the presentation
- [22-closing.md](./22-closing.md) — How to end the presentation

Full combined file: [../iFranchise-Detailed-Presentation-Script.md](../iFranchise-Detailed-Presentation-Script.md)
`;

fs.writeFileSync(path.join(outDir, "README.md"), index);
console.log("Wrote README.md");
