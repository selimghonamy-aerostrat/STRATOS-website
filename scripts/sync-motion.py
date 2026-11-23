# Inline js/motion.js into every page (between the MOTION markers). An external file cost
# ~0.2 s of simulated LCP on mobile Lighthouse; inline it costs nothing measurable.
# Run after every change to js/motion.js:  python3 scripts/sync-motion.py
import glob, re, os
ROOT = os.path.join(os.path.dirname(__file__), '..')
js = open(os.path.join(ROOT, 'js/motion.js')).read()
assert '</script' not in js
block = '<!-- MOTION:START (inlined from js/motion.js by scripts/sync-motion.py, do not edit) -->\n<script>\n' + js + '</script>\n<!-- MOTION:END -->\n'
for f in sorted(glob.glob(os.path.join(ROOT, '*.dc.html'))):
    s = open(f).read()
    if '<!-- MOTION:START' in s:
        s = re.sub(r'<!-- MOTION:START[\s\S]*?<!-- MOTION:END -->\n', lambda m: block, s, count=1)
    else:
        assert s.count('<script src="/js/motion.js?v=1" async></script>\n') == 1, f
        s = s.replace('<script src="/js/motion.js?v=1" async></script>\n', block)
    open(f, 'w').write(s); print('✓', os.path.basename(f))

# Home-only styles: css/home.css is the source, inlined in index.dc.html as <style id="home-css">
f = os.path.join(ROOT, 'index.dc.html'); s = open(f).read()
css = open(os.path.join(ROOT, 'css/home.css')).read().strip()
s, n = re.subn(r'<style id="home-css">[\s\S]*?</style>', lambda m: '<style id="home-css">\n' + css + '\n</style>', s, count=1)
assert n == 1; open(f, 'w').write(s); print('✓ home.css inlined')
