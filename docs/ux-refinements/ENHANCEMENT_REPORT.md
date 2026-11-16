# aero-strat.com UI/UX refinements: report

Branch `feat/ux-refinements` · 16 Nov 2026 · **not merged, not on production**.
Preview (Vercel login required): https://aerostrat-website-nlrie4rps-selimghonamy-3222.vercel.app
Plan: `ENHANCEMENT_PLAN.md`. Screenshots: `baseline/` (live site before) and `after/` (branch), every page at 1440 and 390 px.

## Founder decisions applied (16 Nov)

Plan approved; Baseline EBT confirmed live, with the roadmap items worded as additions. The products are **live** ("live, developed and tested with two regional airlines"). The "Tech" card is unchanged. TRE/TRI, IOSA, ECAA and MPL were added to the glossary. There are no founder cards. A legal footer and privacy notice were added because the contact form collects personal data.

## What changed, task by task

| ID | Change | Main files |
|---|---|---|
| G1 | The template sits inside `<!--dc-template … -->` inside `<x-dc>`. `support.js` unwraps it (a marked patch) and is loaded as `?v=dc2`. The pre-render clicks every tab and stores the inactive panels `hidden`. **Crawlers: 0 `{{` on all pages**, and every tab's text is included. | all pages, `js/support.js`, `scripts/prerender.mjs`, README |
| G2 | About: "Support and maintenance included." Home: the 02 Training tab line reads "Live today." (it no longer repeats the 03 eyebrow). Contact: the mobile CTA bar is hidden (both its buttons linked to /contact). | About, index, Contact |
| G3 | Status wording; Baseline EBT live (tabs, FAQ, Solutions coverage, AI files); Enhanced EBT is "Future plan" everywhere; the TMS module count is replaced by "Daily · validity checked every day"; status levels Valid / Warning 31–60 / Critical ≤ 30 / Expired / Missing in brand colours on /tms and /solutions; "AI analysis" replaces "AI coaching"; sample data agrees within each page. | pages, md, llms |
| G4 | optimise / minimise / rigour; `og:locale` en_GB and `lang="en-GB"`; "EBT/CBTA" without spaces; "EBT and CBTA glossary". | all |
| G5 | ™ logos were already done on 16 Nov (commits 01463fb, 63532c6). | n/a |
| N1 | Sticky "On this page" bar under the header on Solutions, EBT/CBTA and TMS. It highlights the section in view, scrolls smoothly (or instantly with reduced motion) and becomes a horizontal strip on phones. | `js/jumpnav.js` |
| N2 | Breadcrumbs on all inner pages; About gets BreadcrumbList JSON-LD. | inner pages |
| N3 | "Up next" row with three page cards above every footer. | all |
| N4 | First use per page of OM-D, TRE/TRI, ECAA, OPC, MPL, TEM and IOSA links to the glossary with `<abbr>`. | EBT-CBTA, TMS, Contact, index |
| N5 | TMS "+ Record" buttons carry the pilot and item in their label; glossary OB/MT links have full names. Everything else already had labels. | TMS, Glossary |
| E1, E2 | **Not built.** `aerostrat-sections.html` was not supplied. | n/a |
| E3 | Concordance band = mean for the same scope ± 0.4; each instructor is tagged Concordant or Review; caption "Sample data… never judged automatically". | EBT-CBTA |
| E4 | "Sample data" tags on every mock-up. Enlarge (native dialog, Esc closes, focus returns) on the EBT form, analytics, risk board and TMS console. | `js/enlarge.js` |
| E5 | "You are here" marker; button "Book a walkthrough for your <stage> programme" links to `/contact?product=ebt&stage=…`. `#stages` anchor. | EBT-CBTA |
| E6 | The same five-week timeline (Week 1 · Weeks 2–3 · Week 4 · Week 5) on EBT 08 and TMS 07. The interactive selector stays on Solutions so the other two layouts keep their look. | EBT-CBTA, TMS, md |
| E7 | Three-node "EBT/CBTA — Training record — TMS" diagram in Solutions 03 (TMS 06 already had one). | Solutions |
| E8, E9 | "Who holds what" strip plus four data facts, verified claims only. | Solutions, md |
| E10 | Clients: co-development figures and "How a pilot project works", below "Coming soon". | Clients, md |
| E11 | Stage chips under the home hero (hidden under 640 px). Tab text is static (G1). The "Tech" card is unchanged. | index |
| E12 | "AeroStrat in 100 words" (98 words, from existing copy, no founders) with a Copy button. | About, `js/copy.js` |
| E13 | Glossary filter, A–Z strip, "Last reviewed: November 2026", product links; DefinedTermSet now has 31 terms. | Glossary, `js/glossary.js` |
| C1 | Closing bands: "Book a 30-minute walkthrough" plus "We reply within one business day". | 6 pages, md, llms |
| C2 | `?product=` / `?stage=` pre-selection; option buttons with `aria-pressed`; "(required)" markers; `aria-invalid` on errors; "What happens next"; privacy line. | Contact |
| §6 legal | Footer "AeroStrat OÜ · Registry code 17638511 · Tallinn, Estonia · Privacy notice" on every page and the 404; `/privacy` (GDPR notice, static page, rewrite, sitemap). | all, `privacy.html`, `vercel.json`, `sitemap.xml` |
| A1 | Hero video Pause/Play button; no autoplay with reduced motion; both play loops respect a user pause. | index, `js/hero-video.js?v=2` |
| A2 | Tabs: roving tabindex, arrow keys, Home/End, `aria-controls`/`aria-labelledby`, Sky Blue focus rings. Sky text on Deep Blue now uses the brand's 80% Sky shade (#65B1ED). | `js/a11y.js`, pages |
| A3 | Decorative hero images already had empty alt text; no content images lacked alt. | n/a |
| A4 | JSON-LD validated; FAQPage text equals the visible FAQ on 4 pages. Fixed About's breadcrumb JSON-LD, which an earlier step had placed after `</html>`. | About |
| A5 | Not done (optional extra share images). | n/a |
| A6 | Below-the-fold images lazy-loaded. New JS is about 4.8 KB gzipped in total (budget 30 KB). | all |

