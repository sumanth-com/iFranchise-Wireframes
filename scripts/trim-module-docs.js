const fs = require("fs");
const path = require("path");

const modulesDir = path.join(__dirname, "../docs/modules");

const files = fs
  .readdirSync(modulesDir)
  .filter((f) => /^\d{2}-.+\.md$/.test(f))
  .sort();

function trimModule(content) {
  const lines = content.split(/\r?\n/);
  const out = [];
  let i = 0;

  // Keep module title (# line) if present
  while (i < lines.length && !lines[i].startsWith("## ")) {
    if (lines[i].startsWith("# ")) {
      out.push(lines[i]);
      out.push("");
    }
    i++;
  }

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      if (out.length > 0 && out[out.length - 1] !== "") out.push("");
      out.push(line);
      out.push("");
      i++;
      continue;
    }

    if (line.startsWith("**What is this?**")) {
      i++;
      continue;
    }

    if (line.startsWith("**What to tell sir:**")) {
      i++;
      while (i < lines.length && !lines[i].startsWith("## ") && lines[i] !== "---") {
        i++;
      }
      continue;
    }

    if (
      line.startsWith("**Why do we need it?**") ||
      line.startsWith("**What is inside?**")
    ) {
      out.push(line);
      i++;
      while (
        i < lines.length &&
        !lines[i].startsWith("## ") &&
        !lines[i].startsWith("**What is this?**") &&
        !lines[i].startsWith("**What to tell sir:**") &&
        lines[i] !== "---"
      ) {
        out.push(lines[i]);
        i++;
      }
      continue;
    }

    if (line === "---") {
      i++;
      continue;
    }

    i++;
  }

  // Trim trailing blank lines, ensure single trailing newline
  while (out.length > 0 && out[out.length - 1] === "") out.pop();
  return out.join("\n") + "\n";
}

for (const file of files) {
  const filePath = path.join(modulesDir, file);
  const original = fs.readFileSync(filePath, "utf8");
  const trimmed = trimModule(original);
  fs.writeFileSync(filePath, trimmed);
  console.log("Trimmed", file);
}
