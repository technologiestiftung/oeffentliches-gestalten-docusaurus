# Öffentliches Gestalten (Public Design)

CityLAB Berlin's [handbook](https://citylab-berlin.org/en/projects/handbuch/) for working innovatively in public administration as a documentation-style website.

The handbook documents a large collection of methods and contextual information on how to start innovation processes in public administrations.

> We use [Docusaurus](https://docusaurus.io/), a modern static website generator, as our content engine.

---

## Installation

Make sure you have [Node.js](https://nodejs.org/en) installed and you're using the Node version as defined in `.nvmrc`. Then install the necessary dependencies.

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### CSS

Docusaurus provides styling out-of-the-box. They currently use a mix of theme class names, Infima (their CSS library) class names and CSS modules. Find the most recent information in their [styling documentation](https://docusaurus.io/docs/styling-layout).

We have additionally added [TailwindCSS](https://tailwindcss.com/) to our project.

Our strategy for customizing the styling is to (wherever possible) override Docusaurus's classes in `src/css/custom.css` by using Tailwind's `@apply` rule. This is to avoid ["swizzling"](https://docusaurus.io/docs/swizzling) Docusaurus components and adding our own Tailwind utilities to the markdown. We do this because swizzling [is only save for some components](https://docusaurus.io/docs/swizzling#what-is-safe-to-swizzle).

Whenever we really need to swizzle a component or we create a custom component we use Tailwind's utility classes in the markup.

Note that we define our color scheme in CSS variables in `src/css/custom.css` and reference them in our `tailwind.config.js` in order to avoid duplicating our theme contents.

### Search locally

If you want to use the search feature ([Algolia DocSearch](https://docsearch.algolia.com/)) locally, create a file `.env` and fill it according to the `.env.example`. If you don't have access to the required values, please ask a repository mainatiner for help.

## Content

### Phases and methods

The book consists of 5 chapters that we call _phases_, an introduction chapter, and some opening and closing content.

Find the main content in `./docs`:

```plain
docs
├── 0-einfuehrung
│   ├── index.mdx
│   ├── [...]
├── 1-vorbereiten
│   ├── 01-ist-zustand-betrachten.mdx
│   ├── [...]
```

Note that all methods are centrally stored in another directory:

```plain
src/assets/methods
├── entwicklungsmatrix.md
├── fuenf-finger-feedback.md
├── gewaltfreie-kommunikation.md
├── [...]
```

Each of these `.md` files is the central source of truth for the method contents and is used in the rendered pages (e.g. `docs/1-vorbereiten/01-ist-zustand-betrachten.mdx`) like so:

```mdx
import { MethodCard } from '@site/src/components/MethodCard';
import { MethodSummary } from '@site/src/components/MethodSummary';
import * as Entwicklungsmatrix from '@site/src/assets/methods/entwicklungsmatrix.md'

// [...]

<MethodSummary
  title={Entwicklungsmatrix.frontMatter.title}
  time={Entwicklungsmatrix.frontMatter.time}
  attributes={Entwicklungsmatrix.frontMatter.attributes}
  footer={Entwicklungsmatrix.frontMatter.note}
>
  <Entwicklungsmatrix.default />
</MethodSummary>

<MethodCard
  title={Entwicklungsmatrix.frontMatter.title}
  surtitle="Arbeitsblatt"
  attributes={[Entwicklungsmatrix.frontMatter.time]}
  imageUrl={"/img/01_hero.svg"}
/>

// [...]
```

#### Updating methods

If you want to change, add, or delete methods, please make the change first in `src/assets/methods`.

Then we have to do something that feels a bit repetitive, but is required for our customized Docusaurus setup.

```mdx
import * as MyNewMethod from '@site/src/assets/methods/my-new-method.md'

## My method title from MyNewMethod

<MethodSummary
  title={MyNewMethod.frontMatter.title}
  time={MyNewMethod.frontMatter.time}
  attributes={MyNewMethod.frontMatter.attributes}
  footer={MyNewMethod.frontMatter.note}
>
  <MyNewMethod.default />
</MethodSummary>
```

Assuming we have created a new method, we import it and render it inside a `MethodSummary`. Unfortunately we also have to add a H2 with the method title right above. This is to make the Docusaurus table of contents work properly. But because we want don't want the headings to be duplicated, we need to hide its ID the heading by adding it in `src/css/custom.css`:

```css
#entwicklungsmatrix,
#prozessverlauf
/* [...] */
{
  visibility: hidden;
  height: 0;
  margin: 0;
}
```

> You can find out the ID by inspecting the generated markup in the browser console.

### Chapter sidebar

We autogenerate the contents of the sidebar that displays the book chapters (see `./sidebars.js`). This enables us to not having to think too much about keeping the sidebar and the contents in sync.

**There is one caveat though**: We also have a custom table-of-content-type of of cpater overview (`./src/components/StepsOverview.tsx`). Here we hardcode the chapters because there doesn't seem to be a way to fetch the sidebar contents from a component dynamically. Keep this in mind when changing top-level chapters!

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

This project is deployed to [Vercel](https://vercel.com/). Updates to the `main` branch will automatically trigger a new deploy.

### Search

The project is configured with [Algolia DocSearch](https://docsearch.algolia.com/). DocSearch provides us with a search index that makes all text content of the handbook accessible via a search field. In order to make the search work, Vercel is configure with the necessary environment variables as specified in `.env.example`.