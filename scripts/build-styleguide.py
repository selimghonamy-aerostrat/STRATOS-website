#!/usr/bin/env python3
"""Builds styleguide.html: the v4 living style guide (Stage A). noindex, not linked from the site.
Usage: python3 scripts/build-styleguide.py"""
import os, random
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPRITE = '/uploads/svg/icons/sprite.svg'

def ic(name, extra=''):
    return f'<svg class="v4-ic {extra}" aria-hidden="true"><use href="{SPRITE}#{name}"></use></svg>'
ARROW = lambda: ic('arrow')

def topic(t): return f'<span class="v4-topic">{t}</span>'
def head(cls, b, l, tag='h2'): return f'<{tag} class="{cls}"><span class="b">{b}</span> <span class="l">{l}</span></{tag}>'
def link(href, t): return f'<a class="v4-link" href="{href}">{t}{ARROW()}</a>'

# ---------- data visuals (tile-built, Inter, Sample data) ----------
COMP = ['KNO','PRO','COM','FPA','FPM','LTW','PSD','SAW','WLM']
def matrix(seed=4):
    r = random.Random(seed)
    rows = ['Pilot A','Pilot B','Pilot C','Pilot D','Pilot E','Pilot F']
    h = '<div class="v4-matrix" role="img" aria-label="Sample data: pilot by competency grid. Sky Blue at standard, Coral below standard, outlined not observed.">'
    h += '<span></span>' + ''.join(f'<span class="c">{c}</span>' for c in COMP)
    for i, p in enumerate(rows):
        h += f'<span class="r">{p}</span>'
        for j in range(9):
            x = r.random()
            cls = 'coral' if (i, j) in [(1, 4), (3, 7), (4, 4)] else ('out' if x < .12 else ('dim' if x < .3 else ''))
            h += f'<i class="v4-tile {cls}"></i>'
    h += '</div><div class="v4-legend"><span><i class="v4-tile"></i>At standard</span><span><i class="v4-tile dim"></i>Developing</span><span><i class="v4-tile coral"></i>Below standard</span><span><i class="v4-tile out"></i>Not observed</span></div>'
    return h

def validity():
    rows = [('Licence', 'v'*12), ('Medical', 'v'*9+'w'*3), ('OPC', 'v'*5+'w'*2+'p'+'v'*4), ('LPC', 'v'*3+'w'*2+'x'*7), ('CRM', 'x'*2+'p'+'v'*9)]
    cl = {'v': '', 'w': 'dim', 'x': 'coral', 'p': 'deep'}
    h = '<div class="v4-valid" role="img" aria-label="Sample data: validity by month for one pilot. The worst item sets the status.">'
    for name, row in rows:
        h += f'<span class="r">{name}</span>' + ''.join(f'<i class="v4-tile {cl[c]}"></i>' for c in row)
    h += '<span></span>' + ''.join(f'<span class="m">{m}</span>' if m else '<span></span>' for m in ['Jan','','','Apr','','','Jul','','','Oct','','Dec'])
    h += '</div><div class="v4-legend"><span><i class="v4-tile"></i>Valid</span><span><i class="v4-tile dim"></i>Due within 90 days</span><span><i class="v4-tile coral"></i>Expired</span><span><i class="v4-tile deep" style="box-shadow:inset 0 0 0 1.5px #3F9EE8"></i>Renewal planned</span></div>'
    return h

def record():
    a = ''.join('<i class="v4-tile"></i>' for _ in range(8))
    b = ''.join(f'<i class="v4-tile {"dim" if i in (2,5) else ""}"></i>' for i in range(8))
    return f'''<div class="v4-record" role="img" aria-label="Sample data: competence and compliance tiles joined into one pilot record">
      <div><div class="grp">{a}</div><div class="lab">Competence</div></div>
      <div class="core"><i class="v4-tile"></i>One pilot record</div>
      <div><div class="grp">{b}</div><div class="lab">Compliance</div></div></div>'''

def vis(title, body):
    return f'<div class="v4-vis"><div class="v4-vis-h"><b>{title}</b><span class="v4-sample">Sample data</span></div>{body}</div>'

# ---------- components ----------
DOMAINS = [('training','Training','Live today.','live'),('safety','Safety &amp; Compliance','Safety evidence, connected.',''),
           ('flight-ops','Flight Operations','Crew readiness in one record.',''),('maintenance','Maintenance &amp; Engineering','Technical people, tracked.',''),
           ('network','Network Planning','Capacity meets readiness.','')]
