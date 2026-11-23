# aero-strat.com UI/UX v3: plan

Branch `feat/uiux-v3` (from `main` at 3c4f9ae) · 23 Nov 2026 · **No site files edited yet.**
Booking prompt: already done on `main` (3c4f9ae, `/contact#book`).

> **Update 23 Nov (v3.1 prompt).** The plan now follows the v3.1 prompt (D1–D9: dark-first, borderless, graphic language).
> Decisions: **S10 keeps the existing four roles and their wording** (founder instruction: "don't change the wording, just enhance the UI/UX");
> S7/S8 wait for the /ebt-cbta round; home uses only existing `/uploads/` photos. **P0 is dropped:** the baseline below was measured
> without compression. Re-measured with gzip (as Vercel serves the site), every page scores 96–100, and self-hosting React made it slower, so it was reverted.
> Shared CSS now lives at the end of `css/responsive.css` (no extra request); `js/motion.js` is inlined into each page by
> `scripts/sync-motion.py`, because as a separate file it cost ~0.2 s of simulated LCP.

## 1. How the site is built (what the work has to fit into)

- **Pages.** There are 8 `*.dc.html` pages plus `privacy.html` and `legal/subprocessors.html`. Each `.dc.html` holds its own `<style>`, markup and a class component inside `<x-dc><!--dc-template … dc-template--></x-dc>`. Almost all styling is **inline `style=""`** on each element (no shared tokens). `js/support.js` renders it with React 18 UMD **and Babel standalone, both loaded from unpkg** at runtime.
- **Prerender.** Each page carries a generated snapshot between `PRERENDER` markers (`scripts/prerender.mjs`). It must be re-run after every template or CSS edit. Edit scripts must target the template, not the snapshot.
- **Shared files.** `css/responsive.css` (mobile header, reveal fallbacks, FAQ), `css/fonts.css`, `js/a11y.js` (tabs: roving tabindex and arrow keys), `js/jumpnav.js` ("On this page" bar), `js/hero-video.js` (keeps the video playing; reduced motion means poster only), `js/enlarge.js`, `js/glossary.js`, `js/booking.js`.
- **Existing behaviour.**
  - Reveal: `.aerostrat-reveal` plus an IntersectionObserver in each page's component.
  - Progress bar: the 10 px "runway" with a plane (`.aerostrat-runway`).
  - Header: `header[data-sticky]`, a Solutions dropdown driven by component state, and the mobile panel `.aerostrat-mobile-panel`.
  - Tabs: `role=tablist` throughout. Home 01–03 are tab or pressed-button panels.
- **Not on the site:** **E1 (evidence loop) and E2 (Context Layer) were never built.** The earlier report says "aerostrat-sections.html was not supplied". They exist only in your prototype artifact (SUL6AAQfnanqbZ4YwGTBjv), with their own new copy. See decision Q1.

### Approach

1. **Shared design-system layer.** Add one new `css/ds.css` (tokens, type scale, surfaces, motion, header, marquee) and one new `js/motion.js` (reveal, line mask, count-up, statement fill, header states, ghost demos, pinned story), loaded on every page.
2. **Hooks in the templates.** Add class hooks to each template (for example `class="ds-h2"`, `ds-card-raised`, `<span class="tone-2">`) and remove the inline font, colour and border declarations that would fight them. Inline styles win over classes, so rewriting the inline styles section by section is the main labour, rather than piling on `!important`.
3. **One owner for reveals.** `motion.js` runs only on the live `#dc-root` and re-binds after React re-renders, using a MutationObserver, as `jumpnav.js` does. The existing per-page reveal observers are retired so there is one reveal system.
4. **No new libraries.** Native CSS, IntersectionObserver and requestAnimationFrame only.

## 2. Baseline (captured 23 Nov, local server, Lighthouse 13.6 mobile)

Screenshots for all 10 pages at 1440 / 1024 / 768 / 390 px: `docs/uiux-v3/baseline/` (40 files, 27 MB, not committed yet; see §6). Raw JSON: `docs/uiux-v3/lighthouse/baseline-*.json`.

