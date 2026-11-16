# aero-strat.com UI/UX refinements: plan

Branch `feat/ux-refinements` · prepared 16 Nov 2026 · **no page has been edited yet**. This plan needs your approval first.

## 1. What the repo actually is (differs from the brief)

| Brief assumed | Reality |
|---|---|
| Vue / petite-vue templates | Each page (`*.dc.html`) holds a raw template inside `<x-dc>…</x-dc>` plus a `<script type="text/x-dc">` with the data and logic. A generated **React** runtime (`js/support.js`, "do not edit") fetches the page's own HTML, reads the template and renders it. |
| A build step that generates pages | No build. Vercel serves the files as they are, with clean-URL rewrites in `vercel.json`. The only generator is `scripts/prerender.mjs` (added 8 Nov). It puts a drawn snapshot of each page between `PRERENDER:START/END` so the page paints before React loads. |
| CSS variables / design tokens | **None.** Every value is written inline. In use: `#001538` navy theme, `#00348C` Deep Blue, `#3F9EE8` Sky Blue, `#FF5A13` Coral, `#ECF0F3` Light Gray, `#B4B4B4` grey, `#4A5361` secondary text, `#FFFFFF`. Corners are 2 px. Breakpoints are 1020 / 820 / 760 / 640 / 400 px and `prefers-reduced-motion`. Font is Open Sauce One only (since today). New work reuses these literal values and the existing class names (`aerostrat-btn*`, `aerostrat-reveal`, `aerostrat-faq-item`, `aerostrat-section-pad`, tab pattern `role="tablist"` + state index). |
| Deploy | Vercel project `aerostrat-website`. Git-connected: `main` → production. Pushing `feat/ux-refinements` creates a **preview** URL. `main` is not touched until you approve. |

Lesson carried over from 8 Nov: changing how the runtime loads (e.g. `window.__resources`) broke the page styles and had to be rolled back. Every G1 step is therefore checked by comparing screenshots against the baseline.

## 2. Baseline (in `docs/ux-refinements/baseline/`, commit `73149d7`)

Screenshots of all 8 pages at 1440 and 390 px, a crawler (no-JS) fetch of each, and Lighthouse JSON (mobile).

| Page | Perf | A11y | BP | SEO | `{{` in crawler HTML |
|---|---|---|---|---|---|
| / | 92 | 96 | 100 | 100 | 62 |
| /about | 99 | 95 | 100 | 100 | 34 |
| /solutions | 99 | 96 | 100 | 100 | 104 |
| /ebt-cbta | 99 | 96 | 100 | 100 | 122 |
| /tms | 92 | 93 | 100 | 100 | 100 |
| /glossary | 100 | 96 | 100 | 100 | 20 |
| /clients | 100 | 95 | 100 | 100 | 20 |
| /contact | 100 | 96 | 100 | 100 | 33 |

The only accessibility failures are `color-contrast` (all 8 pages) and `link-in-text-block` (1 page). Fixing these gets every page to ≥ 95, which becomes part of A2.

## 3. Rules applied to every task

- One commit per task ID, then `npm run prerender` (otherwise the stale snapshot flashes for about 1 s), then a screenshot diff against the baseline at 1440/390.
- Copy changes also go into `md/*.md`, `llms.txt` and `llms-full.txt`, so AI crawlers see the same text.
- No client names. No certification, hosting, SLA or integration claims. UK spelling. No "STRATOS", no "®".

## 4. Tasks: files, risk, verification

### P0 fixes

