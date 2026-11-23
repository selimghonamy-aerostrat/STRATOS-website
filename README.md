# AeroStrat website

Source for **https://aero-strat.com**, the website of AeroStrat (Intelligence Driven Aviation). Hosted on Vercel; every push to `main` deploys to production automatically.

## Structure

```
index.dc.html        Home            → /
About.dc.html        About Us        → /about
Solutions.dc.html    Solutions       → /solutions
EBT-CBTA.dc.html     EBT/CBTA        → /ebt-cbta
TMS.dc.html          TMS             → /tms
Clients.dc.html      Clients         → /clients
Glossary.dc.html     EBT/CBTA glossary → /glossary
Contact.dc.html      Contact Us      → /contact

api/contact.mjs      Contact form → email (Vercel function, sends through Resend)
js/support.js        Page runtime (renders the <x-dc> templates; generated, do not edit). Loads React 18.3.1 from /vendor/
js/motion.js         Header, menu, reveals, runway bar, hero take-off scrub, section nav (inlined into every page)
vendor/              React and ReactDOM 18.3.1 UMD (same files and SRI hashes as unpkg)
js/hero-video.js     Keeps the homepage background video playing on all browsers
css/ds.css           Design system: brand tokens, type scale and every shared component (single source)
css/pages/*.css      Styles for one page each
css/responsive.css   Older shared rules (FAQ, glossary, booking, pre-render hand-over)
css/fonts.css        Open Sauce One (marketing type, 300-800) and Inter 500/600 (product mock-ups only)
scripts/partials/    Shared header (with the runway bar), footer and domains row

uploads/             Images, video, logos
uploads/brand/       Share images (og-image.png for the site, og-ebt-cbta.png, og-tms.png) and raster logo for structured data
uploads/svg/         AeroStrat logos from the brand guidelines: horizontal / stacked, with or without
                     tagline, in white (for dark backgrounds) and navy (for light backgrounds)

md/                  Markdown copy of each page for AI crawlers, served at /<page>.md
llms.txt             Short site summary for AI assistants
llms-full.txt        All pages in one file, for AI assistants
robots.txt           Allows search engines and AI crawlers
sitemap.xml          Page list for Google/Bing
<hex>.txt            IndexNow key for Bing; do not delete or rename

favicon.svg, favicon-96.png, apple-touch-icon.png   Browser and home-screen icons
site.webmanifest     App name and icons for browsers and phones
404.html             Branded "page not found" page (not indexed)
.well-known/security.txt   Security contact (info@aero-strat.com); renew the Expires date yearly
vercel.json          Clean URLs, Markdown routes and response headers

docs/                Internal, not published (.vercelignore): brand book PDF and
                     ready-to-paste directory profiles (LinkedIn, Crunchbase, G2…)
                     and LinkedIn launch post drafts
```

## Brand

AeroStrat brand book: `docs/brand/AeroStrat_Brand_Guidelines_issue_002-3_Nov2026.pdf` (issue 002.3, Nov. 2026); working notes in `docs/brand/Brand_Assets.md`.

