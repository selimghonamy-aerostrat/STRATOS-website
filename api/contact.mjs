// Contact form → email via Resend (Vercel Marketplace integration).
// RESEND_API_KEY is set by the integration. Optional settings in Vercel:
//   CONTACT_TO   where enquiries go (default info@aero-strat.com, an alias of selimghonamy@)
//   CONTACT_FROM sender (default website@aero-strat.com; aero-strat.com is verified in Resend)

const TO = process.env.CONTACT_TO || 'info@aero-strat.com';
const FROM = process.env.CONTACT_FROM || 'AeroStrat website <website@aero-strat.com>';
const ORIGINS = ['https://aero-strat.com', 'https://www.aero-strat.com'];

const LIMITS = { name: 120, airline: 160, role: 120, email: 200, product: 60, stage: 60, message: 5000 };
const EMAIL_RE = /^[^\s@<>()",;]+@[^\s@<>()",;]+\.[a-z]{2,}$/i;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

// `vercel dev` on this machine; never true on Vercel
const isLocal = (request) => {
  try { return ['localhost', '127.0.0.1'].includes(new URL(request.url).hostname); } catch { return false; }
};

const clean = (v, max) => String(v ?? '').replace(/\r\n?/g, '\n').trim().slice(0, max);
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export async function POST(request) {
  // Only accept posts from the site itself (and Vercel preview URLs of this project)
  const origin = request.headers.get('origin') || '';
  const okOrigin = ORIGINS.includes(origin) || /^https:\/\/aerostrat-website-[a-z0-9-]+\.vercel\.app$/.test(origin) ||
    (isLocal(request) && /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin));
  if (origin && !okOrigin) return json({ ok: false, error: 'forbidden' }, 403);

  let data;
  try {
    const text = await request.text();
    if (text.length > 20000) return json({ ok: false, error: 'too_large' }, 413);
    data = JSON.parse(text);
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  // Honeypot: humans never see or fill this field
  if (clean(data.website, 200)) return json({ ok: true });

  const f = {};
  for (const k of Object.keys(LIMITS)) f[k] = clean(data[k], LIMITS[k]);
  for (const k of ['name', 'airline', 'role', 'email', 'product', 'stage']) f[k] = f[k].replace(/\s+/g, ' ');

  const missing = ['name', 'email', 'message'].filter((k) => !f[k]);
  if (missing.length) return json({ ok: false, error: 'missing', fields: missing }, 422);
  if (!EMAIL_RE.test(f.email)) return json({ ok: false, error: 'invalid_email', fields: ['email'] }, 422);

  if (!process.env.RESEND_API_KEY) return json({ ok: false, error: 'not_configured' }, 500);

  const rows = [
    ['Name', f.name], ['Airline', f.airline], ['Role', f.role], ['Email', f.email],
    ['Interested in', f.product], ['Current EBT stage', f.stage],
  ];
  const text =
    rows.map(([k, v]) => `${k}: ${v || '-'}`).join('\n') + `\n\nMessage:\n${f.message}\n\n— Sent from the contact form on aero-strat.com`;
  const html =
    `<div style="font:15px/1.6 Arial,sans-serif;color:#111">` +
    `<p style="margin:0 0 16px;font-weight:bold;color:#00348C">New enquiry from aero-strat.com</p>` +
    `<table cellpadding="6" style="border-collapse:collapse">` +
    rows.map(([k, v]) => `<tr><td style="color:#4A5361;vertical-align:top">${k}</td><td>${esc(v || '-')}</td></tr>`).join('') +
    `</table><p style="margin:20px 0 6px;color:#4A5361">Message</p>` +
    `<div style="white-space:pre-wrap;border-left:3px solid #FF5A13;padding-left:12px">${esc(f.message)}</div>` +
    `<p style="margin:24px 0 0;font-size:12px;color:#888">Reply to this email to answer ${esc(f.name)} directly.</p></div>`;

  const subject = `Website enquiry: ${f.name}${f.airline ? ` (${f.airline})` : ''}`.slice(0, 180);

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM, to: TO.split(',').map((s) => s.trim()).filter(Boolean), reply_to: f.email, subject, text, html }),
    });
    if (!r.ok) {
      console.error('Resend error', r.status, (await r.text()).slice(0, 300));
      return json({ ok: false, error: 'send_failed' }, 502);
    }
    return json({ ok: true });
  } catch (e) {
    console.error('Resend request failed', e?.message);
    return json({ ok: false, error: 'send_failed' }, 502);
  }
}

export function GET() {
  return json({ ok: false, error: 'method_not_allowed' }, 405);
}
