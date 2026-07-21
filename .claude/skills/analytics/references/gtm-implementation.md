# Google Tag Manager Implementation Guide

## 1. Container structure

| Component | Purpose | Example |
|---|---|---|
| Tags | Code that executes | GA4 Configuration, GA4 Event, Meta Pixel, Google Ads Conversion |
| Triggers | Condition that fires a tag | Page View, Click - All Elements, Form Submission, Custom Event |
| Variables | Dynamic values a tag/trigger reads | Click Text, Page URL, Data Layer Variable, JS constant |

Container naming: one container per domain. Use **workspaces** for concurrent changes by different people; always **Preview** before publishing.

## 2. The Data Layer

The data layer is the contract between the website's code and GTM — the site pushes structured events, GTM listens and fires tags off them. Never scrape the DOM for values GTM can get from the data layer; DOM scraping breaks silently on redesigns.

```javascript
window.dataLayer = window.dataLayer || [];
dataLayer.push({
  'event': 'form_submitted',
  'form_name': 'contact',
  'form_location': 'footer'
});
```

In GTM: create a **Custom Event trigger** matching `event equals form_submitted`, and **Data Layer Variables** (`form_name`, `form_location`) to pull the properties into whatever tag fires.

## 3. Recipe: GA4 base configuration

1. Tag type: Google tag (or "GA4 Configuration" on older container UI).
2. Tag ID: the Measurement ID (`G-XXXXXXX`).
3. Trigger: **All Pages** (Initialization or Page View).
4. This one tag replaces the need to hardcode gtag.js on the page — every other GA4 event tag references this one as its "Configuration Tag".

## 4. Recipe: GA4 event tag from a data layer push

1. Tag type: GA4 Event.
2. Configuration tag: select the base GA4 tag from step 3 above.
3. Event name: `{{Event}}` or hardcode `form_submitted`.
4. Event parameters: map each data layer variable (`form_name`, `form_location`) to a GA4 parameter of the same name.
5. Trigger: Custom Event trigger matching `form_submitted`.

## 5. Recipe: click trigger without a data layer push (quick wins, less robust)

Use when engineering can't add a data layer push and you need directional tracking fast:

1. Trigger type: **Click - All Elements** (or Just Links).
2. Enable built-in variables: Click Text, Click URL, Click Classes, Click ID.
3. Condition: e.g. `Click Classes` contains `cta-hero`.
4. Fire a GA4 event tag using `{{Click Text}}` as a parameter.

Caveat: fragile against front-end refactors (class/ID renames break it silently). Prefer a real data layer push whenever the dev team can add one — flag this tradeoff to the client rather than silently shipping the fragile version.

## 6. Recipe: scroll depth / video / file download

Prefer GA4's **Enhanced Measurement** (see `ga4-implementation.md`) for these — it covers scroll, outbound clicks, site search, video engagement and downloads without any GTM tag. Only build a custom GTM trigger for these if enhanced measurement doesn't fire in the client's specific setup (common with SPA route changes — see §8).

## 7. Preview mode and QA

1. **Preview** (top right of GTM UI) opens the Tag Assistant companion — walk through the site with it connected.
2. For every action tested, confirm: correct trigger fired, correct tag fired, variables resolved to real (not blank/undefined) values.
3. Do this in an **incognito window** to rule out ad blockers and stale cookies masking real behavior.
4. Only **Submit → Publish** after Preview confirms every planned event — publishing untested triggers is how duplicate/missing events reach production.

## 8. Single-page apps (SPA) — the most common breakage

GTM's default Page View trigger fires once, on initial load. On a client-rendered route change (React Router, Next.js client nav, etc.) it does **not** re-fire. Fix:

- Have the app push a `virtual_page_view` (or similar) data layer event on every route change.
- Build a GA4 Page View–equivalent tag on a Custom Event trigger matching that event, instead of relying on the default Page View trigger for anything past the first load.
- If this isn't wired, GA4 will undercount pageviews and any funnel built on pageview steps will be wrong — always ask "is this a SPA?" before assuming enhanced measurement/default Page View is enough.

## 9. Server-side GTM (mention, don't default to)

For clients hitting iOS 14.5+/ad blocker data loss, a server-side GTM container (events sent to a first-party endpoint, then forwarded server-side to GA4/Meta CAPI/etc.) improves data completeness. It's meaningfully more infrastructure (a hosted container, DNS/subdomain, cost) — propose it only when client-side data loss is actually large enough to justify it, not as a default recommendation.
