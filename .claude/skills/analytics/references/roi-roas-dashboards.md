# ROI / ROAS Reporting & Performance Dashboards

This is the reporting layer that sits on top of the tracking this skill helps you implement (GA4/GTM/event data). Instrumentation answers "did we capture the data correctly?"; this file answers "given clean data, what do we tell the client to do with their money?"

## 1. Core formulas — use these exact definitions, always show your work

| Metric | Formula | Notes |
|---|---|---|
| **ROAS** (Return on Ad Spend) | `revenue attributed to ads / ad spend` | Almost always expressed as a ratio (`4.2x`) or `%`. State whether it's gross revenue or margin-adjusted — these are very different numbers. |
| **Blended ROAS** | `total revenue (all customers) / total ad spend` | The number that matches the bank account. Always lower than platform-reported ROAS because it doesn't credit ads for organic/direct sales. |
| **Platform-reported ROAS** | Whatever Meta/Google Ads shows in their UI | Uses the platform's own attribution window and model — inflates vs. blended by design (multi-touch/view-through credit). Report both, never just one. |
| **MER** (Marketing Efficiency Ratio) | `total revenue / total marketing spend (all channels)` | Same idea as blended ROAS but across the whole marketing budget, not just one platform. Best single number for "is marketing working" at the business level. |
| **ROI** | `(revenue − total cost) / total cost` | Unlike ROAS, nets out cost, not just spend vs. revenue ratio — include production cost, tool cost, agency fee, not only media spend. |
| **CAC** (Customer Acquisition Cost) | `total acquisition cost / number of new customers` | "Total acquisition cost" = media spend + creative production + tool costs for that period, not just ad spend alone, unless you're intentionally reporting a narrower "paid CAC." |
| **LTV** (Customer Lifetime Value) | `average order value × purchase frequency × average customer lifespan` (or cohort-based: sum of actual revenue per cohort over N months) | Cohort-based is more honest for a young business without enough history to trust an average-based formula. |
| **LTV:CAC ratio** | `LTV / CAC` | Below 1: losing money. 1–3: marginal, watch closely. 3+: healthy. Above ~5, that's often a sign of *under-investing* in growth, not just efficiency. |
| **Payback period** | `CAC / (monthly gross margin per customer)` | Answers "how many months until this customer paid for their own acquisition" — matters more than LTV:CAC for cash-constrained clients (very relevant in Venezuela — see `paid-media`'s cash-flow-first principle). |

## 2. Consolidating metrics across channels

Build one table before writing any narrative. Don't let each channel report its own preferred metric in isolation — that's how a client ends up thinking three separate campaigns are all "winning" while the business loses money.

```
| Channel | Spend | Revenue (attributed) | Orders | ROAS (platform) | ROAS (blended contribution)* | CAC |
|---|---|---|---|---|---|---|
| Meta Ads | | | | | | |
| Google Ads | | | | | | |
| Email/Automation | | | | | | |
| Organic/SEO | $0 | | | — | | — |
| Direct/Brand | $0 | | | — | | — |
| TOTAL / Blended | | | | — | (this row = blended ROAS/MER) | |
```

\* "Blended contribution" per channel is inherently approximate without a real attribution model — see §4. Label it as an estimate.

## 3. Building the dashboard

Use the `dataviz` skill for any chart in this report — it defines the shared visual language (palette, form heuristics for stat tiles/sparklines) so a client seeing this dashboard and a `market-report-pdf` deliverable side by side reads them as one system, not two different tools. Use `market-report-pdf` for the client-facing polished export.

**Weekly / operational dashboard** (for the team running paid media day to day):
- Spend, ROAS, CPA/CPL by campaign — trend line, not just a snapshot number
- Which campaigns crossed an invalidador threshold this week (see §5)
- Creative fatigue signal (CTR/frequency trend per ad) — feed this back to `paid-media`

**Monthly / strategic dashboard** (for the client, feeds Department 1):
- Blended ROAS / MER trend over the last 3-6 months
- CAC and LTV:CAC trend — is efficiency improving or degrading as spend scales?
- Channel mix — where is revenue actually coming from vs. where is budget going?
- One paragraph: what changed, why, and the recommendation (scale/hold/cut) — never hand over a dashboard without a written recommendation attached.

## 4. Attribution — declare the model, don't hide behind the number

Pick and **state explicitly** which model produced the numbers in a report — never mix models across a single report without labeling each:

- **Last-click**: simplest, most common default, systematically undercounts upper-funnel channels (awareness/video).
- **Platform-reported (Meta/Google's own multi-touch model)**: inflates that platform's contribution — useful for in-platform optimization decisions, not for blended business-level totals.
- **Data-driven (GA4 default)**: better than last-click but is a black box, and doesn't match either platform's own reporting — expect "why don't the numbers match" questions and pre-empt them in the report (see `ga4-implementation.md` §8).
- **Simple weighted model** (e.g., 40% first-touch / 20% middle / 40% last-touch) when there's no GA4/analytics platform sophisticated enough for data-driven attribution and the client needs something better than pure last-click without new tooling.

If tracking is incomplete (no cross-device ID resolution, no server-side backup for iOS loss), say so in the report as a stated limitation — don't present a precise-looking ROAS number built on a known-leaky funnel without the caveat.

## 5. Invalidadores — performance alert thresholds

Same discipline `estrategia-planificacion` and `paid-media` already use: every recurring report should carry explicit, numeric thresholds that trigger action, not vague "monitor closely" language.

Examples (replace with numbers agreed with the client, ideally set during the Department 1 briefing):

- "If blended ROAS falls below `Xx` for 2 consecutive weeks → pause the affected channel and escalate to Estrategia for a pivot decision."
- "If CAC exceeds `$X` for 5 consecutive days → apply `paid-media`'s kill/hold/scale rules to the underperforming campaign."
- "If LTV:CAC drops below `1.5` → flag to the client before committing next month's budget; do not auto-scale spend."

Report which invalidadores were crossed this period, not just the raw metrics — that is what makes a monthly report actionable rather than a wall of numbers.

## 6. Common pitfalls

- **Double-counting revenue** across channels when each platform claims credit for the same sale (classic overlap between Meta and Google reporting the same conversion). Blended ROAS/MER from the business's actual revenue avoids this; platform-reported numbers summed together do not.
- **Reporting gross revenue as if it were profit.** ROAS/MER on gross revenue can look excellent while the business loses money if margin is thin — always know (or ask for) gross margin % before declaring a channel "profitable."
- **Ignoring refunds/chargebacks/returns** in the revenue side of the formula — especially relevant for e-commerce (see `event-library.md`'s `product_returned` event).
- **Comparing this month's CAC to last year's without noting seasonality** — check `estrategia-planificacion`'s calendar context (quincenas, aguinaldos, efemérides) before calling a CAC increase/decrease a real trend.
- **A dashboard with no recommendation attached.** Numbers without a "so what" are not a deliverable an agency should charge for.

## 7. Worked example

```
Meta Ads:  spend $2,000 → platform-reported revenue $9,000 → platform ROAS 4.5x
Google Ads: spend $1,000 → platform-reported revenue $3,500 → platform ROAS 3.5x
Total ad spend: $3,000
Actual total business revenue this period (from Stripe/Shopify): $9,800
→ Blended ROAS = $9,800 / $3,000 = 3.27x   (lower than either platform's own number — expected)
New customers this period: 140
Total acquisition cost (spend + $400 creative production): $3,400
→ CAC = $3,400 / 140 = $24.29
Average gross margin per customer/month: $18
→ Payback period ≈ 1.35 months
```

Report all four numbers (platform ROAS ×2, blended ROAS, CAC, payback) together — reporting only the best-looking one is how agencies lose client trust the first time the client cross-checks against their bank statement.
