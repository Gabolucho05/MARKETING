# Event Library by Business Type

Use the same business-type taxonomy as `market/SKILL.md` ("Business Context Detection") so the whole suite reasons about a client consistently. Pick the matching table, then trim to what the business actually needs — a tracking plan with 12 well-chosen events beats one with 60 nobody looks at.

All events follow the `object_action` convention from `SKILL.md` (e.g. `signup_completed`, not `SignupCompleted` or `signup-completed`).

---

## SaaS / Software

| Event | Properties | Notes |
|---|---|---|
| `signup_started` | source, plan_selected | Top of funnel |
| `signup_completed` | method, plan, source | Primary activation conversion |
| `onboarding_step_completed` | step_number, step_name | One per step, not just "onboarding_completed" |
| `trial_started` | plan, trial_length_days | |
| `feature_used` | feature_name, feature_category | Fire on core actions, not every click |
| `upgrade_completed` | from_plan, to_plan, value | Revenue event |
| `downgrade_completed` | from_plan, to_plan, reason | |
| `subscription_cancelled` | plan, reason, tenure_days | Churn analysis |
| `invite_sent` | invitee_role | Virality/expansion signal |

## E-commerce

| Event | Properties | Notes |
|---|---|---|
| `product_viewed` | product_id, category, price | |
| `product_added_to_cart` | product_id, quantity, price | |
| `checkout_started` | cart_value, item_count | |
| `checkout_payment_completed` | order_id, value, currency, payment_method | The conversion event |
| `checkout_abandoned` | cart_value, step | Fire on exit-intent or session timeout, not a real "event" from the platform |
| `coupon_applied` | coupon_code, discount_value | |
| `product_returned` | product_id, reason | Often missing; matters for true ROAS |

## Agency / Services

| Event | Properties | Notes |
|---|---|---|
| `contact_form_submitted` | form_type, service_interest | |
| `demo_requested` | service_interest | |
| `case_study_viewed` | case_study_id | Bottom-funnel trust signal |
| `proposal_sent` | service_tier, value | Often only in CRM, not web analytics — flag if so |
| `quote_accepted` | value | The real conversion; usually needs CRM integration, not just GA4 |

## Local Business

| Event | Properties | Notes |
|---|---|---|
| `directions_clicked` | location_id | |
| `phone_number_clicked` | location_id | Click-to-call |
| `whatsapp_clicked` | location_id | Dominant conversion channel in LATAM/Venezuela — see `paid-media` skill |
| `reservation_completed` | location_id, party_size | |
| `hours_viewed` | - | Low priority; don't over-instrument |

## Creator / Course

| Event | Properties | Notes |
|---|---|---|
| `lead_magnet_downloaded` | magnet_name, source | |
| `email_captured` | source, lead_magnet | |
| `webinar_registered` | webinar_name | |
| `course_purchase_completed` | course_id, value, payment_plan | |
| `lesson_completed` | course_id, lesson_number | Retention/completion signal |
| `testimonial_submitted` | course_id | |

## Marketplace

| Event | Properties | Notes |
|---|---|---|
| `listing_created` | category, price | Supply-side event |
| `listing_viewed` | listing_id, category | |
| `message_sent` | listing_id, sender_role | Buyer/seller — tag both sides |
| `transaction_completed` | listing_id, value, take_rate | Core revenue event |
| `review_submitted` | listing_id, rating | Trust signal |

---

## Cross-cutting events (track regardless of business type)

| Event | Properties |
|---|---|
| `page_view` | page_title, page_location, page_referrer (usually automatic) |
| `cta_clicked` | button_text, location, destination |
| `outbound_link_clicked` | destination_url |
| `video_played` / `video_completed` | video_title, percent_watched |
| `search_performed` | search_term, results_count |
| `error_encountered` | error_type, page_location |

## Prioritization rule

When the client's list gets long, rank each candidate event by: does it change a decision this month? If the answer is no, cut it — it's noise that will drown DebugView and dashboards later.
