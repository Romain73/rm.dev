# How to Add a New Project

## 1. Add an image

Drop a screenshot into `src/assets/` — any PNG or JPEG works. Square images display best.

Naming convention: `project-<your-project-name>.png`

## 2. Open `src/components/Projects.jsx`

At the top of the file, import your image:

```js
import myProjectImg from '../assets/project-<your-project-name>.png'
```

## 3. Add an entry to the `projects` array

```js
{
  id: 3,                          // increment from the last entry
  title: 'Your Project Title',
  description: 'One or two sentences describing what it does.',
  image: myProjectImg,
  link: 'https://github.com/Romain73/your-repo', // or '#' if not ready yet
},
```

### Optional — show a WIP badge

Add `wip: true` to the entry if the project is still in progress:

```js
{
  id: 3,
  title: 'Your Project Title',
  description: '...',
  image: myProjectImg,
  link: '#',
  wip: true,
},
```

Remove `wip: true` (or the whole line) once the project is live.

## Full example

```js
import myProjectImg from '../assets/project-testability-scanner.png'

const projects = [
  // ...existing projects...
  {
    id: 3,
    title: 'Testability Scanner',
    description: "A static analysis tool that audits your web app's testability score.",
    image: myProjectImg,
    link: 'https://github.com/Romain73/testability-scanner',
  },
]
```

## That's it

No other files need to be changed. The grid layout adjusts automatically.