| Page | Perf | A11y | BP | SEO | CLS | LCP |
|---|---|---|---|---|---|---|
| / | **79** | 96 | 100 | 100 | 0 | 4.8 s |
| /about | 87 | 95 | 100 | 100 | 0 | 3.6 s |
| /solutions | **79** | 96 | 100 | 100 | 0 | 4.4 s |
| /ebt-cbta | **81** | 96 | 100 | 100 | 0 | 4.1 s |
| /tms | **84** | 96 | 100 | 100 | **0.054** | 3.8 s |
| /clients | 97 | 95 | 100 | 100 | 0 | 2.1 s |
| /contact | 96 | 96 | 100 | 100 | 0.001 | 2.3 s |
| /glossary | 93 | 96 | 100 | 100 | 0 | 2.6 s |
| /privacy | 96 | 100 | 100 | 100 | **0.127** | 0.8 s |
| /legal/subprocessors | 100 | 100 | 100 | 100 | 0.01 | 0.8 s |

**Correction:** these numbers came from an uncompressed local server. With gzip, the baseline (median of 3) is: / 99, /about 98, /solutions 97, /ebt-cbta 98, /tms 98, /clients 100, /contact 100, /glossary 100, /privacy 96, /legal/subprocessors 100. CLS: /tms 0.055 and /privacy 0.127 are the only pages above 0.05.

## 3. Tasks

Risk: L / M / H. Size is the added gzipped JS+CSS estimate (budget: 45 KB total).

### P0. Performance headroom (proposed, needs Q2)

| ID | Change | Files | Risk | Size | Verify |
|---|---|---|---|---|---|
| P0a | Self-host `react` and `react-dom` 18.3.1 UMD under `/vendor/` (same files, same versions, no new framework), with `preload`. This drops the unpkg connection from the critical path. | `js/support.js` (URL constants only), all pages' `<link>` | M | 0 (moved, not added) | Lighthouse LCP and Perf before and after on / and /solutions |
| P0b | Fix CLS on /privacy (0.127) and /tms (0.054): font fallback metrics (`size-adjust`) and reserved heights | `css/fonts.css`, privacy, TMS | L | <0.5 KB | Lighthouse CLS |

Babel standalone (about 3 MB) is also fetched from unpkg. Removing it means precompiling the templates, which changes the runtime. **Out of scope unless you ask.**

### D. Design-system layer (every page)

| ID | Change | Files | Risk | Size | Verify |
|---|---|---|---|---|---|
| D1 | Fluid type scale with `clamp()` (display, H2, H3, body; 62ch measure). `text-wrap: balance` on headings and `pretty` on paragraphs. Eyebrows unchanged (23 Nov style). | `css/ds.css`, inline `font:` removed from h1–h3 and body copy on all pages | M (wide-reaching) | ~1.5 KB | Screenshots at 4 widths; no overflow at 390 px |
| D2 | `.tone-2` muted second clause on two-part headings only. Candidates found: EBT "Today's tools can record the grade. / The analysis is still done by hand.", "One click. / Four things…", "Evaluate the pilot. / Analyse… / Monitor…", "A short list. / Not a wall.", "Live today. / Clear about…", "Fitted to the airline, / not the other way around."; Solutions "Every grade consistent. / Every skill measured.", "Every pilot current. / Every renewal planned.", "One platform. / Every role."; TMS "Records and competency grades. / One platform.", "One loop. / No re-keying.", "We move your records. / You sign off."; Clients "Built and tested / on real recurrent training." (single sentence, **left as is**); "Three steps. / One decision." (all CTA bands). Home headings are one-part, so they are unchanged. | all pages | L | 0.2 KB | Grep: copy is identical with tags stripped |
| D3 | Section padding of 120–160 px desktop and 72–96 px mobile; strict light/dark alternation in the current order; a 12-column, 1280 px grid helper | `ds.css`, section wrappers | M (page length grows about 15%) | 0.8 KB | Screenshots |
| D4 | Three surfaces only (`.ds-flat`, `.ds-raised`, `.ds-glass`); radii 12–16 px, buttons 8 px. The boxy `gap:1px` grids become spaced cards. | `ds.css`, every card grid | M | 0.8 KB | Screenshots, contrast check on glass |
| D5 | Motion tokens; reveal (fade + 12 px rise, 60 ms stagger, once); line-mask on H1/H2; count-up; hover states; full `prefers-reduced-motion` path | `js/motion.js`, `ds.css`; old per-page reveal code retired | M | ~3.5 KB | Reduced-motion walkthrough; Performance panel shows no long tasks |
| D6 | Header: transparent over the hero, then frosted navy 72 px after 80 px of scroll; hide on scroll down and show on scroll up; stays while focus is inside. **Mega panel**: 2 live cards, glossary link, 4 muted "Next" domains. Full-screen mobile sheet with the booking button pinned. **The progress line becomes a 2 px Sky Blue line, which replaces the current runway-and-plane bar** (as the prompt asks). | header markup on 8 pages plus 404, `motion.js`, `ds.css` | **H** (every page, keyboard and ARIA) | ~3 KB | Keyboard walkthrough; axe; iOS Safari check |

