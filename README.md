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

uploads/             Images, video, logos, handbook PDF
uploads/brand/       Share image (og-image.png) and raster logo for structured data
uploads/svg/         AeroStrat logos from the brand guidelines: horizontal / stacked, with or without
                     tagline, in white (for dark backgrounds) and navy (for light backgrounds)

md/                  Markdown copy of each page for AI crawlers, served at /<page>.md
llms.txt             Short site summary for AI assistants
llms-full.txt        All pages + the full EBT/CBTA handbook text, for AI assistants
robots.txt           Allows search engines and AI crawlers
sitemap.xml          Page list for Google/Bing
<hex>.txt            IndexNow key for Bing; do not delete or rename

favicon.svg, favicon-96.png, apple-touch-icon.png   Browser and home-screen icons
vercel.json          Clean URLs, Markdown routes and response headers
```

## Brand

AeroStrat. Logo colours navy `#00348C`, red `#EB2427`, white; website buttons and highlights keep the orange `#FF5A13`. The S icon (favicon, `uploads/svg/aerostrat-icon-*.svg`) sits beside the wordmark in the header and footer (`aerostrat-lockup-*.svg`). Wordmark in Aksen Expanded (logo files only), text in Open Sauce One. Source: `AeroStrat - Brand Guidelines - v1-2.pdf`.

## Editing content

Page text lives in each `*.dc.html` file. SEO tags (title, description, canonical, Open Graph, JSON-LD) are in each page's `<head>`.

When page text changes, also update the matching file in `md/` and rebuild `llms-full.txt` so AI assistants see the same content.

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
