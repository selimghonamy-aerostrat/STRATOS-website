// Screenshot every page at 1440/1024/768/390 from a local static server.
// Usage: node shots.mjs <outDir>   (serves the repo root, applies vercel.json rewrites)
import http from 'node:http'; import zlib from 'node:zlib'; import fs from 'node:fs'; import path from 'node:path';
import { fileURLToPath } from 'node:url'; import puppeteer from 'puppeteer-core';
const ROOT = process.env.ROOT || path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.resolve(process.argv[2] || 'shots'); fs.mkdirSync(OUT, { recursive: true });
const rw = Object.fromEntries(JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'))).rewrites.map(r => [r.source, r.destination]));
const T = { '.html':'text/html; charset=utf-8','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.avif':'image/avif','.woff2':'font/woff2','.mp4':'video/mp4' };
const server = http.createServer((req, res) => {
  let u = decodeURIComponent(new URL(req.url, 'http://x').pathname); u = rw[u] || u;
  const p = path.join(ROOT, u);
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  const type = T[path.extname(p)] || 'application/octet-stream'; let body = fs.readFileSync(p);
  const gz = /text|javascript|svg|json/.test(type) && /gzip/.test(req.headers['accept-encoding'] || '');
  if (gz) body = zlib.gzipSync(body);
  res.writeHead(200, { 'Content-Type': type, ...(gz ? { 'Content-Encoding': 'gzip' } : {}) }); res.end(body);
});
const port = Number(process.env.PORT || 0);
await new Promise(r => server.listen(port, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}`;
if (process.env.SERVE_ONLY) { console.log(base); await new Promise(() => {}); }
const pages = ['/', '/about', '/solutions', '/ebt-cbta', '/tms', '/clients', '/contact', '/glossary', '/privacy', '/legal/subprocessors'];
const widths = [1440, 1024, 768, 390];
const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
for (const pg of pages) for (const w of widths) {
  const page = await browser.newPage(); await page.setViewport({ width: w, height: 900 });
  await page.goto(base + pg, { waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise(r => setTimeout(r, 1200));
  // reveal everything and scroll through so lazy content and observers fire
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } scrollTo(0, 0); });
  await new Promise(r => setTimeout(r, 600));
  const name = (pg === '/' ? 'home' : pg.slice(1).replace(/\//g, '-')) + `-${w}.png`;
  await page.screenshot({ path: path.join(OUT, name), fullPage: true }); await page.close();
  console.log(name);
}
await browser.close(); server.close();
