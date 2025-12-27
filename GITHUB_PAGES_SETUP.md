# GitHub Pages Setup Instructions

After merging this PR, follow these steps to enable GitHub Pages:

## 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (in the repository menu)
3. Scroll down and click on **Pages** (in the left sidebar under "Code and automation")

## 2. Configure Build and Deployment

Under "Build and deployment":
- **Source**: Select "GitHub Actions" from the dropdown
  - This allows the workflow to deploy automatically
  
That's it! The `.github/workflows/deploy.yml` workflow will handle everything else.

## 3. Trigger the First Deployment

Once you've configured GitHub Pages:
- Merge this PR to the `main` branch, OR
- Make any push to the `main` branch, OR
- Go to **Actions** tab and manually run the "Deploy to GitHub Pages" workflow

## 4. View Your Blog

After the workflow completes (usually 1-2 minutes):
- Your blog will be live at: `https://angelcantugr.github.io/works-on-my-machine`
- You can find the exact URL in the workflow run output

## Automatic Deployments

From now on, every time you push to `main`, the blog will automatically:
1. Build using Astro
2. Run checks and tests
3. Deploy to GitHub Pages

## Troubleshooting

If you don't see the "GitHub Actions" option in the Pages settings:
1. Make sure the workflow file exists in `.github/workflows/deploy.yml`
2. Ensure you have admin permissions on the repository
3. Check that GitHub Actions are enabled for your repository

## Adding Content

To add new blog posts:
1. Create `.md` or `.mdx` files in `src/content/docs/guides/` or `src/content/docs/reference/`
2. Add frontmatter with `title` and `description`
3. Push to `main` branch
4. The blog will automatically update!
