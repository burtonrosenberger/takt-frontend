# Assumptions

## External Dependencies

| Dependency | URL / Detail | Risk if Unavailable |
|---|---|---|
| **Directus CMS** | `armn.takt.city` | Total content failure — pages render empty |
| **Directus Assets** | `armn.takt.city/assets/{uuid}` | Broken images and audio |
| **8th Wall** | WebAR platform (planned) | AR features unavailable; core app unaffected |
| **Vuetify CDN Icons** | Material Design Icons (mdi-*) | Missing iconography |

## Runtime Environment

- **Target device**: Physical kiosk with touchscreen, modern Chromium-based browser
- **Network**: Kiosks require a stable internet connection to fetch content from Directus at runtime
- **Screen**: Landscape orientation assumed; components use fixed widths and horizontal scrolling
- **Input**: Touch only — no keyboard or mouse expected

## Authentication

- A single static bearer token grants read/write access to the Directus instance
- The token is currently **hardcoded in source** — this is a known issue for a public repo
- The token is used both for reading content and for writing survey votes
- No user authentication exists — kiosk visitors are anonymous

## Content Model

- Each physical kiosk maps to exactly one `location` in Directus
- Locations are identified by URL slug, not by numeric ID
- All textual content supports exactly two languages: English (`en`) and German (`de`)
- Content editors manage all data through the Directus admin UI, not through this codebase

## Build & Deployment

- The site is generated statically (`nuxt generate`) — new locations require a rebuild
- Build-time fetches from Directus determine the set of prerendered routes
- No incremental static regeneration — a full rebuild is needed for any route change
- No CI/CD pipeline exists; builds and deploys are manual

## Cost Model

| Item | Cost | Notes |
|---|---|---|
| Directus hosting | Unknown | Assumed to be university-managed |
| Domain (`takt.city`) | ~10-15 EUR/yr | Standard domain registration |
| Static hosting | Minimal / free | SSG output can be served from any static host |
| 8th Wall | Subscription-based | Only relevant if AR features are activated |

## Thresholds & Limits

- No rate limiting is configured on the Directus API
- No caching layer exists between the frontend and the CMS
- No pagination is implemented — all items in a collection are fetched in a single request
- Asset sizes are not optimized client-side (dependent on what editors upload to Directus)
