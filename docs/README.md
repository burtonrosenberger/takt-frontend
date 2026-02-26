# Der Takt — Frontend Documentation

**Der Takt** ("The Rhythm") is a public civic engagement platform built for physical kiosk installations across Aachen, Germany. It is part of **Projekt ADAA** at RWTH Aachen University, centered on the question:

> *"What Could I Do To Help My City Become Climate Neutral?"*

## What It Does

Citizens interact with stationary touchscreen panels deployed at specific city locations. Each panel offers:

- Location-specific information about local climate-neutral projects
- Guided civic participation activities
- Surveys and voting on climate/city topics
- A drag-and-drop matching game
- Audio narration of content
- Bilingual support (English / German)
- QR codes linking to AR experiences

## How It Works

The app is a **Nuxt 3 static site** (SSG). At build time, it fetches all location slugs from the Directus CMS and pre-renders a page per location at `/p/{slug}`. Each page fetches its content at runtime from the same CMS. There is no client-side routing between locations — each panel loads its own URL directly.

## Documentation Index

| Document | Description |
|---|---|
| [Architecture](./architecture/README.md) | System design, tech stack, data flow |
| [Assumptions](./assumptions.md) | Cost model, thresholds, external dependencies |
| [Glossary](./glossary.md) | Project-specific terminology |
| [Contributing](./CONTRIBUTING.md) | Dev standards, code conventions, workflow |
| [Plans — Active](./plans/active/README.md) | Current work in progress |

## Quick Start

```bash
pnpm install
pnpm dev        # starts dev server exposed to LAN (--host)
pnpm generate   # static site build
pnpm preview    # preview the generated site
```

## Repository Structure

```
takt-frontend/
├── app.vue                 # Root shell — v-app wrapping NuxtPage
├── nuxt.config.ts          # Nuxt config + SSG prerender hook
├── i18n.config.ts          # i18n messages (en/de)
├── pages/
│   ├── index.vue           # Splash screen (logo, amber background)
│   └── p/
│       └── [id].vue        # Main location page (~245 LOC)
├── components/
│   ├── Home.vue            # Horizontal-scroll layout (map, buttons, description)
│   ├── NewHome.vue         # Redesign in progress (card-based layout)
│   ├── Game.vue            # Drag-and-drop matching game
│   ├── Participate.vue     # Slide-group carousel of participation items
│   ├── Projects.vue        # Slide-group carousel of projects
│   └── Survey.vue          # Vertical carousel of survey questions
├── assets/                 # Fonts, flag icons, UI illustrations
├── server/                 # Nitro server config
└── public/                 # Static assets (favicon)
```
