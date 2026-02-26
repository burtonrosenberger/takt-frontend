# Contributing & Development Standards

This is a public repository. All contributions should follow the conventions below.

## Getting Started

```bash
pnpm install
pnpm dev          # dev server on LAN (--host)
```

Do **not** use npm or yarn — this project uses **pnpm** exclusively (`pnpm-lock.yaml` is committed).

## Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Production-ready code. All merges via PR. |
| `feature/*` | New features. Branch from `main`. |
| `fix/*` | Bug fixes. Branch from `main`. |
| `chore/*` | Tooling, docs, dependency updates. |

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add survey results chart
fix: correct marker position on mobile
chore: update vuetify to 3.5
docs: add architecture diagram
refactor: extract API client from page component
```

Keep the subject line under 72 characters. Use the body for context when needed.

## Code Conventions

### General

- **No hardcoded secrets.** API tokens, credentials, and keys must go in environment variables (`.env`), never in source files.
- **No commented-out code.** Dead code should be deleted, not commented. Use git history to recover old code.
- **No backup files.** Do not commit files like `[id]_backup.vue`. Use branches for experiments.
- **Remove unused dependencies.** If a package is not imported anywhere, remove it from `package.json`.

### Vue / Nuxt

- Use `<script setup>` (Composition API) for all new components. Do not use Options API.
- Use TypeScript with explicit types for props, emits, and reactive state:
  ```vue
  <script setup lang="ts">
  interface Props {
    title: string
    items: ProjectItem[]
  }
  const props = defineProps<Props>()
  ```
- One component per file. Component filenames are **PascalCase** (`ProjectCard.vue`).
- Template expressions should be simple — extract complex logic into computed properties or composables.

### Naming

| Thing | Convention | Example |
|---|---|---|
| Components | PascalCase | `ProjectCard.vue` |
| Composables | camelCase with `use` prefix | `useLocationData.ts` |
| Variables / functions | camelCase | `fetchProjects()` |
| CSS classes | kebab-case | `.project-card` |
| Constants | UPPER_SNAKE_CASE | `API_BASE_URL` |
| Directus fields | snake_case (match CMS) | `marker_x`, `languages_code` |

### Styling

- Use scoped `<style scoped>` in components.
- Prefer Vuetify utility classes and components over custom CSS where possible.
- Brand colors:
  - Amber/Yellow: `#fcb34a`
  - Dark charcoal: `#374151`
  - White: `#ffffff`

### API Calls

- All Directus API calls should use a centralized composable or utility — do not scatter `fetch()` calls across components.
- API base URL and tokens must come from runtime config (`useRuntimeConfig()`), not hardcoded strings.

## Pull Request Process

1. Branch from `main`
2. Make your changes, following the conventions above
3. Ensure the app builds cleanly: `pnpm generate`
4. Open a PR against `main` with:
   - A clear title (conventional commit style)
   - Description of what changed and why
   - Screenshots for visual changes
5. At least one review required before merge

## What Needs Improvement

The following are known gaps. Contributions in these areas are welcome:

- [ ] **Environment variables**: Move all API URLs and tokens to `.env` / `useRuntimeConfig()`
- [ ] **Linting**: Add ESLint + Prettier with a shared config
- [ ] **Testing**: Add Vitest for unit tests, Playwright for e2e
- [ ] **CI/CD**: GitHub Actions for lint, build, and deploy
- [ ] **TypeScript strictness**: Enable strict mode, add types to all components
- [ ] **API layer**: Extract Directus calls into a composable (`useDirectus`)
- [ ] **Cleanup**: Remove `[id]_backup.vue`, unused `vuedraggable` dependency
- [ ] **Accessibility**: Audit for WCAG compliance (important for public kiosks)

## License

This project is licensed under the GNU GPL v3. See [LICENSE](../LICENSE) in the repository root.
