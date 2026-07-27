# miaodx.com

Source for [miaodx.com](https://miaodx.com), served as a GitHub Pages site from
this repository (CNAME → `miaodx.com`, Jekyll disabled via `.nojekyll`).

The site is a single-page React app at `/` with an editorial layout and a ZH/EN
toggle. Content lives in `content.js`; the layout lives in `editorial.jsx`.

## Layout

```
.
├── index.html              # Entry
├── content.js              # Copy + links (ZH/EN)
├── editorial.jsx           # Editorial layout
│
├── resume/                 # Chinese resume page + PDF
├── images/                 # Portrait, events, misc
├── share/                  # Standalone pages + QR/meetup assets linked
│                           #   from the homepage
│
├── CNAME                   # miaodx.com
└── .nojekyll               # Skip GitHub Pages Jekyll build
```

## Local preview

Any static file server works. For example:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`. The workflow stages the
repository root as a static site, preserves `CNAME` and `.nojekyll`, excludes
repository metadata and workflow files, and deploys the artifact through GitHub
Pages.

## Note on LIP

The [LIP (Learn In Public)](https://miaodx.com/LIP/) VitePress site used to
publish its build output into this repository, which repeatedly clobbered the
personal homepage. LIP content has been removed from this repo and should be
deployed from its own source. Outbound links in `content.js` may still point to
`https://miaodx.com/LIP/...`; keep that content owned by the LIP source repo
rather than rebuilding it here.