FP = [0]
def flight_path(items, icons=True):
    n = len(items); lis = ''; FP[0] += 1; gid = f'fp{FP[0]}'
    for i, (icn, t, d, st) in enumerate(items):
        tt = (i + .5) / n
        status = '' if st is None else f'<span class="v4-status {"live" if st=="live" else ""}">{"Live" if st=="live" else "Next"}</span>'
        lead = ic(icn) if icons and icn else ''
        wk = f'<span class="wk">{icn}</span>' if not icons and icn else ''
        lis += f'<li class="{"cur" if st=="live" or st=="cur" else ""}" style="--t:{tt:.3f}">{lead}{wk}<b>{t}</b><span class="d">{d}</span>{status if st in ("live","") else ""}</li>'
    return f'''<ol class="v4-path" style="--n:{n}"><svg class="v4-path-line" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id="{gid}" x1="0" x2="1"><stop offset="0" stop-color="#3F9EE8" stop-opacity="0"/><stop offset=".12" stop-color="#3F9EE8" stop-opacity=".7"/><stop offset=".88" stop-color="#3F9EE8" stop-opacity=".7"/><stop offset="1" stop-color="#3F9EE8" stop-opacity="0"/></linearGradient></defs>
      <path d="M0 100 Q500 -100 1000 100" fill="none" stroke="url(#{gid})" stroke-width="2" vector-effect="non-scaling-stroke"/></svg>{lis}</ol>'''
# The path's y in the 80px box: y(t) = 80*(1-4t(1-t)); the SVG curve M0 100 Q500 -100 1000 100 on viewBox height 100 gives the same parabola.

def panels3():
    return f'''<div class="v4-grid c3">
      <div class="v4-panel">{ic('record')}<h3>The airline owns it</h3><p>Forms, standards and decisions stay with the airline's own manual and authority.</p></div>
      <div class="v4-panel hl">{ic('ai-analysis')}<h3>AeroStrat supports it</h3><p>AI analysis prepares the evidence. People stay in command of every decision.</p></div>
      <div class="v4-panel">{ic('competency')}<h3>The instructor decides</h3><p>Every grade is set by the instructor against the nine competencies.</p></div></div>'''

def buttons():
    return f'''<div class="v4-actions" style="margin-top:0"><a class="v4-btn" href="#">Book a walkthrough</a>{link('#','Explore our solutions')}</div>
      <div class="v4-actions"><span class="v4-status live">Live</span><span class="v4-status">Next</span><span class="v4-sample">Sample data</span></div>'''

AUD = [('technology','Training directors','Every grade and every validity on one screen, ready for the authority.','EBT/CBTA · TMS · Analytics','solutions-hero-bg.webp','50% 40%'),
       ('training','Heads of training','Day 2 training planned from the pilot\'s Day 1 evidence.','EBT/CBTA · Training programme · Cohort trends','ebt-hero-bg.webp','60% 45%'),
       ('competency','TRE and TRI','Grade on the airline\'s own form against the nine competencies. The instructor decides.','Grading · Observable behaviours · Debrief','about-hero-bg.webp','70% 60%'),
       ('calendar-renewal','Crew managers','Renewals planned months ahead, pilots reminded before anything lapses.','TMS · Validity · Records','tms-hero-bg.webp','82% 50%')]
def audience():
    lis = ''.join(f'''<li>{ic(i)}<div><h3>{t}</h3></div><div><p>{d}</p><span class="rel">{rel}</span></div>
      <div class="v4-photo"><img src="/uploads/{img}" alt="" loading="lazy" decoding="async" width="336" height="208" style="object-position:{pos}"></div></li>''' for i, t, d, rel, img, pos in AUD)
    return f'<ul class="v4-aud">{lis}</ul>'

def proof(count=True):
    nums = [('120','pilots'),('250','cabin crew'),('14000','grades recorded')]
    cells = ''.join(f'<div class="v4-panel{" hl" if k==2 else ""}"><div class="v4-num"><data value="{v}">{int(v):,}</data><i>+</i></div><p>{l}</p></div>' for k, (v, l) in enumerate(nums))
    return f'<div class="v4-proof"{" data-count" if count else ""}>{cells}</div><p class="v4-body" style="margin-top:28px">In co-development with two regional airlines for more than eight months.</p>'

FAQ = [("What is AeroStrat?","AeroStrat is a next-generation aviation technology company based in Tallinn, Estonia. It is building one connected software ecosystem for airline operations: training, safety and compliance, flight operations, maintenance and engineering, and network planning. Its training products, AeroStrat EBT/CBTA and AeroStrat TMS, are live, developed and tested with two regional airlines."),
       ("Which AeroStrat products are live today?","Two training products. AeroStrat EBT/CBTA grades every pilot check against the ICAO nine-competency framework on the airline's own forms. AeroStrat TMS keeps every pilot current with validity control, renewal planning, recurrent training, records and audit. Airlines can take one, or both on a single pilot record."),
       ("What comes after training?","Safety &amp; Compliance, Flight Operations, Maintenance &amp; Engineering and Network Planning, each built on the same foundation as training: one crew list, one record and one login across every module."),
       ("Which regulators does AeroStrat support?","AeroStrat is built on ICAO, IATA and EASA guidance and is not tied to one regulator. Each airline is set up to its own manuals and national authority, including EASA and ECAA frameworks."),
       ("Who uses AeroStrat today?","AeroStrat has been tested for more than 8 months in co-development with two regional airlines: 120+ pilots and 250+ cabin crew, with more than 14,000 grades recorded to date.")]
