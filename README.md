# Works On My Machine

A personal tech blog built with Astro Ink, running on Deno, and deployed to GitHub Pages.

## Overview

This repository contains the source for a static blog with MDX/Markdoc content, tags, search, and drafts. It uses Astro for the site framework, Tailwind for styling, and Svelte for a few interactive components.

## Features

- Static site generated with Astro
- MDX and Markdoc content support
- Tag pages and pagination
- Drafts section for unpublished posts
- Client-side search index generated at build time
- GitHub Pages deployment via GitHub Actions

## Tech Stack

- Astro 4
- Deno 2.x
- Tailwind CSS
- Svelte (for interactive widgets)
- MDX + Markdoc

## Project Structure

- `src/pages/` - Route definitions (blog, tags, drafts, media, rss)
- `src/content/blog/` - Blog posts (MDX/MD/MDOC)
- `src/components/` - Astro + Svelte components
- `src/layouts/` - Page layouts
- `src/styles/` - Global styles
- `src/utils/` - Utilities (search, view stats, media)
- `public/` - Static assets and generated search index
- `scripts/search/` - Search index build script
- `dist/` - Production build output

## Local Development

### Prerequisites

- Deno 2.x or later

### Start the dev server

```bash
deno task dev
```

Then open `http://localhost:4321`.

## Build and Preview

```bash
deno task build
```

Build runs Astro checks, generates the static site, and creates `public/search-index.json`.

```bash
deno task preview
```

## Content Authoring

### Blog posts

Add a new post in `src/content/blog/` using MDX or Markdoc.

Example frontmatter:

```md
---
title: My New Post
description: A brief summary of the post
date: 2025-01-01
tags: [astro, deno]
author: Angel Cantu
authorTwitter: ""
category: blog
---
```

### Drafts

Draft routes are available under `src/pages/drafts/`. To list drafts on the site, ensure `listDrafts` is enabled in `src/config.ts`.

## Configuration

Key settings live in these files:

- `astro.config.mjs` - Astro config, site URL, base path for GitHub Pages, integrations
- `src/config.ts` - Site metadata, navigation, feature flags
- `src/content/config.ts` - Content schema for blog posts
- `tailwind.config.cjs` and `tailwind.theme.config.cjs` - Theme and Tailwind setup

## Deployment

Deployment is handled by GitHub Actions in `.github/workflows/deploy.yml`.

The production site is published to:
`https://angelcantugr.github.io/works-on-my-machine`

For initial setup details, see `GITHUB_PAGES_SETUP.md`.

## Scripts

- `deno task dev` - Start dev server
- `deno task build` - Check + build + search index
- `deno task build:search` - Generate `public/search-index.json`
- `deno task preview` - Preview production build

## License

MIT. See `LICENSE`.

## Credits

- Theme: Astro Ink by Aftab Alam
  https://github.com/one-aalam/astro-ink
