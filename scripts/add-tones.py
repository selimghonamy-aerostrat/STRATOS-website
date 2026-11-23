# Give every top-level block in <main> a static data-tone (navy | deep | light) from its classes.
# The tone never changes while scrolling (v3.4): it sets the section's own background and text colours.
import re, sys, os, glob
from html.parser import HTMLParser
VOID = {'img','br','input','source','meta','link','hr','wbr','area','col','embed','track','param','use','path','rect','circle','line','stop'}
def tone_of(cls):
    c = set(cls.split())
    if 'ds-snav' in c: return None
    if 'on-light' in c: return 'light'
    if c & {'on-deep', 'ds-band', 'ds-close'}: return 'deep'
    return 'navy'
class P(HTMLParser):
    def __init__(s, src):
        super().__init__(convert_charrefs=False); s.src = src; s.depth = -1; s.hits = []; s.lines = src.split('\n'); s.off = [0]
        for l in s.lines: s.off.append(s.off[-1] + len(l) + 1)
    def handle_starttag(s, tag, attrs):
        if tag == 'main' and s.depth < 0: s.depth = 0; return
        if s.depth < 0: return
        if s.depth == 0:
            a = dict(attrs)
            if 'data-tone' not in a:
                t = tone_of(a.get('classname', '') or a.get('class', ''))
                if t: line, col = s.getpos(); s.hits.append((s.off[line - 1] + col, tag, t))
        if tag not in VOID: s.depth += 1
    def handle_startendtag(s, tag, attrs): pass
    def handle_endtag(s, tag):
        if s.depth < 0 or tag in VOID: return
        if tag == 'main' and s.depth == 0: s.depth = -99; return
        s.depth -= 1
def run(path, region):
    s = open(path).read(); a, b = region(s)
    p = P(s[a:b]); p.feed(s[a:b])
    t = s[a:b]
    for pos, tag, tone in sorted(p.hits, reverse=True):
        t = t[:pos + 1 + len(tag)] + f' data-tone="{tone}"' + t[pos + 1 + len(tag):]
    open(path, 'w').write(s[:a] + t + s[b:]); print(os.path.basename(path), [h[2] for h in sorted(p.hits)])
root = os.path.join(os.path.dirname(__file__), '..')
for f in sorted(glob.glob(os.path.join(root, '*.dc.html'))):
    run(f, lambda s: (s.index('<x-dc><!--dc-template') + len('<x-dc><!--dc-template'), s.index('dc-template--></x-dc>')))
for f in ['privacy.html', 'legal/subprocessors.html', '404.html']:
    run(os.path.join(root, f), lambda s: (s.index('<body'), len(s)))
