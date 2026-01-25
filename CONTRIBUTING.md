# Contributing to Works On My Machine

Thanks for your interest in contributing! This guide covers how to add or update posts.

## Quick Start

### Add a New Post

1. Create a new file in `src/content/blog/`:
   ```bash
   touch src/content/blog/my-new-post.mdx
   ```

2. Add frontmatter and content:
   ```markdown
   ---
   title: My New Post
   description: A brief summary of the post
   date: 2025-01-01
   tags: [astro, deno]
   ---

   Your content here...
   ```

3. Run the dev server:
   ```bash
   deno task dev
   ```

## Content Guidelines

- Be clear and concise
- Use headings to break up content
- Prefer code blocks with language identifiers
- Keep titles and descriptions short and specific

## Local Development

- Start: `deno task dev`
- Build: `deno task build`
- Preview: `deno task preview`

## Publishing

Push to `main` and GitHub Actions will deploy to:
`https://angelcantugr.github.io/works-on-my-machine`

## Need Help?

- Astro docs: https://docs.astro.build
- Astro Ink theme: https://github.com/one-aalam/astro-ink