## Lighthouse (mobile), main vs branch, both served locally from the same machine

Performance / Accessibility / Best practices / SEO:

| Page | main | branch | CLS | LCP |
|---|---|---|---|---|
| / | 92 / 96 / 100 / 100 | 90 / 96 / 100 / 100 | 0 → 0 | 3.1 → 3.3 s |
| /about | 89 / 95 / 100 / 100 | 88 / 95 / 100 / 100 | 0 → 0 | 3.5 → 3.6 s |
| /solutions | 84 / 96 / 100 / 100 | 81 / 96 / 100 / 100 | 0 → 0 | 3.8 → 4.2 s |
| /ebt-cbta | 85 / 96 / 100 / 100 | 84 / 96 / 100 / 100 | 0 → 0 | 3.8 → 3.9 s |
| /tms | 88 / 93 / 100 / 100 | 85 / **96** / 100 / 100 | 0.051 → **0** | 3.5 → 3.8 s |
| /glossary | 96 / 96 / 100 / 100 | 95 / 96 / 100 / 100 | 0 → 0 | 2.3 → 2.4 s |
| /clients | 98 / 95 / 100 / 100 | 98 / 95 / 100 / 100 | 0.001 → 0.001 | 2.0 → 2.0 s |
| /contact | 98 / 96 / 100 / 100 | 97 / 96 / 100 / 100 | 0.001 → 0.001 | 2.0 → 2.1 s |

Production (Vercel CDN, compression) scored higher on the same pages this morning; see `baseline/lh-*.json`. Accessibility, Best practices and SEO do not drop on any page. Performance drops 1–3 points because each page now carries more HTML (every tab's text for crawlers, plus the new sections).

**Remaining accessibility failures are all `color-contrast`:**
- White text on the Coral buttons (3.1:1). This was the founders' decision on 16 Nov; black text would pass at 6.7:1.
- Four small Coral labels in TMS "01 What changes" ("Time", "Errors", "Legacy tools", "No forward planning").

## Verification

- Crawler view: 0 `{{` and no duplicate body on all 8 pages and `/privacy`; text of all tab panels present.
- 419 internal links and anchors resolve (`#ebt-demo`, `#tms-demo`, `#stages`, `#directors-view`, jump-nav ids, glossary ids).
- Copy grep (new and edited copy, md, llms): no STRATOS, "certified", ®, US spellings, green/yellow wording, "AI coaching", "live with airlines" or client names.
- Browser tests:
  - The contact form pre-selects from the URL and marks invalid fields.
  - Enlarge opens, closes with Esc and returns focus.
  - The glossary filter shows "5 of 31".
  - The jump nav sticks under the header at 1280 and 390 px.
  - The video stays paused after a user pause and does not autoplay with reduced motion.
  - Arrow keys move between tabs on every page.
- No console errors on any page.
- Preview checked through the Vercel connector: `/privacy` returns 200.

## Open items

| Item | Status / proposal |
|---|---|
| E1 evidence loop, E2 Context Layer | Need `aerostrat-sections.html`. |
| White text on Coral buttons | Kept as decided; switch to black if you want the contrast audit to pass. |
| Status chip colours | Dark text on brand tints (Sky tint, Coral 20% / 45% / 100%, Grey 40%) instead of Sky or Coral text, which fail contrast. |
| Founder names | No cards were added, but About's company facts line and the JSON-LD still name the three founders (added 8 Nov). Remove? |
| Three tab sets without a marked panel | Solutions "Roles", TMS "Compare" and "Loop" have keyboard support but no `aria-controls` link. |
| `/privacy` wording | Please have it read once (retention 24 months; processors Vercel, Resend, Google Workspace, unpkg). |
| A5 share images | Not made. |
| Merge | After approval: merge to `main`, then send IndexNow and request indexing for the changed pages in Search Console. |
