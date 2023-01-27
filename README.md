# Öffentliches Gestalten (Public Design)

CityLAB Berlin's [handbook](https://citylab-berlin.org/en/projects/handbuch/) for working innovatively in public administration as a documentation-style website.

> We use [Docusaurus](https://docusaurus.io/), a modern static website generator, as our content engine.

---

> **This website is currently a work-in-progress.**

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Content

### Chapter sidebar

We autogenerate the contents of the sidebar that displays the book chapters (see `./sidebars.js`). This enables us to not having to think too much about keeping the sidebar and the contents in sync.

**There is one caveat though**: We also have a custom table-of-content-type of of cpater overview (`./src/components/StepsOverview.tsx`). Here we hardcode the chapters because there doesn't seem to be a way to fetch the sidebar contents from a component dynamically. Keep this in mind when changing top-level chapters!

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
