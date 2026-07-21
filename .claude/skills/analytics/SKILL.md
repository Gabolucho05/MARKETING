---
name: analytics
description: When the user wants to set up, improve, or audit analytics tracking and measurement, or wants to know how marketing is actually performing. Also use when the user mentions "set up tracking," "GA4," "Google Analytics," "conversion tracking," "event tracking," "UTM parameters," "tag manager," "GTM," "analytics implementation," "tracking plan," "how do I measure this," "track conversions," "attribution," "Mixpanel," "Segment," "are my events firing," "analytics isn't working," "ROI," "ROAS," "CAC," "LTV," "MER," "marketing dashboard," "performance report," "cuánto estoy rindiendo," "cuánto retorno," or "qué canal está funcionando." Use this whenever someone asks how to know if something is working, wants to measure marketing results, or wants a report/dashboard on revenue, spend efficiency, or channel performance.
metadata:
  version: 3.0.0
---

# Analytics Tracking

You are an expert in analytics implementation and measurement. Your goal is to help set up tracking that provides actionable insights for marketing and product decisions, and to turn that tracked data into ROI/ROAS reporting and dashboards the client can act on.

This skill covers two distinct jobs — do not skip straight to reporting if instrumentation is missing or unverified, since a dashboard built on broken tracking is worse than no dashboard:

1. **Instrumentation** ("is this measured correctly?") — tracking plans, GA4/GTM implementation, UTMs, debugging. Covered in the sections from "Core Principles" through "Privacy and Compliance" below.
2. **Reporting** ("given clean data, what's the ROI and what should we do?") — ROI/ROAS/CAC/LTV calculation and dashboards. Covered in "ROI, ROAS & Performance Dashboards" below.

## Initial Assessment

**Check for product marketing context first:**
If `.agents/product-marketing.md` exists (or `.claude/product-marketing.md`, or the legacy `product-marketing-context.md` filename, in older setups), read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Before implementing tracking, understand:

1. **Business Context** - What decisions will this data inform? What are key conversions?
2. **Current State** - What tracking exists? What tools are in use?
3. **Technical Context** - What's the tech stack? Any privacy/compliance requirements?

---

## Core Principles

### 1. Track for Decisions, Not Data
- Every event should inform a decision
- Avoid vanity metrics
- Quality > quantity of events

### 2. Start with the Questions
- What do you need to know?
- What actions will you take based on this data?
- Work backwards to what you need to track

### 3. Name Things Consistently
- Naming conventions matter
- Establish patterns before implementing
- Document everything

### 4. Maintain Data Quality
- Validate implementation
- Monitor for issues
- Clean data > more data

---

## Tracking Plan Framework

### Structure

```
Event Name | Category | Properties | Trigger | Notes
---------- | -------- | ---------- | ------- | -----
```

### Event Types

| Type | Examples |
|------|----------|
| Pageviews | Automatic, enhanced with metadata |
| User Actions | Button clicks, form submissions, feature usage |
| System Events | Signup completed, purchase, subscription changed |
| Custom Conversions | Goal completions, funnel stages |

**For comprehensive event lists**: See [references/event-library.md](references/event-library.md)

---

## Event Naming Conventions

### Recommended Format: Object-Action

```
signup_completed
button_clicked
form_submitted
article_read
checkout_payment_completed
```

### Best Practices
- Lowercase with underscores
- Be specific: `cta_hero_clicked` vs. `button_clicked`
- Include context in properties, not event name
- Avoid spaces and special characters
- Document decisions

---

## Essential Events

### Marketing Site

| Event | Properties |
|-------|------------|
| cta_clicked | button_text, location |
| form_submitted | form_type |
| signup_completed | method, source |
| demo_requested | - |

### Product/App

| Event | Properties |
|-------|------------|
| onboarding_step_completed | step_number, step_name |
| feature_used | feature_name |
| purchase_completed | plan, value |
| subscription_cancelled | reason |

**For full event library by business type**: See [references/event-library.md](references/event-library.md)

---

## Event Properties

### Standard Properties

| Category | Properties |
|----------|------------|
| Page | page_title, page_location, page_referrer |
| User | user_id, user_type, account_id, plan_type |
| Campaign | source, medium, campaign, content, term |
| Product | product_id, product_name, category, price |

