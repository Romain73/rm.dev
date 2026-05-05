# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project layout

The repo contains a single app under `portfolio/`. All commands below must be run from that directory.

## Commands

```bash
npm run dev      # dev server at http://localhost:5173
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # ESLint
npm run format   # Prettier (writes in place)
```

## Architecture

Single-page portfolio built with React 19 + Vite. No router — the page is one long scroll with anchor-linked sections.

`src/App.jsx` composes the sections in order: `Navbar → Hero → About → Experience → Skills → Projects → Contact`.

Each section is a self-contained component in `src/components/` with a co-located CSS Module (`*.module.css`). There is no global state, no context, and no external data fetching — all content is hardcoded as plain JS arrays at the top of the relevant component file.

### Content components and their data

| Component | Data location | How to update |
|---|---|---|
| `Experience.jsx` | `experiences` array at the top of the file | Add/edit objects in the array |
| `Skills.jsx` | `categories` array at the top of the file | Add/edit skill pills per category |
| `Projects.jsx` | `projects` array at the top of the file | See `docs/how-to-add-a-project.md` |

### Styling conventions

- CSS Modules scoped per component; no shared utility classes except `.container` defined in `index.css`
- Prettier config: single quotes, no semicolons, trailing commas (ES5), 2-space indent

## Adding a project

See `docs/how-to-add-a-project.md`. In short: drop an image in `src/assets/`, import it in `Projects.jsx`, and add an entry to the `projects` array. Add `wip: true` to show a WIP badge.
