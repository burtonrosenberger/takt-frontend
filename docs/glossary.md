# Glossary

| Term | Definition |
|---|---|
| **Der Takt** | The product/brand name, German for "The Rhythm." The civic engagement platform. |
| **ADAA** | The research project at RWTH Aachen University under which this platform is developed. |
| **Panel / Location** | A physical kiosk installation at a specific site in Aachen. Each panel runs one instance of the app at a unique URL slug. |
| **Kiosk** | The physical touchscreen hardware where the app is displayed to the public. |
| **Directus** | The headless CMS used as the backend. All content (locations, projects, surveys, games) is managed there. |
| **Location slug** | The URL-friendly identifier for a panel (e.g., `/p/marktplatz`). Set as the `url` field in the Directus `locations` collection. |
| **Participate** | A section of the app listing civic engagement activities citizens can join. |
| **Survey / Votes** | Citizen opinion polling. Users answer questions; responses are POSTed to the `votes` collection in Directus. |
| **Game / Columns** | A drag-and-drop matching exercise. Left column contains prompts, right column contains answers. Users drag to match. |
| **Proto-Site** | Referenced in the UI — the physical festival or prototype deployment location used for early testing. |
| **AR Experience** | Augmented reality content accessed by scanning a QR code on a project card. Planned integration with 8th Wall. |
| **Marker** | A positional pin on the Aachen landmark map image, defined by `marker_x` and `marker_y` coordinates on a location. |
| **Translations** | Each Directus content item includes a `translations` sub-array. Each entry is keyed by `languages_code` (`en` or `de`). |
| **SSG** | Static Site Generation — the Nuxt build mode used. Pages are pre-rendered to HTML at build time. |
| **Nitro** | Nuxt's underlying server engine. Used here to inject prerender routes at build time. |
| **8th Wall** | A WebAR platform for browser-based augmented reality. Integration is planned but not yet active in code. |
| **Vuetify** | The Material Design component library used for UI elements (carousels, drawers, cards, icons). |
| **i18n** | Internationalization — the system supporting English and German translations throughout the app. |
| **Deep fields** | Directus query parameter that fetches nested relational data (translations, projects, games) in a single API call. |