### S. Signature components

| ID | Page | Change | Risk | Size | Verify |
|---|---|---|---|---|---|
| S1 | Home | Line-mask H1; 3 glass "Sample data" chips over the video (hidden under 768 px); a stronger bottom gradient for AA contrast | L | 1 KB | Contrast sampled over 5 video frames |
| S2 | Home | 3 glass entry cards under the hero buttons (copy as given; both product lines exist in current copy) | L | 0.5 KB | Links, tab order |
| S3 | Home "Who we are" para; About intro | Word fill driven by scroll position (25% to 100%); reduced motion shows full colour | M (scroll handler cost) | 1 KB | Perf trace, rAF only |
| S4 | Home | Standards marquee between the hero and "Who we are", CSS-only, pauses on hover, static with reduced motion, `aria-label` set | L | 0.5 KB | Screen reader reads the label once |
| S5 | Home "02 direction" | 5 tiles (Live / Next), a scroll strip on mobile. The current tab panel ("Live today", per-domain lines) **stays below the row** so no copy is lost. Imagery: see Q3. | M | 1 KB + images | Screenshots, CLS |
| S6 | Home "03 training solution" | Pinned 300 vh story: 3 steps, sticky copy plus animated SVG on mock data, 3 clickable progress bars. Stacked cards on mobile and with reduced motion. The existing tab copy (head, desc, points) maps 1:1 to the steps. | **H** (scroll jank, prerender snapshot height) | ~5 KB | Perf trace at 4× CPU throttle; CLS |
| S7 | /ebt-cbta | Dotted-ring evidence loop. **Depends on E1, which isn't built.** See Q1. | H if E1 is built here | ~3 KB | Keyboard on ring nodes |
| S8 | /ebt-cbta | Context Layer as a glass panel. **Depends on E2, which isn't built.** See Q1. | M | ~1.5 KB | Contrast |
| S9 | /ebt-cbta "Try it", /tms console | ~6 s ghost demo on first view; stops on any input; never runs with reduced motion; "Watch it / Try it yourself" chips | M (must drive React state through real clicks) | ~2 KB | Recording; interaction cancels it |
| S10 | /solutions "Who uses it" | 4 numbered rows with role chips and greyscale-to-colour photos. **Conflicts with the existing section.** See Q4. | M | 1 KB + 4 photos | Approval before shipping (as the prompt asks) |
| S11 | /clients, home FAQ area | 120+ / 250+ / 14,000+ count-up strip with the caption given | L | 0.3 KB | Numbers match FAQ and JSON-LD |
| S12 | Home | Full-bleed dusk statement band, 4 lines, last line Coral. Image: see Q3. | L | 0.5 KB + image | Contrast |
| S13 | All CTA bands | S-icon watermark at 4%, orange arc above the heading, primary button → `/contact#book` (already true on all pages) | L | 0.3 KB | Screenshots |
| H1 | Home | "Tech · 25+ · 1" pillars → one wide strip with count-up; "Tech" replacement proposed as `[CONFIRM]` in the report | L | 0 | n/a |

### Page by page (after D1–D6)

- **Home:** S1, S2, S4, S3, S5, S6, H1, S11 (FAQ area), S12, S13.
- **About:** S3 on the intro; no founder cards (no photos supplied, and the no-founder-names rule applies); S13.
- **Solutions:** D2; S10 (after approval); the implementation weeks become a horizontal timeline with an animated progress line (the existing click-a-stage panel is kept); S13.
- **/ebt-cbta:** the jump nav becomes a glass pill bar (`jumpnav.js` CSS); the stage selector becomes large segmented cards; Director's view and concordance charts become Raised cards; S9; S7 and S8 per Q1; S13.
- **/tms:** jump nav as on /ebt-cbta; S9 on the console; the status legend becomes chips in brand colours; module tabs become vertical tabs on desktop with an animated indicator (`a11y.js` arrow keys switch to Up/Down when `aria-orientation=vertical`); S13.
- **Clients:** S11; "How a pilot project works" becomes a three-step horizontal timeline; S13.
- **Contact:** "Pick a time" and "Send a message" side by side as Raised cards on desktop (booking and form logic untouched).
- **Glossary:** the A–Z strip and filter restyled; term cards Flat.
- **Privacy and Sub-processors:** D1 and D3 only, plus the P0b CLS fix.

