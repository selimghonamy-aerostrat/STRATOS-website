# aero-strat.com UI/UX v3.2: report

Branch `feat/uiux-v3` · 23 Nov 2026 · **Not merged, not on production.**
Preview (Vercel login): https://aerostrat-website-git-feat-uiux-v3-selimghonamy-3222.vercel.app

## How the work is built

- **One shared source.**
  - `css/ds.css` holds the brand tokens, the type scale and every shared component.
  - `scripts/partials/` holds the header (with the runway bar), the footer and the domains row.
  - `js/motion.js` holds the header, menu, reveals, runway, hero scrub and section nav.
  - `scripts/sync-shared.py` copies all of this into every page, inlining the CSS and JS so no file request blocks the first paint.
  - The static pages (privacy, sub-processors, 404) are filled the same way, between `SHARED` markers.
- **Per-page styles.** Each page has its own `css/pages/<page>.css`.
- **React.** It is self-hosted from `/vendor/`, with the same files and SRI hashes as before. There are no unpkg requests, and `support.js` loads with `defer`.

## Owner decisions applied

| Topic | Decision |
|---|---|
| Plane | Both: the runway bar keeps its plane taking off at the top, **and** the hero video plays its take-off as you scroll. There is no plain 2 px Coral line. |
| Privacy date | Change to 23 Nov 2026. It already read "23 November 2026", so nothing changed. |
| Wording | No existing copy rewritten except where the v3.2 prompt asks for it (listed per page below). S10 keeps the four existing roles. |

## Section by section (v3.2 prompt)

| § | Status | Notes |
|---|---|---|
| 1 Header | Done | Always visible. Transparent over the hero, solid navy gradient with blur and a hairline after 24 px. Height 72 → 64 px. Orange arc under the active link, with Book a walkthrough on the right. The mega panel shows Live/Next pills. The mobile sheet opens below the header and locks the page. Sticky bars (section nav, glossary bar) follow the compact header. Anchors land 88 px under the top. |
| 2 Hero take-off | Done | Uses a 170 vh scroll track with a sticky stage. The scroll position drives `currentTime` of a short-GOP clip: 0–9 s of the original, 1280 px at 985 KB, plus a 960 px version at 456 KB for mobile. It uses one rAF loop, a 0.12 lerp and seeks only on changes above 1/30 s. The headline lifts 40 px and fades after 55 %. The poster is a real full-size image and is the first paint. The source loads once (after `load` or on the first scroll), only on the live page. With reduced motion, Save-Data or no MP4 support, the hero shows the poster at normal height. |
| 3 Speed | Done | Nothing above the fold is hidden: reveals only apply to elements that start below the fold, after JS. CSS is inlined; React is self-hosted and `support.js` deferred. Only the 700 and 400 font weights are preloaded, with a size-matched Arial fallback (metrics taken from the font files). The video loads once. See the Lighthouse tables. |
| 4 Brand | Done | Tokens are `--as-deep-blue`, `--as-navy`, `--as-coral`, `--as-sky`, `--as-grey` and `--as-light` (plus white and black). Open Sauce One is used everywhere, with Light 300 added. Inter 500/600 is used only in product mock-ups. Two-tone headings pair Bold with Light 300 in the same colour. One type scale. The tiled S pattern comes from the unaltered icon on a 96 px grid, masked, at 3–5 %. The orange arc is on eyebrows, the active nav link, under hero headlines and above closing CTAs. Deep Blue surfaces appear on every page. The lockup carries ™ everywhere. The OG image and favicons already met the spec. |
| 5 Bugs 1–11 | Fixed | 1 Hero readouts moved into the right 30 %, in Inter, hidden below 1100 px. 2 Line masks have .14em padding and play at 85 % viewport over 500 ms. 3 No mid-transition grey: each section owns its background. 4 Pinned story: the outgoing step is gone in 180 ms before the incoming one starts at 220 ms; eyebrows have the arc and no numbers. 5 One container (content edge at 94 px on 1440). 6 Section padding is `clamp(72px, 9vw, 128px)` and the spacers are removed. 7 The S watermark box is replaced by the masked pattern. 8 All cards end at full opacity. 9 Stats on one hairline row with a Coral +. 10 Footer lockup is 210 px wide, the duplicate tagline line is removed, and Up next sits on a Deep Blue band above it. 11 Zero console errors on every page. |
| 6 Domains | Done | A shared component (home, /solutions, /about) with 56 px icon plates. Training uses the Coral plate and Live pill; Next items are at full opacity. Hover lifts the plate and grows the rule from 24 to 48 px. It is a swipe list on mobile. |
| 7 Landing | Done | Hero take-off with the arc and the three entry paths. Who we are on Light Gray with the S icon in the left column, a 28 px statement, and an icon plate in place of the word "Tech". Proof numbers become a Deep Blue S-pattern band. The closing CTA is Deep Blue with the pattern. |
| 8/9 Pages | Done | Every page is rebuilt from the shared components. Details below. |

## Page by page (copy changes listed in full)

- **Home.**
  - Copy changes: the word "Tech" is replaced by an icon plate. That's all.