| ID | What I will do | Files | Risk | Verify |
|---|---|---|---|---|
| **G1** | (a) Wrap each page's `<x-dc>` template in an inert `<template>` element so crawlers no longer read raw `{{ }}`. The runtime reads the template from the fetched text, so this should keep working. **To be confirmed by a test first.** If the runtime needs `<x-dc>` in the live DOM, the fallback is a `data-nosnippet` + `hidden` wrapper and I will report back. (b) Extend `prerender.mjs` to click through every tab set and accordion and write all panels into the snapshot, the inactive ones with `hidden`. The visible page stays identical. | all `*.dc.html`, `scripts/prerender.mjs` | **High.** Touches page loading. | `curl` shows 0 `{{` and the text of every tab. Screenshot diff identical. Console has no errors. CLS stays 0. |
| **G2** | About: the fragment "…digital form. Support and maintenance." becomes "Support and maintenance included." (wording already on /ebt-cbta). Home: "Where we started." appears twice in a row (as the 02 Training-tab line and as the 03 eyebrow); I change the tab line to "Live · where we started" **[CONFIRM wording]**. Contact: there is no closing band. The brief means the fixed mobile CTA bar, which on /contact links to /contact. I hide that bar on /contact only. | About, index, Contact | Low | screenshots |
| **G3** | Founders' decisions, applied everywhere including head meta, JSON-LD, md and llms. **Status:** "live with airlines today", "live today" and "Which products are live today?" become co-development wording; the "Live" pills stay. **Baseline EBT live** in the /ebt-cbta stage tabs, FAQ and Solutions ("Conventional → Baseline EBT"). Enhanced EBT becomes "Future" on Solutions too (it currently says "Out of scope", which contradicts /ebt-cbta). **Modules:** the Solutions stat "7 modules in one system" becomes "Daily · validity checked every day". **Statuses:** Valid > 60 d · Warning 31–60 d · Critical ≤ 30 d · Expired · Missing, in brand colours only. There are 3 different colour sets today (TMS hero, TMS console/widget, Solutions with green #1F7A4D and yellow #8A6300); all three get one mapping. **AI:** "AI coaching assistant", "AI coaching & fleet report" and "AI Coaching Assistant" (shared data on 5 pages) become "AI analysis…". **Samples:** TMS hero 148/3/7/15 is aligned with the console rows (1/3/3/1). F/O S. Ibrahim's medical is "Critical" everywhere (it is "Yellow" in the widget). "Capt. John" stays a captain on the A320 (the risk board says "B737 · FO"). Capt. A. Farouk's line check is aligned between /tms and /solutions. **Implementation:** Discovery · Build · Configure · Go-live, about five weeks, on all three pages. **Contact form:** already lists "Conventional" and "EBT principles" separately, so no change. | Solutions, EBT-CBTA, TMS, index, About, Contact, shared data on 5 pages, md, llms | Medium (many strings) | grep for old phrases returns 0; screenshots |
| **G4** | optimize→optimise, minimize→minimise, rigor→rigour (About, md, llms). `og:locale` en_US→en_GB on all 8 pages. Nav/footer "Training · EBT / CBTA" → "Training · EBT/CBTA". Footer link "EBT/CBTA glossary" → "EBT and CBTA glossary". | all pages, md, llms | Low | grep |
| **G5** | Already done today (™ on every lockup, cover and share image). Only a re-check. | n/a | n/a | n/a |

### P1 navigation

| ID | What | Risk |
|---|---|---|
| **N1** | Sticky jump-nav under the header after the hero, on /ebt-cbta (01–09), /tms (01–08) and /solutions. Solutions has 3 numbered and 5 un-numbered sections; the nav lists the eyebrow labels as written. IntersectionObserver highlight, horizontal strip on mobile. | Medium: must not collide with the fixed header or the mobile CTA bar |
| **N2** | Breadcrumbs above the hero eyebrow on inner pages. JSON-LD BreadcrumbList already exists on 7 pages; I add it where missing and keep it in line with the visible trail. | Low |
| **N3** | "Up next" row of 3 cards above the footer on every page, reusing the existing card style. | Low |
| **N4** | First use per page gets `<abbr>` + a link to the glossary anchor, **only for anchors that exist**: OB, TEM, OPC/LPC, OM-D, ETR. The glossary has **no** entries for TRE/TRI, IOSA, ECAA or MPL. Adding them is new content **[CONFIRM]**. | Low |
| **N5** | Arrow-only links and carousel buttons get descriptive text or `aria-label`. | Low |

### P2 new sections: **blocked**

**E1 Evidence loop** and **E2 AeroStrat Context Layer** need `aerostrat-sections.html`, which is not on this machine. Plan once received: rebuild them as template + data inside `EBT-CBTA.dc.html` after "02 Positioning", renumber 03–09 → 05–11, and use the site's colours, font and 2 px corners. Budget < 30 KB gzipped. Reduced motion is respected. Whether the home "compact ring" fits section 03 will be judged from screenshots.

### P3 enhancements in existing sections

