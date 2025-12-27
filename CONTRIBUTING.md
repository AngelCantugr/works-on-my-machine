# Contributing to Works On My Machine

Thank you for your interest in contributing to this tech blog! This guide will help you add new content.

## Quick Start

### Adding a New Guide

1. Create a new Markdown file in `src/content/docs/guides/`:
   ```bash
   touch src/content/docs/guides/my-new-guide.md
   ```

2. Add frontmatter and content:
   ```markdown
   ---
   title: My New Guide
   description: A brief description of what this guide covers
   ---

   ## Introduction

   Your content here...
   ```

3. Update the sidebar in `astro.config.mjs` (if you want it in a specific order):
   ```javascript
   sidebar: [
     {
       label: 'Guides',
       items: [
         { label: 'Getting Started', slug: 'guides/getting-started' },
         { label: 'My New Guide', slug: 'guides/my-new-guide' }, // Add this
       ],
     },
     // ...
   ]
   ```

### Adding a Reference Page

Reference pages are automatically added to the sidebar. Just create a file in `src/content/docs/reference/`:

```bash
touch src/content/docs/reference/my-reference.md
```

Add your content with frontmatter:
```markdown
---
title: My Reference
description: Quick reference for...
---

Your reference content here...
```

## Content Guidelines

### Writing Style

- **Be clear and concise**: Get to the point quickly
- **Use examples**: Show, don't just tell
- **Format code properly**: Use code blocks with language identifiers
- **Add headings**: Break up content with meaningful headers

### Markdown Features

Starlight supports:
- Standard Markdown
- Code blocks with syntax highlighting
- Callouts (notes, tips, warnings)
- Tables
- Images
- Links

Example callout:
```markdown
:::tip
This is a helpful tip!
:::

:::caution
Be careful with this!
:::
```

### Code Blocks

Use fenced code blocks with language identifiers:

````markdown
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start dev server:
   ```bash
   npm run dev
   ```

3. View at: http://localhost:4321/works-on-my-machine

4. Make your changes and see them live!

## Publishing

When you push to the `main` branch, GitHub Actions will automatically:
1. Build the site
2. Deploy to GitHub Pages
3. Make it live at https://angelcantugr.github.io/works-on-my-machine

## File Structure

```
src/
└── content/
    └── docs/
        ├── index.mdx           # Homepage
        ├── guides/             # Tutorial/guide articles
        │   └── *.md
        └── reference/          # Reference documentation
            └── *.md
```

## Need Help?

- [Starlight Documentation](https://starlight.astro.build)
- [Astro Documentation](https://docs.astro.build)
- [Markdown Guide](https://www.markdownguide.org)

Happy blogging! 🚀