- **Solutions.**
  - Layout: PageHero; entry paths; the domains row under the heading "Where we started, and what comes next." (new heading, as asked); dark two-column product sections with glass mock-ups, each ≤ 800 px; the shared "One pilot record" diagram; "What is shared" as a Deep Blue band; roles as a hairline list (wording unchanged; the existing typo "Instructors & instructors" is left as it is); stages on a dotted timeline; FAQ; closing CTA; Up next.
  - Copy changes: the hero lead is cut to two lines (the last sentence on data isolation is removed; it is still stated three times further down the page). New table headers "Shared item" / "Who writes it".
- **EBT/CBTA.**
  - Layout: PageHero with the Live pill and stat strip; section nav; problem switcher; positioning on Deep Blue; stage stepper with "You are here"; glass demo; analytics switcher; Director's view; product status pills; onboarding timeline; FAQ; closing CTA; Up next.
  - Copy changes: numbering removed ("01 The problem", "Stage 0–3" labels, "Altitude 01", outcome and step numbers). New "Sample data" pills.
- **TMS.**
  - Layout: PageHero with the glass mini-console; section nav ("The modules" label, no count anywhere); hairline lists; console in a glass panel; validity rule diagram; modules on Deep Blue; loop ring; "One pilot record" diagram; implementation timeline; FAQ; closing CTA; Up next.
  - Copy changes: numbering removed. New labels in the rule diagram: Licence / Medical / Check / Course / Overall status.
- **About.**
  - Layout: PageHero; Vision and Mission on a Deep Blue band (Light 300 with the key phrase in bold, wording unchanged); the home stats; the domains row with the EBT/CBTA and TMS links; "Core strategic pillars." with icon plates; brand values as Light words; "Set up from your manuals." merged into the closing CTA; Up next.
  - Copy changes: the full stop on the pillars heading; new eyebrows "Our strategy" and "Our values"; the third stat is now the home "One shared foundation".
- **Clients.**
  - Layout: PageHero with a photo; borderless "Coming soon" with a pill; the proof numbers band; the pilot project on a dotted timeline; closing CTA ("See it on your own data.", reused from home); Up next.
  - Copy changes: the line "developed and tested with two regional airlines for more than eight months" is replaced by the approved "In co-development with two regional airlines for more than eight months."
- **Contact.**
  - Layout: PageHero with "Pick a time ↓"; booking on a Deep Blue band in a glass panel (embed behaviour unchanged); the form is now a real `<form>` with names, autocomplete, required, `aria-invalid` and inline errors, sentence-case labels and pill toggles (Coral when selected), with the success message shown in place (existing wording); "What happens next" on a dotted timeline; large email link.
  - Copy changes: new section head "Prefer to write first? We reply within one business day." (adapted from existing text). New field errors: "Please add your name/email/message."
- **Glossary.**
  - Layout: PageHero with the pattern and pill jump links; one sticky filter and A–Z bar; borderless two-column terms; the competencies as a hairline table; closing CTA.
  - Copy changes: none. All ids, definitions and the DefinedTermSet are unchanged.
- **Privacy and Sub-processors.**
  - Layout: full header and footer; short hero; reading column with a sticky table of contents; the sub-processor table on hairlines.
  - `/subprocessors` now redirects to `/legal/subprocessors`.
- **404.**
  - Layout: full header and footer; navy with the S pattern and a flight-path arc; pill links.

## Lighthouse

The local static server compresses files with gzip, as Vercel does; the preview itself is behind Vercel login. Each figure is the median of 3 runs.

@@LH@@

## Checks

- **Copy grep** for STRATOS, ®, certified, "approved software", "live with airlines", "AI coaching" and US spellings (optimize, behavior, center, analyze, program, color) over the visible text, component strings and JSON-LD of every page: **0 hits**. The only matches were CSS/JS property names.
- **Console errors:** 0 on every page.
- **Header:** turns solid on 10/10 loads on `/`, `/about` and `/contact`.
- **Horizontal scroll:** none at 1440, 1280, 1024, 768, 390 and 360 px.
- **Reduced motion:** nothing is hidden or pinned, the hero shows the poster, and the marquee and readouts are still.
- **Video:** `hero-takeoff*.mp4` is requested at most once. There are no unpkg requests.

## Open items for the owner `[CONFIRM]`

| Item | Proposal |
|---|---|
| The TMS hero photo shows a floating "AI COACHING REPORT" panel | Replace the photo, or crop it, because the site says "AI analysis". |
| The Solutions EBT/CBTA mock-up lists IATA "Stage 0–3" as data rows | Keep (it is product data, not a label), or rename the rows to the stage names. |
| "Instructors & instructors" (Solutions roles) | Fix the typo to "Instructors & examiners". It is left unchanged for now. |
| The TMS status legend | Add the ranges back ("Warning 31–60", "Critical ≤ 30"); currently it shows the names only. |
| Uploads cache | 30 days plus stale-while-revalidate instead of 1-year immutable, because upload file names are not versioned. |
| A reduced-motion visit on production plays the hero video for about 3.5 s | Pre-existing on `main`. The new scroll-driven hero no longer autoplays at all. |
