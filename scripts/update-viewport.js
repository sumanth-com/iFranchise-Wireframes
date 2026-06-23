const fs = require("fs");
const path = require("path");

function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith(".html")) {
      let c = fs.readFileSync(p, "utf8");
      const from = '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
      const to = '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">';
      if (c.includes(from)) {
        fs.writeFileSync(p, c.split(from).join(to));
        console.log("Updated", p);
      }
    }
  }
}

walk(path.join(__dirname, ".."));