### Best Practices
- Use consistent property names
- Include relevant context
- Don't duplicate automatic properties
- Avoid PII in properties

---

## GA4 Implementation

### Quick Setup

1. Create GA4 property and data stream
2. Install gtag.js or GTM
3. Enable enhanced measurement
4. Configure custom events
5. Mark conversions in Admin

### Custom Event Example

```javascript
gtag('event', 'signup_completed', {
  'method': 'email',
  'plan': 'free'
});
```

**For detailed GA4 implementation**: See [references/ga4-implementation.md](references/ga4-implementation.md)

---

## Google Tag Manager

### Container Structure

| Component | Purpose |
|-----------|---------|
| Tags | Code that executes (GA4, pixels) |
| Triggers | When tags fire (page view, click) |
| Variables | Dynamic values (click text, data layer) |

### Data Layer Pattern

```javascript
dataLayer.push({
  'event': 'form_submitted',
  'form_name': 'contact',
  'form_location': 'footer'
});
```

**For detailed GTM implementation**: See [references/gtm-implementation.md](references/gtm-implementation.md)

---

## UTM Parameter Strategy

### Standard Parameters

| Parameter | Purpose | Example |
|-----------|---------|---------|
| utm_source | Traffic source | google, newsletter |
| utm_medium | Marketing medium | cpc, email, social |
| utm_campaign | Campaign name | spring_sale |
| utm_content | Differentiate versions | hero_cta |
| utm_term | Paid search keywords | running+shoes |

### Naming Conventions
- Lowercase everything
- Use underscores or hyphens consistently
- Be specific but concise: `blog_footer_cta`, not `cta1`
- Document all UTMs in a spreadsheet

---

## Debugging and Validation

### Testing Tools

| Tool | Use For |
|------|---------|
| GA4 DebugView | Real-time event monitoring |
| GTM Preview Mode | Test triggers before publish |
| Browser Extensions | Tag Assistant, dataLayer Inspector |

### Validation Checklist

- [ ] Events firing on correct triggers
- [ ] Property values populating correctly
- [ ] No duplicate events
- [ ] Works across browsers and mobile
- [ ] Conversions recorded correctly
- [ ] No PII leaking

### Common Issues

| Issue | Check |
|-------|-------|
| Events not firing | Trigger config, GTM loaded |
| Wrong values | Variable path, data layer structure |
| Duplicate events | Multiple containers, trigger firing twice |

---

## Privacy and Compliance

### Considerations
- Cookie consent required in EU/UK/CA
- No PII in analytics properties
- Data retention settings
- User deletion capabilities

### Implementation
- Use consent mode (wait for consent)
- IP anonymization
- Only collect what you need
- Integrate with consent management platform

---

## ROI, ROAS & Performance Dashboards

Once tracking is in place (or verified), this is where the client's actual question lives: "is this working, and what should I do about it?"

### Core metrics (always show the formula, not just the number)

| Metric | Formula |
|---|---|
| ROAS (platform-reported) | revenue attributed by the ad platform / ad spend |
| Blended ROAS | total business revenue / total ad spend |
| MER (Marketing Efficiency Ratio) | total revenue / total marketing spend (all channels) |
| ROI | (revenue − total cost) / total cost |
| CAC | total acquisition cost / new customers |
| LTV | avg order value × purchase frequency × avg lifespan (or cohort-based) |
| LTV:CAC ratio | LTV / CAC — below 1 is losing money, 3+ is healthy |
| Payback period | CAC / monthly gross margin per customer |

**For full formulas, a consolidated multi-channel reporting table, attribution-model guidance, invalidadores (alert thresholds), common pitfalls, and a worked example**: see [references/roi-roas-dashboards.md](references/roi-roas-dashboards.md).

### Building the dashboard

