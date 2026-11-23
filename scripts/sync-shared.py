# One shared source for every page. Run after any change to css/, js/motion.js or scripts/partials/:
#   python3 scripts/sync-shared.py [Page.dc.html ...] && (cd scripts && node prerender.mjs [Page.dc.html ...])
# - header (with the runway bar) and footer come from scripts/partials/
# - css/fonts.css + css/responsive.css + css/ds.css are inlined as <style id="site-css"> (no render-blocking request)
# - css/pages/<page>.css is inlined as <style id="page-css"> when it exists
# - js/motion.js is inlined between the MOTION markers
import glob, os, re, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
rd = lambda p: open(os.path.join(ROOT, p)).read()
HEADER, FOOTER = rd('scripts/partials/header.html').rstrip('\n'), rd('scripts/partials/footer.html').rstrip('\n')
DOMAINS = rd('scripts/partials/domains.html').rstrip('\n')
SITE_CSS = '\n'.join(rd(p).strip() for p in ['css/fonts.css', 'css/responsive.css', 'css/ds.css'])
JS = rd('js/motion.js'); assert '</script' not in JS
PAGE_KEY = {'index.dc.html': 'home', 'About.dc.html': 'about', 'Solutions.dc.html': 'solutions', 'EBT-CBTA.dc.html': 'ebt-cbta',
            'TMS.dc.html': 'tms', 'Clients.dc.html': 'clients', 'Contact.dc.html': 'contact', 'Glossary.dc.html': 'glossary'}

def balanced_div(s, i):
    depth = 0
    for m in re.finditer(r'<div\b|</div>', s[i:]):
        depth += 1 if m.group(0) == '<div' else -1
        if depth == 0: return i + m.end()
    raise ValueError('unbalanced div')

def sync_template(t):
    # runway bar (old class or new) + header
    for cls in ('<div className="ds-runway"', '<div className="aerostrat-runway"'):
        if cls in t:
            r = t.index(cls); t = t[:t.rfind('\n', 0, r) + 1] + t[balanced_div(t, r):].lstrip(' \n'); break
    h = t.index('<header data-sticky'); he = t.index('</header>', h) + len('</header>')
    t = t[:t.rfind('\n', 0, h) + 1] + HEADER + t[he:]
    f = t.index('<footer'); fe = t.index('</footer>', f) + len('</footer>')
    t = t[:t.rfind('\n', 0, f) + 1] + FOOTER + t[fe:]
    # the domains row is identical wherever it is used (home, /solutions, /about)
    i = t.find('<ul className="ds-domains">')
    if i >= 0:
        e = t.index('</ul>', i) + 5
        t = t[:t.rfind('\n', 0, i) + 1] + DOMAINS + t[e:]
    assert '-->' not in t[len('<x-dc><!--dc-template'):]
    return t

def set_block(s, tag_open, content, anchor):
    pat = re.compile(re.escape(tag_open) + r'[\s\S]*?</style>\n')
    block = tag_open + '\n' + content + '\n</style>\n'
    if pat.search(s): return pat.sub(lambda m: block, s, count=1)
    return s.replace(anchor, block + anchor, 1)

ONLY = set(sys.argv[1:])  # optional: sync only these files, e.g. Solutions.dc.html
for path in sorted(glob.glob(os.path.join(ROOT, '*.dc.html'))):
    if ONLY and os.path.basename(path) not in ONLY: continue
    name = os.path.basename(path); s = open(path).read()
    a = s.index('<x-dc><!--dc-template'); b = s.index('dc-template--></x-dc>')
    s = s[:a] + sync_template(s[a:b]) + s[b:]
    for link in ('<link rel="stylesheet" href="/css/fonts.css">\n', '<link rel="stylesheet" href="/css/responsive.css?v=ds1">\n', '<link rel="stylesheet" href="/css/responsive.css">\n'):
        s = s.replace(link, '')
    anchor = '<script src="/js/support.js'
    s = set_block(s, '<style id="site-css">', SITE_CSS, anchor)
    css_file = os.path.join(ROOT, 'css/pages', PAGE_KEY[name] + '.css')
    s = re.sub(r'<style id="home-css">[\s\S]*?</style>\n', '', s)
    if os.path.exists(css_file): s = set_block(s, '<style id="page-css">', open(css_file).read().strip(), anchor)
    block = '<!-- MOTION:START (inlined from js/motion.js by scripts/sync-shared.py, do not edit) -->\n<script>\n' + JS + '</script>\n<!-- MOTION:END -->\n'
    s = re.sub(r'<!-- MOTION:START[\s\S]*?<!-- MOTION:END -->\n', lambda m: block, s, count=1)
    open(path, 'w').write(s); print('✓', name)


# ---- Static pages (no React): the same header, footer, CSS and JS, filled between SHARED markers ----
STATIC = ['privacy.html', 'legal/subprocessors.html', '404.html']
ACTIVE = {'privacy.html': None, 'legal/subprocessors.html': None, '404.html': None}
def to_html(tpl):
    t = tpl.replace('className=', 'class=')
    t = re.sub(r'\{\{ navClass_\w+ \}\}', 'aerostrat-nav-link', t)
    t = t.replace('src="uploads/', 'src="/uploads/')
    return t
def fill(s, key, content):
    return re.sub(r'<!-- SHARED:' + key + r' -->[\s\S]*?<!-- /SHARED:' + key + ' -->', lambda m: '<!-- SHARED:' + key + ' -->\n' + content + '\n<!-- /SHARED:' + key + ' -->', s, count=1)
for rel in STATIC:
    if ONLY and rel not in ONLY: continue
    path = os.path.join(ROOT, rel); s = open(path).read()
    if '<!-- SHARED:HEADER' not in s: continue
    s = fill(s, 'CSS', '<style id="site-css">\n' + SITE_CSS + '\n</style>')
    s = fill(s, 'HEADER', to_html(HEADER))
    s = fill(s, 'FOOTER', to_html(FOOTER))
    s = fill(s, 'JS', '<script>\n' + JS + '</script>')
    open(path, 'w').write(s); print('✓', rel)
