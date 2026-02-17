# GitHub Instructions for Works On My Machine

Quick reference for maintaining and deploying this personal tech blog.

## Repository Info

- **Repository**: `AngelCantugr/works-on-my-machine`
- **Stack**: Astro 4 + Deno 2.x + Tailwind
- **Deployment**: GitHub Actions → GitHub Pages (automatic)
- **Live Site**: https://blog.angelcantugr.dev

## Quick Start

```bash
# Local development
deno task dev          # Start dev server at http://localhost:4321
deno task build        # Build + generate search index
deno task preview      # Preview production build
```

## Publishing New Posts

1. **Create file** in `src/content/blog/`:
   ```bash
   touch src/content/blog/your-post-title.mdx
   ```

2. **Add frontmatter** (all required):
   ```markdown
   ---
   title: Your Post Title
   description: Brief summary for SEO
   date: 2026-02-10
   tags: [astro, deno, typescript]
   author: Angel Cantu
   authorTwitter: ""
   category: blog
   ---

   Your content here...
   ```

3. **Test locally**:
   ```bash
   deno task dev  # Visit http://localhost:4321/blog
   ```

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "Add post: Your Post Title"
   git push origin main
   ```

5. **Automatic deployment** (1-2 minutes):
   - GitHub Actions builds and deploys automatically
   - Check Actions tab for status
   - Site updates at https://blog.angelcantugr.dev

## GitHub Actions Workflow

**File**: `.github/workflows/deploy.yml`

**Triggers**:
- Automatic: Push to `main` branch
- Manual: Actions tab → "Deploy to GitHub Pages" → Run workflow

**Process**:
1. Setup Deno 2.x
2. Run `deno task build` (build + search index)
3. Deploy `/dist` to GitHub Pages
4. Live in ~1-2 minutes

**Monitor**: Actions tab shows status (✅/❌)

## Key Configuration

### Frontmatter Schema
All fields required in blog posts (`src/content/blog/*.mdx`):
- `title` - Max 100 chars
- `description` - For SEO/previews
- `date` - YYYY-MM-DD format
- `tags` - Array: `[tag1, tag2]`
- `author` - Author name
- `authorTwitter` - Handle or empty string
- `category` - Usually "blog"
- `image` - Optional cover image

### Site Config
Edit `src/config.ts`:
- `SITE.name` / `SITE.url` / `SITE.description`
- `PAGE_SIZE` - Posts per page (default: 8)
- `listDrafts` - Show drafts (`true`/`false`)

## Troubleshooting

### Build Fails in GitHub Actions

**Check**: Actions tab → failed run → expand logs

**Common causes**:
- Invalid frontmatter (missing required fields)
- Invalid date format (use YYYY-MM-DD)
- Tags not in array format
- Title exceeds 100 characters

**Fix**: Run `deno task build` locally to catch errors before pushing

### Changes Not Showing on Live Site

1. **Verify workflow succeeded**: Actions tab shows green ✅
2. **Clear cache**: Hard refresh (Cmd+Shift+R / Ctrl+Shift+F5)
3. **Check Pages config**: Settings → Pages → Source = "GitHub Actions"
4. **Wait**: CDN may take 2-5 minutes to update

### Search Not Finding New Posts

Search index generated during build. If posts missing:
```bash
deno task build        # Regenerates search-index.json
git add public/search-index.json
git commit -m "Update search index"
git push
```

### Permission Errors

If workflow shows "Resource not accessible":
- Settings → Actions → General
- Workflow permissions → "Read and write permissions"

## Manual Deployment Rollback

If something breaks:
```bash
git log                          # Find bad commit hash
git revert <commit-hash>
git push origin main             # Triggers auto-deploy of revert
```

## Resources

- [README.md](../README.md) - Local dev setup
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Content guidelines
- [Astro Docs](https://docs.astro.build)
- [Deno Docs](https://docs.deno.com)

---

*Last Updated: February 10, 2026*
