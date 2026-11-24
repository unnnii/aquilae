# Design notes

## Reference

The layout language comes from [viens-la.com](https://viens-la.com/), a Paris studio site featured on Httpster. What was taken is the *system*: a cream page, electric purple ink, oversized type, pastel blocks, pill chrome, sticker badges and a nav that floats at the bottom of the viewport.

Nothing from that site was copied: no code, no images, no fonts, no copy. The typefaces there are commercial, so this build substitutes open ones with a similar job.

## Palette

| Token | Value | Use |
| --- | --- | --- |
| Paper | `#fbefe1` | page ground |
| Paper 2 | `#f6e7d4` | full-bleed bands |
| Cream | `#fffbf3` | cards, nav pill, form fields |
| Purple | `#5f45f2` | ink, primary buttons, footer, marquee |
| Purple deep | `#3f2ad6` | small text on pastel |
| Lilac | `#c0b3ff` | the dimmed second half of a heading |
| Yellow | `#ffe375` | primary pastel, highlights, tags |
| Mint | `#96f1c6` | status pills, figures, one card |
| Pink | `#ffadad` | section eyebrows, one card |
| Peach | `#ffc48c` | eyebrows, open accordions |
| Sky | `#9decfa` | status pills, one card |

Purple on cream measures 5.1:1. Small text on pastel uses `#3f2ad6`, which clears 4.5:1 on every pastel in the set. Highlight blocks behind a word always switch to the deep purple.

## Type

| Role | Face | Stands in for |
| --- | --- | --- |
| Headlines, body | Bricolage Grotesque (variable) | Obviously |
| Condensed caps, figures, buttons | Archivo (variable width, 76–86%) | Obviously Condensed |
| Wordmark, script accents | Caveat 700 | Theodore Handwritten |

Headlines are set at weight 740–760 with tight tracking, and sizes are fluid: `clamp()` everywhere, no fixed breakpoint sizes. The wordmark is the page's one script voice; nothing else uses it.

## Layout

- **Nav**: one pill fixed at the bottom of the viewport, wordmark on the left, links, then a yellow Register pill. On a phone the links collapse into an opaque sheet above the pill. The hero and footer both reserve room for it so nothing important sits underneath.
- **Hero**: tagline top-left, yellow Register top-right, the script wordmark across the middle with a scalloped date sticker pinned to it, then a statement line and a sample fixtures card.
- **Cards**: event cards and figure cells are pastel blocks with 30px radii. Each event card carries a ghosted index number as its only graphic.
- **Sections**: eyebrow pill, a headline with the last words dimmed to lilac, then the content. A purple ticker separates the hero from the board.
- **Footer**: full-width purple, rounded top corners, marquee, script wordmark in yellow, link chips and the legal line. The bottom padding clears the floating nav.

## Motion

No third-party motion library. `js/site.js` adds a reveal class only when `IntersectionObserver` exists and reduced motion is off, then fades and lifts each block once. The marquee is CSS animation. Everything is visible by default, so a failed script or a blocked CDN changes nothing.

## What to replace

1. The wordmark is text in Caveat. Commission or licence a mark and swap the `.hero-script`, `.wordmark` and `.footer-mark` rules.
2. There are no photographs. Event cards rely on colour and a ghosted number; real photography would change the card treatment.
3. The fixture rows on `index.html` are samples. Wire them, and the scoreboard, to live results.
4. Sponsor marks, if they arrive, belong in the footer as a chip row, not as an image strip.
