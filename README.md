# Works On My Machine 🚀

A tech blog built with Astro and Starlight, deployed to GitHub Pages.

## About

This is my technical blog where I share what I know, learn, and experiment with in software development. The blog helps me build my technical network by documenting my journey and sharing insights with others.

## Tech Stack

- **[Astro](https://astro.build)** - Modern web framework
- **[Starlight](https://starlight.astro.build)** - Documentation theme for Astro
- **[Deno](https://deno.com)** - Modern JavaScript/TypeScript runtime with built-in TypeScript support
- **GitHub Pages** - Hosting
- **GitHub Actions** - Automated deployment

## Local Development

### Prerequisites

- Deno 2.x or later

### Setup

1. Clone the repository:
```bash
git clone https://github.com/AngelCantugr/works-on-my-machine.git
cd works-on-my-machine
```

2. Start the development server:
```bash
deno task dev
```

3. Open your browser and visit `http://localhost:4321`

## Building for Production

```bash
deno task build
```

The built site will be in the `dist/` directory.

## Deployment

This blog is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by GitHub Actions (see `.github/workflows/deploy.yml`).

### GitHub Pages Setup

To set up GitHub Pages for your own fork:

1. Go to your repository's Settings
2. Navigate to Pages (under Code and automation)
3. Under "Build and deployment", set:
   - Source: GitHub Actions
4. Push to the `main` branch to trigger deployment

## Adding Content

Content is written in Markdown/MDX and stored in `src/content/docs/`.

### Adding a New Guide

Create a new `.md` or `.mdx` file in `src/content/docs/guides/`:

```markdown
---
title: Your Guide Title
description: A brief description
---

Your content here...
```

### Adding a Reference Page

Create a new `.md` or `.mdx` file in `src/content/docs/reference/`:

```markdown
---
title: Your Reference Title
description: A brief description
---

Your reference content here...
```

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   └── content/
│       └── docs/
│           ├── index.mdx       # Homepage
│           ├── guides/         # Guide articles
│           └── reference/      # Reference materials
├── astro.config.mjs            # Astro configuration
└── deno.json                   # Deno configuration and tasks
```

## License

This project is open source and available under the MIT License.