def faq(n=5, open_first=True):
    return '<div class="v4-panel v4-faq">' + ''.join(f'<details{" open" if (i==0 and open_first) else ""}><summary>{q}<span class="v4-plus" aria-hidden="true"></span></summary><p>{a}</p></details>' for i, (q, a) in enumerate(FAQ[:n])) + '</div>'

def form():
    return f'''<form class="v4-panel v4-form" onsubmit="return false" aria-label="Sample contact form">
      <div class="v4-field"><label for="f-n{{k}}">Name</label><input class="v4-input" id="f-n{{k}}" autocomplete="name" placeholder="Your name"></div>
      <div class="v4-field"><label for="f-e{{k}}">Work email</label><input class="v4-input" id="f-e{{k}}" type="email" autocomplete="email" placeholder="name@airline.com"></div>
      <div class="v4-field"><span class="v4-legend-t">Interested in</span><div class="v4-opts"><button type="button" class="v4-opt" aria-pressed="true">AeroStrat EBT/CBTA</button><button type="button" class="v4-opt" aria-pressed="false">AeroStrat TMS</button><button type="button" class="v4-opt" aria-pressed="false">Both</button></div></div>
      <div class="v4-field"><label for="f-m{{k}}">Message</label><textarea class="v4-input" id="f-m{{k}}" placeholder="What would you like to see?"></textarea></div>
      <div><button class="v4-btn" type="submit">Send message</button></div></form>'''

def next_steps():
    return '''<ol class="v4-steps"><li class="cur"><b>We reply within one working day</b><span>From the team, not an automated queue.</span></li><li><b>A 30-minute walkthrough</b><span>On sample data, or your own forms if you share them.</span></li><li><b>A pilot plan</b><span>Forms, people and timeline for your airline.</span></li></ol>'''

NAV = [('/','Home'),('/about','About Us'),('/solutions','Solutions'),('/clients','Clients'),('/contact','Contact Us')]
def header(active=None, fixed=True):
    links = ''.join(f'<a href="{h}"{" aria-current=\"page\"" if t==active else ""}>{t}</a>' for h, t in NAV)
    style = '' if fixed else ' style="position:relative;top:0;left:0;right:0"'
    menu = '<button class="v4-menu" type="button" aria-label="Menu" aria-expanded="false" aria-controls="v4-sheet"><span></span></button>' if fixed else ''
    return f'''<header class="v4-hdr"{style}><a class="v4-hblock logo" href="/" aria-label="AeroStrat home"><img src="/uploads/svg/aerostrat-lockup-tagline-white.svg?v=tm2" alt="AeroStrat" width="496" height="120"></a>
      <div class="v4-hblock nav"><nav class="v4-nav" aria-label="Main">{links}</nav><a class="v4-btn sm" href="/contact#book">Book a walkthrough</a>{menu}</div></header>'''

def snav(items, live=True):
    a = ''.join(f'<a href="#{i}"{" class=\"on\"" if (not live and k==1) else ""}>{t}</a>' for k, (i, t) in enumerate(items))
    o = ''.join(f'<option value="{i}">{t}</option>' for i, t in items)
    return f'<nav class="v4-snav" aria-label="On this page"{"" if live else " style=\"position:relative;top:0\""}><div class="v4-snav-in">{a}</div><label>On this page<select aria-label="On this page">{o}</select></label></nav>'

def footer():
    return f'''<footer class="v4-foot"><div class="v4-wrap"><div class="v4-foot-grid">
      <div><img class="lock" src="/uploads/svg/aerostrat-lockup-tagline-white.svg?v=tm2" alt="AeroStrat" width="496" height="120" loading="lazy"></div>
      <div><p class="h">Company</p><a href="/">Home</a><a href="/about">About Us</a><a href="/clients">Clients</a><a href="/contact">Contact Us</a></div>
      <div><p class="h">Solutions</p><a href="/ebt-cbta">AeroStrat EBT/CBTA</a><a href="/tms">AeroStrat TMS</a><a href="/glossary">EBT and CBTA glossary</a></div>
      <div><p class="h">Contact</p><a href="/contact#book">Book a walkthrough</a><a href="mailto:info@aero-strat.com">info@aero-strat.com</a><a href="https://www.linkedin.com/company/aero-strat/" rel="noopener" target="_blank">LinkedIn</a></div>
      <div><p class="h">Legal</p><a href="/privacy">Privacy notice</a><a href="/legal/subprocessors">Sub-processors</a></div></div>
      <p class="v4-foot-legal">© 2026 AeroStrat OÜ · Registry code 17638511 · Tallinn, Estonia</p>
      <div class="v4-foot-mark" aria-hidden="true"><img src="/uploads/svg/aerostrat-lockup-white.svg" alt="" width="496" height="120" loading="lazy"></div></div></footer>'''

