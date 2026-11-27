# Weirdest Job Title: Blind Judge Showdown

[![make.fun](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![rank](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/qyhchy999-jpg/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/rank.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![reward](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/qyhchy999-jpg/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/reward.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

One job title, 44 characters — the weirdest we could think of: "Official Greeter of Abandoned Shopping Carts". It sounds like a real job — "Official Greeter" plus a plausible-sounding role — and then the twist lands: the clients are shopping carts that someone left in the middle of a parking lot. The specificity sells it: not carts in general, but the abandoned ones, and the job is greeting them, as if they were customers who simply wandered off. A real-sounding title with one hilariously specific twist beats a generic oddity.

## Entry

`main.ts` (Node 22, standard library only) writes the title to `/output/entry.txt`. The title is baked into the program, so it runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is UTF-8 text of 1 to 60 characters, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).

<!-- Rewritten 2026-11-27: the greeter replaces the houseplant apologizer — the carts never answer. -->
<!-- One specific twist beats a generic oddity — the clients are abandoned shopping carts. -->
