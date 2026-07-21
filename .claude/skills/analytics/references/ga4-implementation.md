# GA4 Implementation Guide

## 1. Property and stream setup

1. Create a GA4 property (Admin → Create Property). One property per brand/domain unless the client explicitly needs cross-domain roll-up.
2. Add a **Web data stream** for each domain; add **App streams** if there's an iOS/Android app sharing the same property (recommended for unified reporting).
3. Note the **Measurement ID** (`G-XXXXXXX`) — everything below depends on it.
4. Enable **Google signals** only if the client has a privacy policy covering ads personalization; it unlocks demographics/remarketing but has consent implications (see Privacy section in `SKILL.md`).

## 2. Installation

**Option A — gtag.js direct** (fine for simple sites, one-off implementations):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

**Option B — via GTM** (recommended whenever more than GA4 will ever be added — pixels, ads tags, etc.): install only the GTM container snippet on the site; configure the GA4 Configuration tag inside GTM. See `gtm-implementation.md`.

Default to Option B for any client likely to run paid media (Meta Pixel + GA4 always end up coexisting) — it avoids a second code deployment later.

## 3. Enhanced measurement

On by default for new web streams. Covers automatically: page_view, scroll (90%), outbound clicks, site search, video engagement (YouTube embeds), file downloads. **Verify which of these the client actually needs** — enhanced measurement events count toward event volume and can clutter reports if unused; toggle off what's noise (Admin → Data Streams → Enhanced Measurement → gear icon per event type).

## 4. Custom events

```javascript
gtag('event', 'signup_completed', {
  'method': 'email',
  'plan': 'free'
});
```

Rules:
- Event name and parameter names: snake_case, lowercase, no spaces (GA4 will silently reject or truncate malformed names).
- GA4 reserves some parameter names (`currency`, `value`, `transaction_id` for e-commerce) — use them correctly rather than inventing equivalents, or built-in reports won't populate.
- Max 25 parameters per event (GA4 limit) — if you're near that, the event is probably doing too much; split it.

### E-commerce events (use GA4's schema, don't roll your own)

```javascript
gtag('event', 'purchase', {
  transaction_id: 'T_12345',
  value: 59.99,
  currency: 'USD',
  items: [{ item_id: 'SKU123', item_name: 'Widget', price: 59.99, quantity: 1 }]
});
```

Using GA4's reserved e-commerce events (`view_item`, `add_to_cart`, `begin_checkout`, `purchase`, etc.) unlocks the standard E-commerce reports and Google Ads conversion import for free — don't rename them to match this skill's `object_action` house style; that convention is for **custom** events only.

## 5. Custom dimensions and conversions

- **Custom dimensions**: Admin → Custom definitions → register any event parameter you want to slice reports by (e.g. `plan_type`, `user_type`). Event-scoped by default; use user-scoped for properties that persist across sessions (e.g. `account_id`).
- **Mark conversions**: Admin → Events → toggle "Mark as conversion" on the events that represent real business outcomes. Don't mark everything — conversion bloat makes Google Ads bidding optimize toward the wrong signal if conversions are later imported.

## 6. Validation — DebugView

1. Install the **GA4 DebugView** via the Google tag (Chrome extension "Google Analytics Debugger") or `gtag('config', 'G-XXXXXXX', {'debug_mode': true})`.
2. Admin → DebugView shows events in real time as the tester clicks through the site.
3. Confirm: event fires once (not duplicated), parameters carry the right values, e-commerce items array is populated.

## 7. Consent Mode

If the client operates in the EU/UK/CA or otherwise requires cookie consent:

```javascript
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied'
});
// after user accepts via CMP:
gtag('consent', 'update', { 'analytics_storage': 'granted' });
```

Without this, GA4 will either undercount (if blocked entirely pre-consent) or expose the client to compliance risk (if firing before consent). Confirm which CMP the client uses and wire consent signals through it — don't hardcode a blanket "granted".

## 8. Reporting basics worth setting up day one

- **Exploration report** for funnel visualization (signup → activation → conversion) — more useful for client reviews than the default Engagement reports.
- **Attribution settings** (Admin → Attribution Settings): GA4 defaults to data-driven attribution; confirm the client understands this isn't last-click before comparing GA4 numbers to a platform's own (Meta/Google Ads) last-click reporting — mismatches here are the #1 source of "why don't the numbers match" client questions.
