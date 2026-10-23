# Tenzin Gyaltsen — personal site

Academic portfolio at [gyaltsentenzin.github.io](https://gyaltsentenzin.github.io/), built with Hugo.

Visual design adapted from [David Baek](https://dbaek.org/) / [david-baek/dbaek](https://github.com/david-baek/dbaek) (originally [Jay Wang](https://zijie.wang/)).

## Edit content

| What | Where |
|------|--------|
| Homepage intro, News, footer | `layouts/landing/index.html` |
| Featured projects | `data/publications.json` |
| Project thumbnails | `static/images/publications/` |
| CV PDF | replace `static/uploads/resume.pdf` |
| Profile photo | `content/authors/admin/avatar.png` |
| Site title / baseURL | `config/_default/hugo.yaml` |
| Nav links | `config/_default/menus.yaml` |
| Author profile metadata | `content/authors/admin/_index.md` |

Featured project fields in `publications.json`: `title`, `authors` (Markdown; use `**bold**` for your name), `venue`, `summary`, `paper_url` / `code_url` / `x_url` (empty string hides the link), `image`, `image_alt`, optional `award` / `bibtex`.

## Local preview

Use Hugo **extended 0.136.5** (matches `.github/workflows/publish.yaml`) and Go for Hugo modules. Newer Homebrew Hugo can break the pinned HugoBlox modules — prefer the release binary:

```sh
# optional: download matching binary once
mkdir -p .tools && cd .tools
curl -fsSL -o hugo.tar.gz \
  https://github.com/gohugoio/hugo/releases/download/v0.136.5/hugo_extended_0.136.5_darwin-universal.tar.gz
tar -xzf hugo.tar.gz hugo && mv hugo hugo-0.136.5 && rm hugo.tar.gz && cd ..

./.tools/hugo-0.136.5 server
# Production check without writing to tracked paths:
./.tools/hugo-0.136.5 --minify --destination /tmp/tenzin-site-preview
```

## Deploy (GitHub Pages only)

Pushes to `main` run `.github/workflows/publish.yaml` (Hugo build → GitHub Pages). No Netlify config.

**One-time setup:** in the GitHub repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions** (not “Deploy from a branch”). The old static `index.html` workflow no longer applies.
