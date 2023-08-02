# Code Patterns Open
An open-source resource that covers solutions to technical screening programming challenges.

## Contributors
We use `npm` as our package manager.

### VSCode Settings
Be sure to add this to your `settings.json`:
```
  "[markdown]": {
    "editor.formatOnSave": false
  }
```
Otherwise your markdown files&mdash;specifically your code blocks&mdash;will be improperly auto-formatted.

```
npm create astro@latest -- --template basics
```

### Core Versioning Requirements
Astro version `v2.9.3`
npm version `v9.5.1`
node version `v18.16.0`

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 🚀 Project Structure

Inside of the Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── [...]
├── src/
│   ├── components/
│   │   └── [...].astro
│   ├── content/
│   │   └── [...].mdx
│   ├── layouts/
│   │   └── [...].astro
│   └── pages/
│       └── [...].astro
└── package.json
```

Astro, as we've configured it, looks for `.astro`, `.jsx`/`.tsx`, or `.md`/`.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.


### Documentation
Consult the [Astro documentation](https://docs.astro.build) or the [Astro Discord server](https://astro.build/chat) for more guidance/info.
