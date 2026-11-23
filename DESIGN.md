# Design notes

## Hallmark picks

Hallmark v2.0.0 was imported from `nutlope/hallmark` before prototyping. Node was not available, so the dealer and sloplint scripts could not run. The theme was picked by hand from `references/themes/index.json` and the build follows the loaded references.

- **Shape:** Stage hero, head on columns 1 to 5, score panel on 7 to 12. Job: attend.
- **Theme:** Arcade. Aubergine CRT ground, lilac-white ink, Bungee capitals with a one-line RGB split, Chivo prose, Silkscreen figures, ember and acid signals, hard offset shadows.
- **Chrome:** slab nav with the wordmark and one Register action. Marquee footer.
- **Hero:** `Aquilae` in Bungee, one sentence, one primary action and a sample fixture panel.
- **Signature:** the competition rows and scoreboard rows light up like a selected menu line on hover.
- **Sections:** hero, board index, figure strip, schedule, registration, scoreboard, footer.
- **Material:** real event dates, venues and points from the `aquil` rulebook. No photographs or logos were supplied, so type, rules and the CRT screen carry the page.
- **Sweep:** sloplint was not run. Colour, type, layout, copy and access gates were checked by hand and recorded in the CSS stamp.

## Amber decision

[Amber](https://amberjs.dev/) is a zero-dependency motion toolkit with two packages, `amber-scroll` and `amber-motion`. It ships ES modules and respects `prefers-reduced-motion`.

This site uses **`amber-motion` only**, loaded from jsDelivr as an ES module. It drives:

- one staggered hero entrance
- one section reveal pattern through an IntersectionObserver
- the scoreboard and fixture rows through CSS press physics and a stepped cursor row

`amber-scroll` was left out. It replaces native scroll with a virtual viewport, which fights a long content site and makes keyboard access harder. Native scrolling stays intact.

All content is visible by default. If the CDN is unreachable, the dynamic import fails quietly and the site remains fully readable. Reduced motion returns before Amber is loaded.

## Voice and motion

The copy stays short and concrete: dates, rooms, formats, who enters and what to bring. No fake quotes, no invented metrics and no sponsorship claims. Motion is press physics, one RGB split, stepped row changes and a slow marquee. No glow, no blurred orbs, no gradient buttons and no drawn game art.
