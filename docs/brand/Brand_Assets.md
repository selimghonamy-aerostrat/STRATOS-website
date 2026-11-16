# AeroStrat brand assets — working notes (updated 11 Nov 2026)

Source: **AeroStrat Brand Guidelines, issue 002.3, Nov 2026** (41-page PDF, by NajjFarid.me).

## Logo
- Master lockup: S icon + "AeroStrat" wordmark + tagline "Intelligence Driven Aviation" + **™** (trademark sign; replaced the ® on 11 Nov 2026). The arc over the wordmark is **orange #FF5A13**. The previous issue had a red arc (#EB2427).
- ™ placement: Open Sauce One glyph. After the tagline it is a superscript at the tagline cap height, right after "Aviation". Without the tagline it sits at the wordmark cap height, right after "Strat".
- The aero-strat.com header uses `uploads/svg/aerostrat-lockup-tagline-white.svg` (with tagline, orange arc), which **still shows ®**. The `brand/aerostrat-lockup-white.svg` on finance.aero-strat.com still has the red arc, ® and no tagline.
- Variants: horizontal or stacked, with or without the tagline, in navy on light and white on dark. Every deck/social example in the guide uses the horizontal lockup with the tagline.
- Icon: the "After" version (wider negative space). It matches `logo solo icon/SVGs/1.svg` and `2.svg` in this project.

## Hosted copies (public, for Canva / web / email)
Vercel project `aerostrat-brand-assets` (team selimghonamy-3222), index page https://aerostrat-brand-assets.vercel.app/ — all with ™ and the orange arc:
- https://aerostrat-brand-assets.vercel.app/aerostrat-lockup-tagline-white.svg (white lockup with tagline)
- https://aerostrat-brand-assets.vercel.app/aerostrat-lockup-tagline-navy.svg (navy lockup with tagline)
- https://aerostrat-brand-assets.vercel.app/aerostrat-icon-white.svg
- https://aerostrat-brand-assets.vercel.app/aerostrat-signature-logo.png (660 × 160 PNG, navy lockup on white; used in email signatures at 220 × 53)

The project builds with `node build.js`. The script fetches `https://aero-strat.com/uploads/svg/aerostrat-lockup-tagline-white.svg`, swaps the ® for ™, and writes the white SVG, the navy SVG (white → #00348C) and the signature PNG. Since 11 Nov the white SVG is this exact website vector, not the earlier traced copy. If the website file changes, the next deploy picks up the change.

## Email signatures
- Gmail signature for Selim Ghonamy (CEO): name in Deep Blue, title in Coral Orange, M / E / W labels in Sky Blue, then a light divider and the navy lockup PNG above. Font stack: Open Sauce One, Arial, Helvetica. Preview-and-copy page: https://claude.ai/artifact/5fyrD1XvPZ5X32JCnV1Utc
- Phone format: +20 110 084 5426 (tel:+201100845426).

## Colours
| Name | HEX | Use |
|---|---|---|
| Deep Blue | #00348C | primary |
| Coral Orange | #FF6341 (colour page) / #FF5A13 (shades page, CSS, logo arc) | CTAs, alerts, skill gaps |
| Sky Blue | #3F9EE8 | accent, active states, metrics |
| Unbiased Grey | #B4B4B4 | secondary text, gridlines |
| Light Gray | #ECF0F3 | backgrounds |
| Pure Black | #000000 | body text |

**Open:** the guide gives two values for Coral Orange. Confirm which one is correct with the designer.

## Type
- Presentations, print and other non-UI work: **Open Sauce**. Platform UI: **Inter**.

## Sales deck (Canva DAHZ3SmcG_M) status
- Logos replaced with the new lockup; near-miss colours mapped to the palette (7 Nov). The deck logos were placed before the ™ change, so they may still show ®.
- Still to fix by hand: the deck fonts aren't Open Sauce (the Canva API can't change font family); the 24 corner icons are the old asset but look the same; slide 32's EBT tile photo shows a "Canva" watermark; slide 41 appendix not touched.
