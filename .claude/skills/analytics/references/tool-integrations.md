# Analytics Tool Integrations

Quick-reference for which tool fits which situation, and the first three things to check when auditing an existing setup. This repo does not have a live MCP connector to any of these platforms yet (see `AGENCIA-360-ARQUITECTURA.md`, §4) — treat these as implementation/audit guides, not as tools this skill can call directly.

| Tool | Best for | Data model | First things to check in an audit |
|---|---|---|---|
| **GA4** | Web analytics, Google Ads/Search Console integration | Event-based, free tier generous | Is Enhanced Measurement on? Are conversions marked? Does Attribution Settings match how the client reads the numbers? |
| **Mixpanel** | Product analytics, funnel/retention analysis for apps | Event-based, strong cohort tooling | Are events named consistently (no `Signup`/`signup_completed`/`SIGN_UP` mix)? Is `distinct_id` correctly aliased across anonymous → logged-in? |
| **Amplitude** | Product analytics at scale, behavioral cohorts | Event-based, similar to Mixpanel | Same naming-consistency check; confirm session definition matches how the client thinks about "sessions" |
| **PostHog** | Open-source/self-hosted analytics, session replay, feature flags in one tool | Event-based | Is autocapture creating noisy/duplicate events alongside manual `posthog.capture()` calls? |
| **Segment** | Customer data platform — one event API fanning out to multiple destinations (GA4, ad platforms, warehouse) | Event-based, source of truth for routing | Is the tracking plan enforced (Protocols) or is garbage reaching destinations? Are destinations receiving the same event names, or does Segment's transformation silently rename things? |

## Choosing between them

- **Client only needs web marketing analytics** (site traffic, ad performance, basic conversions): GA4 alone is enough. Don't add a second tool "just in case."
- **Client has a real product** (logged-in users, feature usage, retention questions): GA4 for marketing-site traffic + Mixpanel/Amplitude/PostHog for in-product behavior. Keep the marketing/product split — don't try to force GA4 to answer product-analytics questions it's not built for (session/user model differs).
- **Client is sending events to 3+ destinations** (GA4 + a CRM + an ad platform + a warehouse): that's the signal to introduce Segment as a routing layer instead of hand-wiring each destination separately.

## Auditing an existing implementation (any tool)

1. Pull the last 7 days of raw events and check for: events firing on the wrong trigger, duplicate fires (same action logged 2-3x), and property values that are blank/`undefined`/mistyped.
2. Compare the tool's own conversion count against a source of truth the client trusts (Stripe/Shopify orders, CRM deals) for the same date range — a >5-10% gap means tracking is missing or double-counting something.
3. Confirm naming consistency: list every distinct event name firing in production and check it against the tracking plan. Analytics tools don't reject unplanned events — they just silently accumulate them, which is how tracking plans rot.
