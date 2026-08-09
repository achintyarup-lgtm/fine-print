# The Fine Print

*Achintyarup Ray · Kolkata*

An Astro site for long, sourced, image-heavy articles. Free hosting on GitHub
Pages, comments through GitHub Discussions, no database, no platform between
you and the reader.

The masthead is set as a hierarchy — publication name in the display face,
your name small beneath it — so the title reads as a publication while your
name still appears on every page for search. Both live in
`src/layouts/BaseLayout.astro`; the title also appears in
`src/pages/rss.xml.js` and `astro.config.mjs`.

---

## Getting it running

You need Node 18 or newer.

```bash
npm install
npm run dev
```

That serves the site at `http://localhost:4321`. Edit anything and the browser
reloads. `npm run build` produces the static site in `dist/`.

---

## The one design rule

**Artwork carries no lettering.** Generate the Kalighat paintings wordless, and
supply every number as real text through the `labels` prop on the `Infographic`
component. This is what makes image-heavy work survive a phone screen: the type
stays crisp at any size, it is selectable and searchable, screen readers can
read it, and a Bengali label set can replace the English one later without
regenerating a single painting.

Under 700px the labels automatically drop out of position and stack beneath the
image as a plain key, because overlaid type at phone width is unreadable no
matter how well it is set.

```jsx
<Infographic
  src={patTrain}
  width="bleed"                      {/* 'column' | 'wide' | 'bleed' */}
  alt="Describe what the picture shows, for readers who cannot see it."
  caption="What the state actually buys. Punjab, 2022-23."
  source="Ministry of Consumer Affairs, Food and Public Distribution."
  labels={[
    { text: 'PADDY — 18,210,000 tonnes', sub: 'roughly 7,300 wagon-loads',
      x: 6, y: 12, tone: 'indigo' },
    { text: 'BAJRA AND JOWAR — 140 tonnes', sub: 'not enough to fill one wagon',
      x: 94, y: 66, tone: 'ochre', align: 'right' },
  ]}
/>
```

`x` and `y` are percentages of the image. `tone` is `ink`, `indigo`, `ochre` or
`alta`. `align` is `left`, `center` or `right`.

---

## Fonts

**Newsreader** loads automatically from Google Fonts. Nothing to do.

**Redaction** is the display face — free, from [redaction.us](https://www.redaction.us).
It comes in graded halftone weights; Redaction 35 is the one specified here.
Download the family, and drop these two files into `public/fonts/`:

```
Redaction-Regular.woff2
Redaction_35-Regular.woff2
```

Until you do, the site falls back to Newsreader for headings, which looks fine
but loses the printed-broadsheet texture.

---

## Palette

Set once in `src/styles/global.css`, taken from the Kalighat pat — lamp black,
indigo, ochre and alta red on unprimed paper. Use the same hex values in your
Claude Design prompts so the artwork and the page agree.

```
--paper   #F4EFE4   unprimed paper ground
--ink     #1A1815   lamp black
--indigo  #2E4A6B   rice and wheat data series
--ochre   #B8873F   millet data series
--alta    #A63A2B   alta red, accent — once a page at most
```

A dark-mode variant is already defined and switches on the reader's system
setting.

---

## Writing a post

Drop a `.mdx` file into `src/content/blog/`. The filename becomes the URL.
Frontmatter:

```yaml
---
title: "Headline"
standfirst: "One sentence under the headline. Shows on the index and in RSS."
description: "For search engines and social cards."
date: "2026-08-09"
draft: false
---
```

Set `draft: true` and it stays out of the site, the index and the feed until
you are ready.

Plain markdown works for everything. Use `.mdx` only when you need the
`Infographic` component, which most of these pieces will.

---

## Contact form

Your email address never appears in the page source, so it cannot be scraped.
The form at `/contact` posts to **Web3Forms**, which relays messages to your
inbox.

Setup takes two minutes and needs no account:

1. Go to [web3forms.com](https://web3forms.com) and enter your address.
2. They email you an access key.
3. Paste it into `ACCESS_KEY` at the top of `src/pages/contact.astro`.

Free tier is 250 submissions a month. The form includes a hidden honeypot
field that catches most bots. If spam ever becomes a problem, Web3Forms has a
built-in hCaptcha option you can switch on.

Prefer something else? [Formspree](https://formspree.io) works identically on
its 50/month free tier — swap the action URL and the hidden key field.

Note that attachments cannot go through the form. The page says so, and tells
correspondents to ask, so you can hand out an address privately when you judge
it worth doing.

---

## Comments

Giscus, storing threads as GitHub Discussions in this repo. Ten minutes of
setup, described in the header of `src/components/Comments.astro`. You will
need to paste four IDs from [giscus.app](https://giscus.app) into that file.

Commenters need a GitHub account. That will filter out some of the readers you
most want to hear from — researchers, retired officials, activists — so an
link to the contact form is offered alongside it on every post. If you find
people are writing to you instead of commenting, swap Giscus for Hyvor Talk
(about $5/month, no login needed). It is a single component; the change takes
minutes.

---

## Publishing

1. Create a public repo on GitHub and push this directory to `main`.
2. Repo → Settings → Pages → Build and deployment → Source: **GitHub Actions**.
3. Push. The workflow in `.github/workflows/deploy.yml` builds and deploys.

**Custom domain.** In GoDaddy, add a CNAME record pointing your chosen
subdomain (say `fineprint`) at `achintyarup-lgtm.github.io`. Then enter
the full domain under Settings → Pages → Custom domain, and tick *Enforce
HTTPS*. Update `site:` in `astro.config.mjs` to match.

**No custom domain?** Uncomment the `base:` line in `astro.config.mjs` and set
it to the repo name.

---

## Adding an email list later

GitHub Pages cannot send email. When you want a list — and given how the
Hooghly story travelled, you will — [Buttondown](https://buttondown.email) is
free to 100 subscribers and about $9/month after. Embed its signup form in
`BaseLayout.astro` above the footer, and switch on its RSS-to-email setting
pointed at `/rss.xml`. New posts then go out automatically. Roughly ten
minutes of work, and it closes the only real gap in this setup.

---

## Adding Bengali later

Nothing here blocks it. When the time comes:

- Add **Tiro Bangla** for body and **Anek Bangla** for headings to the Google
  Fonts link in `BaseLayout.astro`; both handle conjuncts properly, which most
  Bengali webfonts still get wrong.
- Add a `lang` field to the content schema in `src/content/config.ts`.
- Put Bengali posts in `src/content/blog/bn/` and set `lang: 'bn'`.
- Pass a Bengali `labels` array to the same `Infographic` component. The
  artwork does not change — which is the whole reason for keeping the type out
  of the paintings.
