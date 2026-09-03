# Education Zone Kashmir — website

Static site for MBBS-in-Bangladesh admissions (55 colleges, fee dashboard, compare tool, eligibility checker, blog).

## Host on GitHub Pages

1. Upload the contents of this folder to the root of the `education-zone-kashmir` repository (keep `.nojekyll` — it stops GitHub from hiding the `_ds/` folder).
2. In the repo: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
3. The site goes live at `https://tanveer-farooq.github.io/education-zone-kashmir/` within a few minutes. `index.html` forwards to `home.dc.html`.

Custom domain: add it under **Settings → Pages → Custom domain** and point the domain's DNS (CNAME → `tanveer-farooq.github.io`).

## Editing content

- College fees and details: `data/colleges.js`
- Blog posts: `data/blog.js`
- Contact details: search for `95601 02100` / `info@educationzonekashmir.com` across the `.dc.html` files
- Photos: drop images onto the dotted frames when the site is opened in the design editor; on the live site, replace them with `<img>` tags or fill the frames before exporting.

## Files

- `*.dc.html` — one file per page (`home`, `colleges`, `college-list`, `college`, `compare`, `eligibility`, `blog`, `post`, `about`, `admission-process`, `why-bangladesh`, `testimonials`, `faq`, `contact`); `site-header` / `site-footer` are shared.
- `support.js` — page runtime; `image-slot.js` — photo frames; `_ds/` — design tokens and components; `data/` — content.