| ID | Notes / risk |
|---|---|
| **E3** | Concordance dot chart in "06 The Director's view", same card. Low. |
| **E4** | "Sample data" tags on every mock-up and an accessible "Enlarge" dialog. Medium (focus trap). |
| **E5** | Stage picker "You are here" in "03 The transition", with the CTA to `/contact?stage=`. Depends on G3 statuses. |
| **E6** | Week 1–5 selector reused on /solutions, /ebt-cbta 08 and /tms 07. /tms 07 is currently a migrate/configure/validate layout. I add the week selector **above** it and keep the existing columns. |
| **E7** | 3-node diagram "EBT/CBTA — Training record — TMS" in Solutions 03 and TMS 06. Static rendering of the steps is covered by G1. |
| **E8 / E9** | "Who holds what" strip and 4 trust fact cards in the Solutions "You own the programme" section, verified claims only. |
| **E10** | Clients: the co-development facts band and "How a pilot project works", using existing copy. |
| **E11** | Home: (a) stage chips under the hero buttons. **Note:** you asked today to keep the hero clean (dash removed), so I will show this as a screenshot before keeping it. (b) is covered by G1. (c) "Tech" card: proposal in the CONFIRM table, not changed. |
| **E12** | About: "AeroStrat in 100 words" with a Copy button. There are no founder cards today, so I leave that as is until photos and lines are supplied. |
| **E13** | Glossary A–Z strip, filter box, "Last reviewed: November 2026", product links. DefinedTermSet JSON-LD **already exists** (27 terms) and will be kept in sync. |

### P4 conversion

**C1:** A closing-band sub-line ("A 30-minute walkthrough…", "We reply within one business day.") and "Book a 30-minute walkthrough" where it fits. **C2:** `?product=` / `?stage=` pre-selection (the form already has these option groups), "What happens next" steps, required/inline validation with `role="status"`, and the honeypot kept. The privacy link waits for §6.

### P5 accessibility, performance, SEO

**A1:** The hero video already has a poster, `muted` and `playsinline`. It has **no pause control**, and both `js/hero-video.js` and the page script *force* playback again on a timer. I add a Pause button and change both scripts to respect a user pause and `prefers-reduced-motion`. **A2:** Tabs already use `role="tablist"`. I add `aria-controls`, `tabpanel`, arrow keys, focus rings and contrast fixes. **A3:** alt text. **A4:** SoftwareApplication already exists on product pages. I add FAQPage where there is an FAQ but no markup, and BreadcrumbList on the home page. **A5:** extra share images in the existing style, if they render cleanly. **A6:** lazy-load below-the-fold media; keep CLS at 0.

## 5. Order of work (each one is one commit on the branch)

G1 (spike first, reported to you before continuing if the fallback is needed) → G3 → G4 → G2 → A2 contrast → N2 → N5 → N4 → C1 → C2 → E5 → E6 → E7 → E8/E9 → E3 → E4 → E10 → E13 → E12 → E11 → N1 → N3 → A1 → A4 → A6 → (E1, E2 when the file arrives) → report. Push the branch for a **Vercel preview** only.

## 6. Needs founder input

| Item | My proposal |
|---|---|
| `aerostrat-sections.html` | Please send it. E1/E2 are blocked without it. |
| Baseline EBT "live" vs the roadmap | Today Baseline reads "Partly roadmap: equivalency tables and line-check intervals on the roadmap". Proposed: Baseline EBT **Live**, and keep "Malfunction and approach equivalency tables" and "Baseline line-check intervals" under *Planned next* reworded as **"Equivalency tables (malfunction and approach)"** and **"Line-check interval tracking"**, so they read as additions rather than Baseline itself. Is that correct? |
| Home 02 Training tab line (G2) | "Live · where we started" |
| "Tech" stat card (E11c) | Replace with **"9 · ICAO competencies, graded on every check"**. |
| Glossary terms TRE/TRI, IOSA, ECAA, MPL (N4) | Add 4 short entries, or skip their links. |
| Founder cards (E12) | Need photo, role, one line and LinkedIn for each. Otherwise unchanged. |
| Legal footer + `/privacy` (§6) | Footer: "AeroStrat OÜ · Registry code 17638511 · Tallinn, Estonia" (the code is already public in the site's JSON-LD). Draft `/privacy` prepared, not published. |
| Contact privacy line (C2) | Goes live together with `/privacy`. |
