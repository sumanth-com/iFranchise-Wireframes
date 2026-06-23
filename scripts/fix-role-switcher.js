const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "js");
const files = fs.readdirSync(dir).filter((f) => f.endsWith("-module.js"));

for (const file of files) {
  let c = fs.readFileSync(path.join(dir, file), "utf8");
  let orig = c;

  c = c.replace(
    /const roleBar = \(\) => WF\.roleSwitcher\(activeRole/g,
    "const roleBar = () => WF.roleSwitcher(WF.getViewRole(activeRole)"
  );

  c = c.replace(
    /function init\(\) \{\s*\n(\s*)WF_SPA\.init\(/g,
    "function init() {\n$1WF.resetViewRole(activeRole);\n$1WF_SPA.init("
  );

  c = c.replace(
    /\n\s*document\.body\.addEventListener\("click", \(e\) => \{\s*\n\s*const roleBtn = e\.target\.closest\(\[?"data-role"\]?\)[^;]*;[\s\S]*?\n\s*\}\);\s*\n(\s*\})/g,
    "\n$1"
  );

  if (c !== orig) {
    fs.writeFileSync(path.join(dir, file), c);
    console.log("Updated", file);
  }
}
