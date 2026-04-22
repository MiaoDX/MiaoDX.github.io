# miaodx.com

Source for [miaodx.com](https://miaodx.com), served as a GitHub Pages site from
this repository (CNAME → `miaodx.com`, Jekyll disabled via `.nojekyll`).

The site is a single-page React app at `/` with two visual directions
(`editorial` / `terminal`) and a ZH/EN toggle. Content lives in `content.js`;
layouts in `editorial.jsx` and `terminal.jsx`.

## Layout

```
.
├── index.html              # Entry
├── content.js              # Copy + links (ZH/EN)
├── editorial.jsx           # Editorial layout
├── terminal.jsx            # Terminal layout
│
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

## Note on LIP

The [LIP (Learn In Public)](https://miaodx.com/LIP/) VitePress site used to
publish its build output into this repository, which repeatedly clobbered the
personal homepage. LIP content has been removed from this repo and should be
deployed from its own source. A few outbound links in `content.js` still point
at `https://miaodx.com/LIP/...`; they will resolve once LIP is redeployed.
