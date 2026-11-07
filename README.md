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
Contact.dc.html      Contact Us      → /contact

js/support.js        Page runtime (renders the <x-dc> templates; generated, do not edit)
js/hero-video.js     Keeps the homepage background video playing on all browsers
css/responsive.css   Phone/tablet fixes shared by every page (solid mobile menu, hero size, tap targets)
css/fonts.css        Open Sauce One, the AeroStrat brand typeface (files in fonts/)

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
```

## Brand

AeroStrat brand book: `docs/brand/AeroStrat_Brand_Guidelines_NEWVERSIOn.pdf` (issue 002.3, Nov. 2026).

- Colours: Deep Blue `#00348C` (brand, navigation), Coral Orange `#FF5A13` (logo swoosh, primary buttons, alerts), Sky Blue `#3F9EE8` (active states, metrics), Unbiased Grey `#B4B4B4`, Light Gray `#ECF0F3`, black.
- Logo: the S icon (two aircraft in the stratosphere "S") beside the AeroStrat wordmark with the orange swoosh. Files in `uploads/svg/`: `aerostrat-lockup-tagline-*` (header and footer), `aerostrat-lockup-*` (no tagline), `aerostrat-lockup-stacked-*`, `aerostrat-icon-*`, and wordmark-only versions. `-white` for dark backgrounds, `-navy` for light ones.
- Type: Open Sauce One for headings and marketing text, Inter for body and UI text.

## Editing content

Page text lives in each `*.dc.html` file. SEO tags (title, description, canonical, Open Graph, JSON-LD) are in each page's `<head>`.

When page text changes, also update the matching file in `md/` and rebuild `llms-full.txt` so AI assistants see the same content.

## Search engines and AI assistants

After publishing changed pages, notify Bing (and ChatGPT search / Copilot, which use Bing) through IndexNow:

```
curl -X POST https://api.indexnow.org/IndexNow -H 'Content-Type: application/json' \
  -d '{"host":"aero-strat.com","key":"0790cee3ef27844194c3e76ea620a11b","urlList":["https://aero-strat.com/"]}'
```

Google: submit `https://aero-strat.com/sitemap.xml` in Search Console.

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
