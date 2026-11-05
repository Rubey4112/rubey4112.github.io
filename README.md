# Toan Do

Portfolio for Toan Do, a junior electrical engineering student at George Mason University. The site is a [SvelteKit](https://svelte.dev/docs/kit) app using [Svelte 5](https://svelte.dev/docs/svelte) runes, prerendered with `@sveltejs/adapter-static` for GitHub Pages.

The visual theme is an editorial layout: warm paper background, serif headlines, and an orange-red accent. Copy and project facts match the Fall 2026 résumé already published on `main`.

## Preview locally

```bash
npm install
npm run dev
```

The dev server prints a local URL. Production output:

```bash
npm run build
npm run preview
```

`npm run check` typechecks the project. `npm run lint` checks formatting.

## GitHub Pages

This repository is the user site `https://rubey4112.github.io/`, so the app is built with base path `/`.

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds the site and deploys the `build/` directory with GitHub Actions. Source stays in the repository. The prerendered files are not committed.

After this change is merged, set the repository Pages source once:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The next push to `main` (or a manual run of **Deploy to GitHub Pages**) publishes the site. The workflow reads `base_path` from `actions/configure-pages`, which is empty for this user site.

## Content

Profile and project photos live in `static/media/` and are copied into the build as `/media/...`.

Edit structured content in:

- `src/lib/data/site.ts` — name, contact, focus areas
- `src/lib/data/experience.ts` — roles
- `src/lib/data/projects.ts` — project blurbs, dates, images, and repository links

The short link list is at `/links/` (previously `links.html`).

Dark mode is stored in `localStorage` under `theme`.

## Follow-ups

- Project cards link to their repositories when one exists. There are no per-project pages yet.
- `links.html` is now `/links/`. Add a redirect only if an old public URL needs to keep working.