## 4. Order of work and checkpoints

1. P0 (if approved), then D1–D6, then the home page (S1–S6, S11–S13, H1). Each is committed on `feat/uiux-v3`, with prerender re-run before every commit.
2. `git push -u origin feat/uiux-v3`. **Checkpoint 1:** I send the Vercel preview link, before-and-after home screenshots and Lighthouse, then stop.
3. After approval: the other pages in this order: /ebt-cbta, /tms, /solutions (S10 separately for approval), /clients, /about, /contact, /glossary, privacy and sub-processors. Every feedback round is pushed to the same branch.
4. Final: report, recordings, copy grep, then a PR into `main`, **left unmerged**.

Never: commit, merge or push to `main`, `vercel --prod`, or promote.

## 5. Verification

- **Screenshots:** `scripts/shots.mjs` (new, local only; `scripts/` is not deployed) at 4 widths for every page, before and after.
- **Lighthouse:** mobile, same machine and server, before and after, every page.
- **Bundle:** `gzip -c css/ds.css js/motion.js | wc -c`, kept at or under 45 KB.
- **Copy:**
  - A text diff of each page with tags stripped, before and after. Only the §5 wording may appear.
  - Grep for `STRATOS`, `®`, `certified`, `optimize`, `behavior`, `center`, `analyze` and `program[^m]` (excluding filenames and URLs).
- **Walkthroughs:** keyboard-only and reduced-motion (DevTools emulation) walkthroughs, with notes.
- **Recordings:** GIFs of S1, S6, S7, S9 and S12 in Chrome.

## 6. Housekeeping

- **Screenshots:** the before and after sets are about 27 MB each as PNG. I'll commit them as WebP (about 3 MB a set) under `docs/uiux-v3/` (not deployed: `docs/` is in `.vercelignore`) and keep the PNGs local.
- **Copy-file sync:** when visible copy changes (S2, S4, S12 and S10 only), update `md/` and `llms-full.txt` to match.
- **Copy found during discovery (not changed, flagged only):** the Solutions role name "Instructors & instructors".

## 7. Decisions needed before I start

- **Q1. S7 and S8 (evidence loop, Context Layer).** Neither section exists on /ebt-cbta. Building them adds two new sections with new copy from your prototype, which goes beyond "S10 is the only new block".
  - Options: (a) build both from the prototype copy as part of this pass, with every line `[CONFIRM]` in the report; or (b) skip S7 and S8 now and build them later.
  - **Recommendation: (a), in the /ebt-cbta round, behind your approval like S10.**
- **Q2. Performance budget.** Home, Solutions, EBT/CBTA and TMS are at 79–84 before any change. Heavy motion will cost a little more.
  - Options: (a) do P0a (self-host the same React files; touches `support.js` URLs only), with the target "≥ 85 where achievable, never below baseline"; or (b) leave the runtime alone and accept "never below baseline".
  - **Recommendation: (a).**
- **Q3. Imagery for S5 tiles, S10 rows and S12 band.** `/uploads/` has only the 4 page hero backgrounds and the hero video poster.
  - Options: (a) S5 uses brand gradients with thin-line icons, S12 reuses an existing hero image, and S10 uses Unsplash or Pexels photos (credited in `CREDITS.md`, no liveries); or (b) source Unsplash or Pexels photos for all three.
  - **Recommendation: (a).**
- **Q4. S10 roles vs. existing copy.** The existing "Who uses it" tabs are **Training Director, Instructors, Training office, Pilots & cabin crew**. Each has "In TMS" and "In EBT/CBTA" lists. The prompt's four rows are **Heads of Training, Instructors, Records & compliance, Accountable Managers**. "Accountable Managers" has no existing copy, and "Pilots & cabin crew" would disappear.
  - Options: (a) restyle the existing four roles as the numbered rows (role chips from the existing `who` line, TMS and EBT lists inside each row); or (b) use the prompt's four roles with new one-liners `[CONFIRM]`.
  - **Recommendation: (a), because it removes no content and adds no claims.**
