# Portfolio API

The portfolio exposes its content as a static JSON API served from `public/api/`. No server or build step required — Vite serves these files as-is.

## Endpoints

| Endpoint | Description |
|---|---|
| `GET /api/projects.json` | All open-source projects |
| `GET /api/skills.json` | Skills grouped by category |
| `GET /api/experience.json` | Full work history |
| `GET /api/status.json` | Current availability |

## Examples

```bash
curl https://rm.dev/api/projects.json
curl https://rm.dev/api/skills.json
curl https://rm.dev/api/experience.json
curl https://rm.dev/api/status.json
```

Locally (dev server at `http://localhost:5173`):

```bash
curl http://localhost:5173/api/projects.json
```

## Keeping data in sync

The JSON files mirror the data arrays hardcoded in the component files:

| JSON file | Source of truth |
|---|---|
| `public/api/projects.json` | `projects` array in `src/components/Projects.jsx` |
| `public/api/skills.json` | `categories` array in `src/components/Skills.jsx` |
| `public/api/experience.json` | `experiences` array in `src/components/Experience.jsx` |
| `public/api/status.json` | Manually maintained |

When you update content in a component, update the matching JSON file as well.

## Updating availability

Edit `public/api/status.json` directly:

```json
{
  "available": true,
  "role": "Senior QA Engineer / Smart Contract Engineer",
  "location": "Paris, France",
  "message": "Open to new opportunities"
}
```

Set `"available": false` and update `"message"` when you are no longer looking.
