const fs = require("fs");
const path = require("path");
const dir = "js";
fs.readdirSync(dir)
  .filter((f) => f.endsWith("-module.js"))
  .sort()
  .forEach((f) => {
    const c = fs.readFileSync(path.join(dir, f), "utf8");
    const name = f.replace("-module.js", "");
    const screens = [];
    const re = /\{\s*id:\s*"([^"]+)",\s*label:\s*"([^"]+)"/g;
    let m;
    while ((m = re.exec(c))) screens.push({ id: m[1], label: m[2] });
    const uniq = [];
    const seen = new Set();
    screens.forEach((s) => {
      if (!seen.has(s.id)) {
        seen.add(s.id);
        uniq.push(s);
      }
    });
    console.log(`=== ${name.toUpperCase()} (${uniq.length} screens) ===`);
    uniq.forEach((s) => console.log(`  - ${s.label} (${s.id})`));
    console.log("");
  });
