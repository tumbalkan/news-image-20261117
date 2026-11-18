# The World Today — 17 November 2026

[![make.fun](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/tumbalkan/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/tumbalkan/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

Entry for the [make.fun](https://make.fun/bounty/news-image-20261117) bounty
**"Sum up 17 November's world news in one image"**: one 1024×1024 front page
covering Tuesday, 17 November 2026.

## The image

A newspaper front page, *The World Today*, built as `image.html` and rendered to
`entry.png` (1024×1024, 255 KB). Every story is a real event of 17 November 2026,
as reported that day:

- **Lead:** U.S. warplanes strike an IRGC missile site on Qeshm Island, Iran —
  with the Strait of Hormuz in flames as a fourth tanker hits a mine and Oman
  evacuates 24 seafarers from the burning gas tanker *Tara Gas*.
- **Grid:** the Crimean Bridge struck again; the first-ever Trump–Xi–Putin summit
  set for Thursday in Shenzhen; the U.S. loses its measles elimination status;
  Wall Street falls on AI stocks; Japan scrambles jets over a Russian airspace
  violation; Houthi forces advance in Yemen.
- **Briefs:** the Gaza aid call, the COP31 draft deal, India's last-ball U19 Asia
  Cup win, Depardieu's guilty plea, Apple services restored, the FAA router
  pause, and Dubai air traffic down 28.1%.

The date — **Tuesday, 17 November 2026** — is printed across the top of the page
so the day the image sums up is unmissable.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to the output
directory. The program runs twice and writes the same bytes both times:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `image.html` — the front page (HTML + inline SVG illustrations, drawn, no photos)
- `entry.png` — the rendered 1024×1024 image
- `main.ts` — copies `entry.png` to `/output/entry.png`
