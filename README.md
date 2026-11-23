# Aquilae

Static website for **Aquilae**, an intra-college sport fest running **23 to 30 November 2026**.

| | |
| --- | --- |
| Live site | https://unnnii.github.io/aquilae/ |
| Repository | https://github.com/unnnii/aquilae |
| Stack | plain HTML, CSS and JavaScript. No framework, no build step, no bundler |
| Hosting | GitHub Pages, branch `main`, root `/` |
| Design system | Hallmark v2.0.0, Arcade theme, dealt by hand |
| Motion | Amber `amber-motion` from jsDelivr, loaded only in the browser |
| Form | demo only. Nothing is sent or stored yet |

## What is here

| File | Job |
| --- | --- |
| `index.html` | hero, opening card, featured competitions, schedule glance, scoreboard sample |
| `competitions.html` | all ten entry routes across nine sports |
| `schedule.html` | day by day dates, times and venues |
| `rules.html` | general instructions and rules by event |
| `register.html` | demo registration form, batch and team modes |
| `scoreboard.html` | points distribution and sample standings |
| `404.html` | not-found page |
| `css/style.css` | tokens and all styling, with the Hallmark stamp on line 1 |
| `js/config.js` | placeholder event and points data |
| `js/site.js` | mobile nav, footer year and optional Amber motion |
| `js/register.js` | form rows and preview panel |
| `.nojekyll` | stops Pages running Jekyll |
| `DESIGN.md` | Hallmark picks, Amber decision and what to replace |

## Placeholders to replace

The event facts came from the `unnnii/aquil` rulebook so the shape is real. These parts still need a person to fill them:

1. Organiser contact details on `rules.html` and `schedule.html`.
2. The registration endpoint. `js/register.js` currently shows a preview and stores nothing.
3. Live standings on `scoreboard.html` and `index.html`.
4. Any logo, photograph or sponsor mark. The site currently carries none.
5. The closing date and the published event status flags in `js/config.js`.

Do not put a GitHub token, a service-role key or any other secret in this repository. The site is public.

## Editing without a clone

Every edit was sent straight to `unnnii/aquilae` with the GitHub REST Contents API. There is no local checkout and no push step. A fine-grained token needs **Contents: read and write** and **Metadata: read** for the target repository.

## Testing

1. Open the live site at 360px and at desktop width. Nothing should scroll sideways.
2. Toggle the mobile menu and check every link.
3. Open the registration form, add a player, submit and confirm the preview says nothing was saved.
4. Check that all reveal content stays visible with reduced motion enabled and with the CDN blocked.
5. Check the live URL after a commit. Pages usually rebuild in about 30 seconds.
