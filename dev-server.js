/**
 * Dev server with SPA fallbacks for all CRM module routes.
 * /leads/dashboard → serves leads/index.html (URL stays clean)
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "127.0.0.1";

const MODULES = new Set([
  "auth", "dashboard", "leads", "customers", "brands", "franchise-models",
  "meetings", "approvals", "accounts", "documents", "notifications",
  "analytics", "automation", "users", "roles", "audit", "settings",
  "master-data", "call-intelligence", "marketing-intelligence", "templates"
]);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8"
};

function isFile(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}

function safeJoin(...segments) {
  const resolved = path.normalize(path.join(...segments));
  if (!resolved.startsWith(ROOT)) return null;
  return resolved;
}

function resolveRequest(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
  const rel = decoded.replace(/^\/+/, "");

  const candidates = [
    rel,
    path.join(rel, "index.html"),
    rel.endsWith(".html") ? rel : `${rel}.html`
  ];

  for (const candidate of candidates) {
    const file = safeJoin(ROOT, candidate);
    if (file && isFile(file)) return file;
  }

  const parts = rel.split("/").filter(Boolean);
  if (parts.length >= 1 && MODULES.has(parts[0])) {
    const spaEntry = safeJoin(ROOT, parts[0], "index.html");
    if (spaEntry && isFile(spaEntry)) return spaEntry;
  }

  if (rel === "" || rel === "index.html") {
    const hub = safeJoin(ROOT, "index.html");
    if (hub && isFile(hub)) return hub;
  }

  return null;
}

function send404(res, urlPath) {
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<!DOCTYPE html><html><body style="font-family:sans-serif;padding:40px">
    <h1>404</h1><p>Not found: <code>${urlPath}</code></p>
    <p><a href="/">Back to hub</a></p>
  </body></html>`);
}

const server = http.createServer((req, res) => {
  const filePath = resolveRequest(req.url || "/");

  if (!filePath) {
    send404(res, req.url || "/");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] || "application/octet-stream";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      send404(res, req.url || "/");
      return;
    }
    res.writeHead(200, { "Content-Type": type, "Cache-Control": "no-cache" });
    res.end(data);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`\n  iFranchise CRM wireframes`);
  console.log(`  → http://${HOST}:${PORT}`);
  console.log(`  → http://${HOST}:${PORT}/auth/login`);
  console.log(`  → http://${HOST}:${PORT}/leads/dashboard\n`);
});
