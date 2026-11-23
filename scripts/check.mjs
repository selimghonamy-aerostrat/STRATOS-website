// Quick render check: node check.mjs <path> [width] [out.png] [scrollY]
import puppeteer from 'puppeteer-core';
const [,, pg = '/', w = '1440', out = '/tmp/c.png', sy = '0'] = process.argv;
const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const p = await b.newPage(); await p.setViewport({ width: +w, height: 900 });
const msgs = []; p.on('console', m => { if (['error', 'warning'].includes(m.type())) msgs.push(m.type() + ': ' + m.text().slice(0, 300)); }); p.on('pageerror', e => msgs.push('pageerror: ' + e.message));
await p.goto('http://127.0.0.1:' + (process.env.PORT || 4517) + pg, { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2500));
await p.evaluate(y => window.scrollTo(0, +y), sy); await new Promise(r => setTimeout(r, 1500));
await p.screenshot({ path: out });
console.log(msgs.slice(0, 15).join('\n') || 'no errors');
console.log(await p.evaluate(() => JSON.stringify({ pre: !!document.getElementById('dc-prerender'), main: !!document.querySelector('#dc-root main'), h: document.documentElement.scrollHeight, theme: document.documentElement.dataset.theme, cls: document.documentElement.className })));
await b.close();