- Colours: Deep Blue `#00348C` (brand, navigation), Coral Orange `#FF5A13` (logo swoosh, primary buttons, alerts), Sky Blue `#3F9EE8` (active states, metrics), Unbiased Grey `#B4B4B4`, Light Gray `#ECF0F3`, black.
- Logo: the S icon (two aircraft in the stratosphere "S") beside the AeroStrat wordmark with the orange swoosh, and the ™ sign (not ®): superscript at the cap height after "Aviation" (or after "Strat" when there is no tagline). The logo PNG and the share images in `uploads/brand/` carry the ™ too. Files in `uploads/svg/`: `aerostrat-lockup-tagline-*` (header and footer), `aerostrat-lockup-*` (no tagline), `aerostrat-lockup-stacked-*`, `aerostrat-icon-*`, and wordmark-only versions. `-white` for dark backgrounds, `-navy` for light ones.
- Type: Open Sauce One for all website text (the brand book's "non-UI" typeface for marketing). Inter is reserved for the AeroStrat platform UI, so the site no longer loads it.
- Buttons: primary CTAs are Coral Orange with white text, sentence case, semi-bold.

## Editing content

Page text lives in each `*.dc.html` file. SEO tags (title, description, canonical, Open Graph, JSON-LD) are in each page's `<head>`.

When page text changes, also update the matching file in `md/` and rebuild `llms-full.txt` so AI assistants see the same content.

### Shared source (run after changing css/, js/motion.js or scripts/partials/)

```
python3 scripts/sync-shared.py            # or name pages: python3 scripts/sync-shared.py TMS.dc.html
cd scripts && node prerender.mjs          # or: node prerender.mjs TMS.dc.html
```

`sync-shared.py` copies the header, footer and domains row from `scripts/partials/` into every page, and inlines `css/fonts.css` + `css/responsive.css` + `css/ds.css` (`<style id="site-css">`), `css/pages/<page>.css` (`<style id="page-css">`) and `js/motion.js` (MOTION markers), so no stylesheet or script request delays the first paint. The privacy, sub-processors and 404 pages are filled the same way between `SHARED` markers. Never type the text `<x-dc` in CSS or JS: `support.js` finds the template by its first occurrence (the sync script refuses it).

### Pre-rendered pages (re-run after every change)

Each page contains a ready-drawn copy between `<!-- PRERENDER:START -->` and `<!-- PRERENDER:END -->`, so phones see the page about 1 s sooner instead of waiting for React to download. The live page replaces the copy as soon as it is drawn. **After any change to a page's text, layout or `css/`, rebuild the copies**, or the old version shows for about a second:

```
cd scripts && npm install && npm run prerender
```

It needs Google Chrome installed. Never edit inside the markers by hand; the script regenerates them, and removing the block restores the page exactly as it was.

The copy also includes every tab panel (the inactive ones `hidden`), so search engines and AI crawlers that do not run JavaScript read all tab text.

### Page template inside a comment

Each page's template sits inside `<x-dc><!--dc-template … dc-template--></x-dc>`, so crawlers never see raw `{{ }}` placeholders. Edit the template as usual, but **never type the comment terminator (two hyphens followed by `>`) inside it** (it would end the comment early); use plain HTML without `<!-- -->` notes. `js/support.js` carries a small marked patch (`unwrapDcTemplate`) that removes the comment before rendering; keep it if the runtime is ever regenerated. The script tag loads `/js/support.js?v=dc3` with `defer`: bump the version whenever `support.js` changes.

## Search engines and AI assistants

After publishing changed pages, notify Bing (and ChatGPT search / Copilot, which use Bing) through IndexNow:

```
curl -X POST https://api.indexnow.org/IndexNow -H 'Content-Type: application/json' \
  -d '{"host":"aero-strat.com","key":"0790cee3ef27844194c3e76ea620a11b","urlList":["https://aero-strat.com/"]}'
```

Google: Search Console property `aero-strat.com` (Domain type, account selimghonamy@aero-strat.com), verified on 2026-11-07 by the `google-site-verification` TXT record at Hostinger (do not delete it). Sitemap `https://aero-strat.com/sitemap.xml` submitted the same day. After big page changes, use URL inspection → Request indexing.

Bing: Bing Webmaster Tools site `https://aero-strat.com/` (signed in with Google, selimghonamy@aero-strat.com), verified on 2026-11-08 by the `msvalidate.01` meta tag in `index.dc.html` (do not remove it). Sitemap submitted and all 7 pages sent through URL Submission. Bing also feeds ChatGPT search and Copilot; its "AI Performance" report shows when AeroStrat is cited in AI answers.

## Contact form

The Contact page posts to `/api/contact`, which emails the enquiry through Resend (connected in Vercel → Integrations → Resend; the key is the `RESEND_API_KEY` environment variable). Reply-to is the visitor's address. A hidden field filters out spam bots.

- Messages go to `info@aero-strat.com` (Google alias of `selimghonamy@aero-strat.com`) from `website@aero-strat.com`. Override with `CONTACT_TO` / `CONTACT_FROM` in Vercel → Settings → Environment Variables.
- aero-strat.com is verified in Resend (2026-11-07) through three records at Hostinger DNS: TXT `resend._domainkey`, CNAME `send`, CNAME `rsend`. Do not delete them, or the form stops sending.

## EBT/CBTA handbook

The old STRATOS-era handbook PDF was taken down on 2026-11-07 while a new one is written. Until then `vercel.json` sends `/uploads/AeroStrat_EBT_CBTA_Handbook.pdf` to `/ebt-cbta` (temporary redirect). When the new PDF is ready: remove that redirect, add the file to `uploads/`, link it again on the EBT/CBTA and Contact pages, and add its text to `llms-full.txt`.

## Publishing

Double-click `Publish website.command` (in the parent folder), or:

```
git add -A
git commit -m "Describe the change"
git push
```

The live site updates about a minute after the push.

## Preview locally

The clean URLs (`/about`, `/tms`, …) are Vercel rewrites, so preview with `vercel dev` rather than opening the files directly.
