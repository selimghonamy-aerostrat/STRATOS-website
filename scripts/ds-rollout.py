# Put the shared v3 header, progress line, ds.css and motion.js on every page (home is done by hand).
import re, sys
HDR = open('scripts/ds-header.html').read()
def balanced_div(s, i):
    depth = 0
    for m in re.finditer(r'<div\b|</div>', s[i:]):
        depth += 1 if m.group(0) == '<div' else -1
        if depth == 0: return i + m.end()
    raise ValueError('unbalanced')
for name in ['About', 'Clients', 'Contact', 'EBT-CBTA', 'Glossary', 'Solutions', 'TMS']:
    f = name + '.dc.html'; s = open(f).read()
    a = s.index('<x-dc><!--dc-template'); b = s.index('dc-template--></x-dc>')
    t = s[a:b]
    if 'ds-header' in t: print(f, 'already'); continue
    r = t.index('<div className="aerostrat-runway"'); re_ = balanced_div(t, r)
    line_start = t.rfind('\n', 0, r) + 1
    t = t[:line_start] + t[re_:].lstrip(' ').lstrip('\n')
    h = t.index('<header data-sticky'); he = t.index('</header>', h) + len('</header>')
    hs = t.rfind('\n', 0, h) + 1
    t = t[:hs] + HDR.rstrip('\n') + t[he:]
    assert '-->' not in t[len('<x-dc><!--dc-template'):]
    for k in ['navClass_home', 'navClass_about', 'navClass_solutions', 'navClass_clients', 'navClass_contact']:
        assert 'navClass' in s[b:], (f, k)
    s = s[:a] + t + s[b:]
    s = s.replace('<link rel="stylesheet" href="/css/responsive.css">', '<link rel="stylesheet" href="/css/responsive.css">\n<link rel="stylesheet" href="/css/ds.css?v=1">', 1)
    m = re.search(r'<script src="/js/a11y.js" defer></script>\n', s)
    s = s[:m.end()] + '<script src="/js/motion.js?v=1" defer></script>\n' + s[m.end():]
    open(f, 'w').write(s); print(f, 'ok')
