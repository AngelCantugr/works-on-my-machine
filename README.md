# Works On My Machine

A tech blog built with Astro Ink and powered by Deno.

## About

This is my technical blog where I share what I know, learn, and experiment with in software development.

## Tech Stack

- Astro
- Astro Ink theme
- Deno 2.x
- GitHub Pages

## Local Development

### Prerequisites

- Deno 2.x or later

### Setup

```bash
deno task dev
```

Then open `http://localhost:4321`.

## Building for Production

```bash
deno task build
```

The built site will be in the `dist/` directory.

## Deployment

This blog is deployed to GitHub Pages. See `.github/workflows/deploy.yml` for the workflow.

## Content

Blog posts live in `src/content/blog/` as MDX or Markdoc files.

## Credits

- Theme: https://github.com/one-aalam/astro-ink
