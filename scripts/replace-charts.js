const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const skipPattern = /Video|Player|Conference|Calendar View|PDF Preview|message preview|Report Preview — configure|WhatsApp message/i;

function walk(dir, files = []) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory() && f !== "scripts" && f !== ".git") walk(p, files);
    else if (/\.(js|html)$/.test(f)) files.push(p);
  }
  return files;
}

let total = 0;
for (const file of walk(root)) {
  if (file.includes("wireframe.js") || file.includes("replace-charts.js")) continue;
  let c = fs.readFileSync(file, "utf8");
  const orig = c;
  c = c.replace(/<div class="wf-chart-placeholder([^"]*)"([^>]*)>([^<]+)<\/div>/g, (m, _cls, _attrs, text) => {
    if (skipPattern.test(text)) return m;
    const parts = text.split(" — ");
    let chartType = parts[0].trim();
    let title = parts.slice(1).join(" — ").trim();
    if (!title) {
      title = chartType;
      chartType = "Bar Chart";
    }
    if (title.startsWith("Map —")) {
      chartType = "Bar Chart";
      title = "Cities";
    }
    if (title.includes("Placeholder") && title.includes("Dashboard")) {
      chartType = "Area Chart";
      title = "Executive Overview";
    }
    if (title.includes("Lead Pipeline")) {
      chartType = "Bar Chart";
      title = "Lead Pipeline";
    }
    total++;
    return "${WF.chartPlaceholder(" + JSON.stringify(chartType) + ", " + JSON.stringify(title) + ")}";
  });
  if (c !== orig) {
    fs.writeFileSync(file, c);
    console.log("Updated:", path.relative(root, file));
  }
}
console.log("Replacements:", total);
