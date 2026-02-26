# Architecture

## System Overview

```mermaid
graph LR
    subgraph Kiosk["Physical Kiosk (Browser)"]
        Nuxt["Nuxt 3 SSG"]
        Vue["Vue 3 + Vuetify"]
    end

    subgraph Directus["Directus CMS — armn.takt.city"]
        locations
        projects
        participate
        questions/answers
        games/columns
        votes["votes (write)"]
    end

    subgraph AR["8th Wall (planned)"]
        WebAR["AR Experience"]
    end

    Kiosk -- "HTTPS (read)" --> Directus
    Kiosk -- "HTTPS (POST votes)" --> Directus
    Kiosk -. "QR scan" .-> AR
```

## Component Tree

```mermaid
graph TD
    App["app.vue"] --> NuxtPage["NuxtPage"]
    NuxtPage --> Index["pages/index.vue<br/>(Splash)"]
    NuxtPage --> IdPage["pages/p/[id].vue<br/>(Location Page)"]

    IdPage --> Home["Home.vue<br/>Horizontal scroll layout"]
    IdPage --> NewHome["NewHome.vue<br/>Card-based redesign"]
    IdPage --> Projects["Projects.vue<br/>Project carousel"]
    IdPage --> Participate["Participate.vue<br/>Participation carousel"]
    IdPage --> Survey["Survey.vue<br/>Question voting"]
    IdPage --> Game["Game.vue<br/>Drag-and-drop matching"]
```

## Build-Time Flow

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant Nuxt as Nuxt CLI
    participant Nitro as Nitro Engine
    participant CMS as Directus CMS

    Dev->>Nuxt: pnpm generate
    Nuxt->>Nitro: trigger nitro:config hook
    Nitro->>CMS: GET /items/locations
    CMS-->>Nitro: [{url: "marktplatz"}, {url: "park"}, ...]
    Nitro->>Nuxt: inject routes [/p/marktplatz, /p/park, ...]
    Nuxt->>Nuxt: prerender static HTML per route
    Nuxt-->>Dev: dist/ output
```

## Runtime Data Flow

```mermaid
sequenceDiagram
    participant User as Kiosk User
    participant Page as [id].vue
    participant CMS as Directus CMS
    participant Comp as Child Components

    User->>Page: loads /p/{slug}
    Page->>CMS: GET /items/locations?filter[url][_eq]={slug}<br/>(deep: translations, projects, games)
    CMS-->>Page: location data (JSON)
    Page->>Comp: distribute via props
    Note over Comp: Home, Projects, Participate,<br/>Survey, Game

    User->>Comp: answers survey question
    Comp->>CMS: POST /items/votes<br/>{question_id, answer_id}
    CMS-->>Comp: 200 OK
```

## Navigation Model

```mermaid
graph LR
    subgraph LocationPage["Location Page /p/{slug}"]
        direction LR
        S1["Section: Home"] --> S2["Section: Projects"]
        S2 --> S3["Section: Participate"]
        S3 --> S4["Section: Survey"]
        S4 --> S5["Section: Game"]
    end

    style LocationPage fill:#fff,stroke:#374151
    linkStyle 0,1,2,3 stroke:#fcb34a,stroke-width:2px
```

No client-side route navigation between locations. Each kiosk loads one URL. Within a page, navigation is **horizontal smooth-scrolling** between viewport-width sections.

## Directus Data Model

```mermaid
erDiagram
    locations ||--o{ projects : has
    locations ||--o{ participate : has
    locations ||--o{ questions : has
    locations ||--o{ games : has
    questions ||--o{ answers : contains
    games ||--o{ columns : contains
    questions ||--o{ votes : receives

    locations {
        int id PK
        string title
        string url
        float marker_x
        float marker_y
        json translations
    }

    projects {
        int id PK
        json images
        json qr_codes
        json audio
        json translations
    }

    participate {
        int id PK
        json translations
    }

    questions {
        int id PK
        json translations
    }

    answers {
        int id PK
        int question_id FK
        json translations
    }

    games {
        int id PK
        json translations
    }

    columns {
        int id PK
        int game_id FK
        string left_text
        string right_text
    }

    votes {
        int id PK
        int question_id FK
        int answer_id FK
    }
```

All content collections include a `translations` sub-array keyed by `languages_code` (`en`, `de`).

## Tech Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| **Framework** | Nuxt 3 | ^3.10.3 | SSG/SSR, routing, head management |
| **UI Library** | Vue 3 | ^3.4.19 | Composition API components |
| **Component Library** | Vuetify | via vuetify-nuxt-module ^0.12.0 | Material Design components |
| **Internationalization** | @nuxtjs/i18n | ^8.3.1 | English + German support |
| **Routing** | vue-router | ^4.3.0 | Client-side routing |
| **Package Manager** | pnpm | — | Dependency management |
| **Language** | TypeScript | via Nuxt | Config files; components use JS in `<script setup>` |
| **Server Engine** | Nitro | built-in | SSG prerender route injection |

### Backend / Data

| Technology | Detail |
|---|---|
| **CMS** | Directus (headless) at `armn.takt.city` |
| **Database** | Managed by Directus (not directly accessed) |
| **Auth** | Bearer token (static, read/write) |
| **Assets** | Served from Directus at `/assets/{uuid}` |

### Infrastructure

| Concern | Current State |
|---|---|
| **Hosting** | Static files (SSG output) — host not documented |
| **CI/CD** | None configured |
| **Containerization** | None |
| **Monitoring** | None |
| **Testing** | None |
