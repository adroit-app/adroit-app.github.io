# Adroit Site

The landing page and the user documentation for [Adroit](https://github.com/adroit-app/Adroit), published at [adroit-app.github.io](https://adroit-app.github.io).

## Tech stack

- [Astro](https://astro.build) with [Starlight](https://starlight.astro.build) for the documentation: sidebar, full-text search (Pagefind), light and dark themes and the table of contents come with it.
- The landing page (`src/pages/index.astro`) is a plain Astro page with its own styles, outside Starlight. Its picture of Adroit's window is drawn in HTML and CSS, in the window's own colours and layout; the picker and the console are screenshots of the real window.
- Fonts are Outfit, the face the wordmark is drawn from, for the headings, IBM Plex Sans for the text and JetBrains Mono for code and keys, self-hosted through Fontsource. Colours are the brand's charcoal and ivory, with the app's own blue and ground.
- Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Development

With Nix, `nix develop` gives Node.js, just and Python. Without it, Node.js 24 and Python 3 are enough.

```sh
just install   # npm install
just dev       # dev server with hot reload
just check     # type check, build, link check
just preview   # serve dist/
```

## Layout

```
src/
├── pages/index.astro          # landing page
├── components/
│   ├── AppWindow.astro        # Adroit's main window, drawn for the landing page
│   ├── Screenshot.astro       # a screenshot of the window, in the page's theme
│   └── Icon.astro             # an icon of src/icons/, inlined
├── content/docs/docs/         # the documentation, served under /docs/
├── icons/                     # the Tabler icons the window draws, with their licence
└── styles/                    # fonts, Starlight theme, landing page
public/
├── logo/                      # brand logos, from adroit-brand
└── screenshots/               # the window, as <name>-light.png and <name>-dark.png
scripts/
└── check-links.py             # checks every internal link and #fragment in dist/
```

## Keeping up with Adroit

The documentation describes Adroit's behaviour in the words of a user; its source of truth is `docs/spec/` in the Adroit repository. Describe only what the specs promise, and when the behaviour changes there, change the page that describes it here. The complete key and settings references are generated in the Adroit repository; link to them rather than copying them.

`AppWindow.astro` copies the window's colours and proportions from `crates/window/assets/css/` in the Adroit repository, and its icons from `crates/core/icons/tabler/`. When the window's look changes there, change the drawing here.

The screenshots are of the real window, taken in a macOS VM with the appearance set to Light and then Dark, cropped to the window and scaled to 1600 pixels wide. When the window's look changes, take them again.

## Writing the documentation

- Write in English, in plain words: short sentences, the names of menus and settings as the app shows them, in bold.
- Write keys as `<kbd>` elements, with `Mod` for the key that is Command on macOS.
- Link between pages with absolute paths (`/docs/window/`). `just check` fails on a link to a page or a heading that does not exist.