- Consolidate every channel (paid, organic, email, direct) into one table before writing any narrative — never let a single channel's self-reported metric stand alone.
- Use the `dataviz` skill for charts/stat tiles so this reads as one visual system with the rest of the agency's deliverables; use `market-report-pdf` for the polished client-facing export.
- Two cadences, two audiences: a **weekly/operational** dashboard (spend, ROAS, CPA trend, creative fatigue — for the team running `paid-media`) and a **monthly/strategic** dashboard (blended ROAS/MER trend, CAC/LTV trend, channel mix, a written recommendation — for the client, and feeding back into `estrategia-planificacion`).
- Declare the attribution model used, explicitly, every time — last-click, platform-reported, GA4 data-driven, or a stated weighted model. Never present a precise-looking number without saying which model produced it.
- Every recurring report carries numeric invalidadores (e.g. "if blended ROAS < 3x for 2 weeks → pause and escalate") — same discipline `estrategia-planificacion` and `paid-media` already use, so a report says what to do, not just what happened.

---

## Output Format

### Tracking Plan Document

```markdown
# [Site/Product] Tracking Plan

## Overview
- Tools: GA4, GTM
- Last updated: [Date]

## Events

| Event Name | Description | Properties | Trigger |
|------------|-------------|------------|---------|
| signup_completed | User completes signup | method, plan | Success page |

## Custom Dimensions

| Name | Scope | Parameter |
|------|-------|-----------|
| user_type | User | user_type |

## Conversions

| Conversion | Event | Counting |
|------------|-------|----------|
| Signup | signup_completed | Once per session |
```

### Performance Dashboard Report

```markdown
# [Client] Performance Report — [Period]

## Summary
- Blended ROAS: [x] · MER: [x] · CAC: $[x] · LTV:CAC: [x]
- Attribution model used: [last-click / platform-reported / GA4 data-driven / weighted — state which]
- Recommendation: [scale / hold / cut / pivot — one paragraph, tied to the numbers below]

## Channel Breakdown

| Channel | Spend | Revenue (attributed) | Orders | ROAS (platform) | ROAS (blended contribution, est.) | CAC |
|---|---|---|---|---|---|---|
| Meta Ads | | | | | | |
| Google Ads | | | | | | |
| Email/Automation | | | | | | |
| Organic/SEO | $0 | | | — | | — |
| TOTAL / Blended | | | | — | | |

## Invalidadores Crossed This Period
- [None / list which threshold was crossed and the recommended action]

## Trend (last 3-6 periods)
- [Blended ROAS/MER trend, CAC trend — chart via `dataviz`]
```

---

## Task-Specific Questions

**Instrumentation:**
1. What tools are you using (GA4, Mixpanel, etc.)?
2. What key actions do you want to track?
3. What decisions will this data inform?
4. Who implements - dev team or marketing?
5. Are there privacy/consent requirements?
6. What's already tracked?

**ROI/ROAS Reporting:**
7. What counts as "revenue" for this report — gross, net of refunds, margin-adjusted?
8. What's the client's gross margin % (needed to tell ROI from vanity ROAS)?
9. Which attribution model does the client already trust/expect (their own platform dashboards, GA4, none yet)?
10. What are the agreed invalidadores/thresholds — or do they need to be set now with the client?
11. Weekly operational cadence, monthly strategic cadence, or both?

---

## Tool Integrations

For choosing between GA4, Mixpanel, Amplitude, PostHog and Segment, and for auditing an existing implementation in any of them, see [references/tool-integrations.md](references/tool-integrations.md). None of these platforms has a live MCP connector in this repo yet — this skill produces implementation plans and audit findings, not direct API calls.

---

## Related Skills

Within this repo's agency skill set (see `AGENCIA-360-ARQUITECTURA.md`):

- **market-seo**: organic traffic and SEO analysis — this skill's tracking plan is what tells you whether that organic traffic converts.
- **market-landing** / **market-funnel**: conversion rate optimization — both consume the event data this skill helps you capture; run this skill first if tracking is missing or unreliable.
- **paid-media**: Meta Ads performance (CPA, CPL, ROAS) — depends on the conversion events and UTM discipline this skill sets up, and its kill/hold/scale rules should be triggered by this skill's invalidadores.
- **dataviz**: shared visual language for any chart/stat tile in a performance dashboard.
- **market-report-pdf**: polished client-facing export of the monthly performance report.
- **estrategia-planificacion**: the monthly strategic dashboard feeds back into this department's planning — invalidadores crossed here should trigger a pivot conversation there.
- Experiment (A/B test) measurement and revenue-ops/CRM pipeline attribution are not yet covered by a skill in this repo.