def pair(title, spec, body_fn, stack=False):
    d, l = body_fn(), body_fn()
    return f'''<div class="sg-item" data-r><div class="sg-meta"><h3 class="sg-t">{title}</h3><p class="sg-note">{spec}</p></div>
      <div class="sg-pair{" stack" if stack else ""}"><div class="sg-spec"><span class="sg-tag">Dark</span>{d}</div><div class="sg-spec v4-light"><span class="sg-tag">Light</span>{l}</div></div></div>'''

# ---------- page ----------
SWATCH = [('Navy','#001538','--navy','Canvas (dark), text on light'),('Deep Blue','#00348C','--deep','Brand primary: glows, S-tile zoom, headings on light'),
          ('Coral','#FF5A13','--coral','The arc, one highlight per screen, primary button, live'),('Sky Blue','#3F9EE8','--sky','Data, links and icons on dark, progress'),
          ('Grey','#B4B4B4','--grey','Muted text on dark'),('Light','#ECF0F3','--light','Light theme background'),('White','#FFFFFF','--white','Text on dark, reading surfaces')]
sw = ''.join(f'<div class="sg-sw"><i style="background:{h}"></i><b>{n}</b><span class="v4-ui">{h} · {v}</span><span>{r}</span></div>' for n, h, v, r in SWATCH)
radii = ''.join(f'<div class="sg-rad"><i style="border-radius:{r}px"></i><b class="v4-ui">{r} px</b><span>{u}</span></div>' for r, u in [(6,'Small UI'),(14,'Buttons, inputs'),(20,'Panels'),(28,'Media frames')])
icons = ''.join(f'<div class="sg-icon">{ic(n)}<span class="v4-ui">{n}</span></div>' for n in ['training','safety','flight-ops','maintenance','network','technology','record','competency','calendar-renewal','audit','ai-analysis','arrow'])

SG_CSS = '''
.sg-intro{padding:clamp(80px,9vw,140px) 0 calc(var(--sec)*.5)}
.sg-h{margin-bottom:clamp(32px,4vw,56px)}
.sg-item{margin-top:clamp(48px,6vw,88px)}
.sg-meta{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,8fr);gap:8px 40px;margin-bottom:22px;align-items:baseline}
.sg-t{font:700 22px/1.2 var(--font);color:var(--head)}
.sg-note{font-size:15px;line-height:1.55;color:var(--fg-3);max-width:72ch}
.sg-pair{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.sg-pair.stack{grid-template-columns:1fr}
.sg-spec{position:relative;border-radius:28px;padding:clamp(28px,3.4vw,52px) clamp(20px,3vw,44px) clamp(24px,3vw,44px);background:var(--bg);color:var(--fg);outline:1px dashed rgba(180,180,180,.22);outline-offset:-1px;min-width:0}
.sg-tag{position:absolute;top:14px;right:18px;font:500 12px/1 var(--ui);color:var(--fg-3)}
.sg-sws{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:24px 16px}
.sg-sw i{display:block;height:88px;border-radius:20px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12);margin-bottom:12px}
.sg-sw b{display:block;font:700 17px/1.3 var(--font)}.sg-sw span{display:block;font-size:13.5px;line-height:1.45;color:var(--fg-3)}
.sg-rads{display:flex;flex-wrap:wrap;gap:24px}
.sg-rad{width:140px}.sg-rad i{display:block;width:120px;height:120px;background:var(--deep);box-shadow:inset 0 0 0 1px rgba(63,158,232,.5);margin-bottom:10px}
.sg-rad b{display:block;font-size:13px}.sg-rad span{font-size:13.5px;color:var(--fg-3)}
.sg-type>div{display:grid;grid-template-columns:180px minmax(0,1fr);gap:24px;padding:28px 0;position:relative}
.sg-type>div+div::before{content:"";position:absolute;left:0;right:0;top:0;height:1px;background:linear-gradient(90deg,transparent,var(--line) 10%,var(--line) 90%,transparent)}
.sg-type .k{font:500 12.5px/1.5 var(--ui);color:var(--fg-3)}
.sg-icons{display:grid;grid-template-columns:repeat(auto-fill,minmax(112px,1fr));gap:22px 12px}
.sg-icon{display:grid;justify-items:center;gap:10px;text-align:center}.sg-icon .v4-ic{--is:40px}.sg-icon span{font-size:11.5px;color:var(--fg-3)}
.sg-icon.s24 .v4-ic{--is:24px}
.sg-tiles{display:flex;align-items:flex-end;gap:18px;flex-wrap:wrap}
.sg-field{position:relative;height:220px;border-radius:20px;overflow:hidden}
.sg-spec.v4-glow{background:radial-gradient(55% 45% at var(--gx,78%) var(--gy,30%),var(--glow),transparent 70%),var(--bg)}
.sg-photos{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.sg-photos figure{margin:0}.sg-photos .ph{height:280px;border-radius:28px;overflow:hidden}
.sg-photos img{width:100%;height:100%;object-fit:cover}
.sg-photos figcaption{margin-top:10px;font-size:14px;color:var(--fg-3)}
.sg-arcs{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;align-items:center}
@media (max-width:860px){.sg-pair,.sg-photos,.sg-arcs{grid-template-columns:1fr}.sg-meta,.sg-type>div{grid-template-columns:1fr}}
.sg-live{padding:calc(var(--sec)*.5) 0 0}
'''

html = f'''<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Style guide | AeroStrat</title>
<meta name="robots" content="noindex, nofollow">
<meta name="description" content="AeroStrat website v4 living style guide: tokens, type and components. Internal, not linked from the site.">
<meta name="theme-color" content="#001538">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/open-sauce-one-latin-700-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/open-sauce-one-latin-300-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/uploads/hero-video-poster.webp" as="image" type="image/webp" fetchpriority="high">
<link rel="stylesheet" href="/css/fonts.css">
<link rel="stylesheet" href="/css/v4.css">
<style>{SG_CSS}</style>
<script src="/js/v4.js" defer></script>
</head>
<body>
<a class="v4-skip" href="#main">Skip to content</a>
{header()}
<div class="v4-sheet" id="v4-sheet">{''.join(f'<a href="{h}">{t}</a>' for h, t in NAV)}<a class="v4-btn" href="/contact#book">Book a walkthrough</a></div>
<main id="main">

<!-- C2 Hero -->
<section class="v4-hero" data-hero>
  <div class="v4-hero-frame v4-photo"><img src="/uploads/hero-video-poster.webp" alt="" width="1280" height="720" fetchpriority="high">
    <video data-hero-video muted loop playsinline preload="none" poster="/uploads/hero-video-poster.webp" data-src="/uploads/hero-video.mp4" data-src-sm="/uploads/hero-video-960.mp4" aria-hidden="true"></video></div>
  <div class="v4-hero-in v4-wrap">
    {topic('Intelligence Driven Aviation')}
    {head('v4-display','The next generation','of aviation technology.','h1')}
    <p class="v4-lead">An AI-native ecosystem for airlines, built on 25+ years in aviation.</p>
    <div class="v4-actions"><a class="v4-btn" href="/contact#book">Book a walkthrough</a>{link('/solutions','Explore our solutions')}</div>
  </div>
</section>

<!-- C3 Entry panels -->
<section class="v4-entry"><div class="v4-wrap"><div class="v4-entry-grid">
  <a class="v4-panel" href="/ebt-cbta">{ic('competency')}<b>AeroStrat EBT/CBTA</b><span>Every check graded against the nine ICAO competencies.</span>{ic('arrow','go')}</a>
  <a class="v4-panel" href="/tms">{ic('calendar-renewal')}<b>AeroStrat TMS</b><span>Validity, planning, records and audit in one system.</span>{ic('arrow','go')}</a>
  <a class="v4-panel" href="/contact#book">{ic('technology')}<b>30-minute walkthrough</b><span>See it on your own data.</span>{ic('arrow','go')}</a>
</div></div></section>

<section class="sg-intro"><div class="v4-wrap">
  {topic('Style guide · v4')}
  <div class="v4-open" style="margin:26px 0 0">{head('v4-h2','One brand.','Every screen.')}<p class="v4-lead">Tokens, type and the fifteen components, in dark and light, built only from the AeroStrat logo, colours and typography. Everything above this line is the live home hero.</p></div>
</div></section>

{snav([('tokens','Tokens'),('type','Type'),('devices','Brand devices'),('components','Components'),('patterns','Live patterns')])}

<!-- Tokens -->
<section class="v4-sec v4-cv" id="tokens"><div class="v4-wrap">
  <div class="sg-h">{topic('Tokens')}</div>
  <div class="sg-sws">{sw}</div>
  <div class="sg-item"><div class="sg-meta"><h3 class="sg-t">Radii from the tile</h3><p class="sg-note">The S icon's container has a corner radius of about 22 % of its size. Every radius on the site comes from it, and there are only four.</p></div><div class="sg-rads">{radii}</div></div>
  <div class="sg-item"><div class="sg-meta"><h3 class="sg-t">Motion</h3><p class="sg-note">Reveals use <span class="v4-ui">cubic-bezier(.16,.84,.24,1)</span>; theme switches use <span class="v4-ui">cubic-bezier(.76,0,.24,1)</span>; durations are 280 to 600 ms. One passive scroll listener drives every scroll-linked effect, using only transform, opacity and clip-path. With reduced motion, media is static and full-bleed and numbers are final.</p></div></div>
</div></section>

<!-- Type -->
<section class="v4-sec v4-cv" id="type"><div class="v4-wrap">
  <div class="sg-h">{topic('Typography')}</div>
  <div class="sg-type">
    <div><span class="k">Display · 48–120 px<br>0.95 · −0.04em<br>700 / 300</span>{head('v4-display','The next generation','of aviation technology.','p')}</div>
    <div><span class="k">H2 · 36–80 px<br>1.0 · −0.035em</span>{head('v4-h2','Every grade consistent.','Every skill measured.','p')}</div>
    <div><span class="k">H3 · 24–34 px<br>1.1 · −0.02em</span>{head('v4-h3','One pilot record.','Entered once.','p')}</div>
    <div><span class="k">Lead · 20–22 px / 1.5</span><p class="v4-lead">Two connected products for airline pilot training: one measures how well pilots perform, the other keeps every pilot current.</p></div>
    <div><span class="k">Body · 17 px / 1.6<br>max 68 characters</span><p class="v4-body">AeroStrat is an aviation technology company. Our team pairs 25+ years of experience in the aviation sector with deep expertise in software and data, so what we build follows how airlines are run and regulated.</p></div>
    <div><span class="k">Small · 14 px / 1.5</span><p class="v4-small">Built on ICAO, IATA and EASA guidance, set up to each airline's manuals and authority.</p></div>
    <div><span class="k">Inter · product UI only</span><p class="v4-ui" style="font-size:15px;color:var(--fg-2)">FPM · Below standard · OPC due 03 Nov 2026 · Grade 3</p></div>
  </div>
</div></section>

<!-- Brand devices -->
<section class="v4-sec v4-cv" id="devices"><div class="v4-wrap">
  <div class="sg-h">{topic('Brand devices')}</div>
  <div class="sg-meta"><h3 class="sg-t">The arc</h3><p class="sg-note">The orange stroke over “Strat” is the signature. It appears in four places only: above the topic label, under the active nav item, on the top edge of the highlighted panel, and as a divider between two statements.</p></div>
  <div class="sg-arcs">
    <div class="sg-spec">{topic('Topic label')}</div>
    <div class="sg-spec"><nav class="v4-nav" style="display:flex"><a href="#devices">Home</a><a href="#devices" aria-current="page">Solutions</a><a href="#devices">Clients</a></nav></div>
    <div class="sg-spec" style="padding-top:44px"><div class="v4-panel hl" style="padding:22px"><b>Highlighted panel</b></div></div>
  </div>
  <div class="v4-arc" aria-hidden="true"></div>

  <div class="sg-item"><div class="sg-meta"><h3 class="sg-t">The tile</h3><p class="sg-note">The rounded square that holds the S icon is AeroStrat's pixel. Data visuals are drawn with it, a sparse field of tiles (8–12 px, 2–6 % opacity) can fill empty space, and the S-tile zoom is built from it. The full S icon is never repeated as wallpaper.</p></div>
    <div class="sg-pair"><div class="sg-spec"><div class="sg-tiles"><i class="v4-tile" style="--t:12px"></i><i class="v4-tile" style="--t:24px"></i><i class="v4-tile deep" style="--t:48px;box-shadow:inset 0 0 0 1px rgba(63,158,232,.5)"></i><i class="v4-tile coral" style="--t:72px"></i><i class="v4-tile dim" style="--t:96px"></i><i class="v4-tile out" style="--t:96px"></i></div></div>
    <div class="sg-spec sg-field v4-glow" style="--gx:70%;--gy:40%"><div class="v4-field"></div><span class="sg-tag">Glow + tile field</span></div></div></div>

  <div class="sg-item"><div class="sg-meta"><h3 class="sg-t">Icons</h3><p class="sg-note">AeroStrat set: 24 px grid, 1.75 px stroke, rounded caps. Sky Blue on dark, Deep Blue on light, never on a coloured tile. Shown at 40 px and 24 px.</p></div>
    <div class="sg-pair stack"><div class="sg-spec"><div class="sg-icons">{icons}</div></div><div class="sg-spec v4-light"><div class="sg-icons">{icons.replace('class="sg-icon"','class="sg-icon s24"')}</div></div></div></div>

  <div class="sg-item"><div class="sg-meta"><h3 class="sg-t">Photography</h3><p class="sg-note">Every photo gets the same navy grade: a navy gradient plus Deep Blue multiplied at 25 %. Photos fade into the canvas except inside 28 px media frames.</p></div>
    <div class="sg-photos"><figure><div class="ph"><img src="/uploads/ebt-hero-bg.webp" alt="" loading="lazy" decoding="async" width="1060" height="586"></div><figcaption>Original</figcaption></figure>
    <figure><div class="ph v4-photo"><img src="/uploads/ebt-hero-bg.webp" alt="" loading="lazy" decoding="async" width="1060" height="586"></div><figcaption>AeroStrat grade</figcaption></figure></div></div>
</div></section>

<!-- Components -->
<section class="v4-sec v4-cv" id="components"><div class="v4-wrap">
  <div class="sg-h">{topic('Components')}</div>
  <div class="sg-item" data-r><div class="sg-meta"><h3 class="sg-t">1 · Header</h3><p class="sg-note">Two floating navy-glass blocks, 12 px from the viewport edge, radius 14. The lockup sits on the left (at least 150 px wide); on the right are the links, the one Coral button and, on mobile, the menu. The active link has the arc. The live header is at the top of this page.</p></div>
    <div class="sg-spec" style="padding:28px 20px">{header('Solutions', fixed=False)}</div></div>
  {pair('4 · BrandPanel','Radius 20, padding 32. Dark: white 7→3 % gradient, 1 px border, inset top highlight. Light: white, Deep Blue 10 % border, soft shadow. One highlighted panel per group carries the arc. No blur, no mask. Hover lifts by 2 px.', panels3, stack=True)}
  {pair('Buttons and links','One Coral button per screen; every other action is a text link with the Coral arrow. Status is a dot and a word.', buttons)}
  {pair('9 · Flight path','A thin Sky Blue curve with waypoints; the live or current waypoint is Coral. Used for domains, EBT stages, onboarding and implementation. On phones it becomes a vertical path.', lambda: flight_path(DOMAINS), stack=True)}
  {pair('10 · Audience rows','Full-width rows separated by fading hairlines: icon, role, one line, related items as plain text, and a small graded photo.', audience, stack=True)}
  {pair('11 · Proof numbers','Three panels; the numbers count once from 0 when 40 % in view (1.4 s, ease-out). The final values are in the HTML, with tabular figures. After the S-tile zoom they sit on Deep Blue (see Live patterns).', lambda: proof(count=False), stack=True)}
  {pair('12 · FAQ','One panel with an accordion. Rows are separated by fading hairlines; the Coral plus turns into a minus. At most five questions, matching the FAQPage JSON-LD.', lambda: faq(3), stack=True)}
  {pair('15 · Forms','The form sits in a panel. Inputs are 52 px with radius 14 and a 1 px border; focus is a Sky Blue ring. Options are dot-and-text toggles. Next to the form, “What happens next” uses waypoints.', lambda: f'<div class="v4-grid c2" style="align-items:start">{form().replace("{k}", str(random.random())[2:7])}<div>{next_steps()}</div></div>', stack=True)}
  {pair('Tile data visuals','Product data drawn with tiles, labelled Sample data, in Inter. Sky Blue means at standard or valid, Coral below standard or expired, outlined not observed.', lambda: f'<div class="v4-grid c3" style="align-items:start">{vis("Competencies by pilot", matrix())}{vis("Validity · Pilot B", validity())}{vis("Together", record())}</div>', stack=True)}
  <div class="sg-item" data-r><div class="sg-meta"><h3 class="sg-t">14 · Section nav</h3><p class="sg-note">Product pages only. It sticks under the header in navy glass, its links are in sentence case, and the active item has the arc. On phones it becomes an “On this page” select. The live version is above Tokens.</p></div>
    <div class="sg-spec">{snav([('a','The problem'),('b','How it works'),('c','Try it'),('d','Analytics'),('e','Questions')], live=False)}</div></div>
</div></section>

<!-- Live patterns -->
<div id="patterns" class="sg-live"><div class="v4-wrap"><div class="sg-meta"><div>{topic('Live patterns')}</div><p class="sg-note">From here down, the components run as they will on the pages: Statement, Flight path, MediaBridge into the light theme and back, the pinned product story, audience rows, the S-tile zoom into proof numbers, FAQ, closing CTA and footer. The theme changes only while a photo covers the screen.</p></div></div></div>

<!-- C5 Statement -->
<section class="v4-sec v4-glow" data-statement style="--gx:82%;--gy:52%"><div class="v4-wrap v4-statement">
  <div>{topic('Who we are')}</div>
  <p class="v4-statement-t"><strong>AeroStrat is an aviation technology company.</strong> Our team pairs 25+ years of experience in the aviation sector with deep expertise in software and data, so what we build follows how airlines are run and regulated.</p>
</div></section>

<section class="v4-sec" style="padding-top:0"><div class="v4-wrap">
  <div class="v4-open c">{topic('Our direction')}{head('v4-h2','Developing aviation technology','from every angle.')}</div>
  {flight_path(DOMAINS)}
</div></section>

<!-- C6 MediaBridge: dark to light -->
<section class="v4-bridge" data-bridge data-from="dark" data-to="light"><div class="v4-bridge-stage">
  <div class="v4-bridge-media v4-photo"><img src="/uploads/ebt-hero-bg.webp" alt="" loading="lazy" decoding="async" width="1060" height="586" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"></div>
  <div class="v4-bridge-fade t"></div><div class="v4-bridge-fade b"></div>
  <div class="v4-bridge-copy"><div class="v4-wrap"><div class="v4-arc" aria-hidden="true"></div>{head('v4-h2','Graded on your own form.','Decided by your instructor.','p')}</div></div>
</div></section>

<section class="v4-sec" id="try"><div class="v4-wrap">
  <div class="v4-open">{topic('Light theme')}{head('v4-h2','Same components.','Light canvas.')}<p class="v4-lead">Deep Blue headings, navy text, white panels. The light theme is used at most twice per page and never twice in a row.</p></div>
  <div class="v4-grid c2" style="align-items:start">{vis('Competencies by pilot', matrix(9))}<div>{panels3().replace('v4-grid c3','v4-grid')}</div></div>
</div></section>

<!-- C6 MediaBridge: light to dark -->
<section class="v4-bridge" data-bridge data-from="light" data-to="dark"><div class="v4-bridge-stage">
  <div class="v4-bridge-media v4-photo"><img src="/uploads/about-hero-bg.webp" alt="" loading="lazy" decoding="async" width="1468" height="790" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"></div>
  <div class="v4-bridge-fade t"></div><div class="v4-bridge-fade b"></div>
</div></section>

<!-- C8 Pinned product story -->
<section class="v4-story" data-story><div class="v4-story-stage"><div class="v4-wrap">
  <div class="v4-story-grid">
    <div class="v4-story-slides">
      <div class="v4-slide on" data-slide="0">{topic('Competence')}<span class="name">AeroStrat EBT/CBTA</span>{head('v4-h2','Every grade consistent.','Every skill measured.','h3')}<p class="v4-body">Evidence-based training and assessment, graded by the ICAO, IATA and EASA method on forms built from the airline's own manual.</p><div class="v4-actions">{link('/ebt-cbta','See AeroStrat EBT/CBTA')}</div></div>
      <div class="v4-slide" data-slide="1">{topic('Compliance')}<span class="name">AeroStrat TMS</span>{head('v4-h2','Every pilot current.','Every renewal planned.','h3')}<p class="v4-body">The training management system: validity, planning, recurrent training, records and audit in one place.</p><div class="v4-actions">{link('/tms','See AeroStrat TMS')}</div></div>
      <div class="v4-slide" data-slide="2">{topic('Together')}<span class="name">One pilot record</span>{head('v4-h2','Entered once.','Never re-typed.','h3')}<p class="v4-body">For airlines that take both, the products share one crew list, one pilot record and one login.</p><div class="v4-actions">{link('/solutions','Explore our solutions')}</div></div>
    </div>
    <div class="v4-story-vis">
      <div class="v4-slide on" data-slide="0">{vis('Competencies by pilot', matrix(4))}</div>
      <div class="v4-slide" data-slide="1">{vis('Validity · Pilot B', validity())}</div>
      <div class="v4-slide" data-slide="2">{vis('Together', record())}</div>
    </div>
  </div>
  <div class="v4-tabs" role="tablist" aria-label="Products"><button class="v4-tab on" role="tab" aria-selected="true" type="button">Competence</button><button class="v4-tab" role="tab" aria-selected="false" type="button">Compliance</button><button class="v4-tab" role="tab" aria-selected="false" type="button">Together</button></div>
</div></div></section>

<!-- C10 Audience rows -->
<section class="v4-sec"><div class="v4-wrap">
  <div class="v4-open">{topic("Who it's for")}{head('v4-h2','Built for the people','who run training.')}</div>
  {audience()}
</div></section>

<!-- C12 FAQ -->
<section class="v4-sec v4-glow" style="--gx:15%;--gy:55%"><div class="v4-wrap">
  <div class="v4-open">{topic('Questions')}{head('v4-h2','Frequently','asked questions.')}<p class="v4-lead">The short answers airlines ask for first.</p></div>
  {faq()}
</div></section>

<!-- C7 S-tile zoom, then Deep Blue -->
<section class="v4-zoom" data-zoom aria-hidden="true"><div class="v4-zoom-stage"><div class="v4-zoom-tile"></div></div></section>
<div class="v4-deep v4-dark">
  <section class="v4-sec" style="padding-top:clamp(40px,5vw,80px)"><div class="v4-wrap">
    <div class="v4-open">{topic('Proof')}{head('v4-h2','Tested with airlines.','Measured in grades.')}</div>
    {proof()}
  </div></section>
  <!-- C13 Closing CTA -->
  <section class="v4-sec v4-close v4-glow" style="--gx:50%;--gy:60%"><div class="v4-wrap">
    {topic('Book a walkthrough')}
    {head('v4-display','See it on','your own data.')}
    <p class="v4-lead">A 30-minute walkthrough with the team, on sample data or your own forms.</p>
    <div class="v4-actions"><a class="v4-btn" href="/contact#book">Book a walkthrough</a></div>
  </div></section>
  <div class="v4-deep-end" aria-hidden="true"></div>
</div>
</main>
{footer()}
</body>
</html>
'''
open(os.path.join(ROOT, 'styleguide.html'), 'w').write(html)
print('styleguide.html', len(html) // 1024, 'KB')
