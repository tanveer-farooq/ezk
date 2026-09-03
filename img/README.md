# Photos

Three slots on the homepage are wired up and hidden. A slot only appears once you
give it a filename, so the live site never shows an empty frame.

## How to add a photo

1. Put the file in this folder, e.g. `img/hero.jpg`.
2. Open `home.dc.html`, find `images = {` near the bottom in the logic class.
3. Fill in the `src` (and adjust the `alt` text to describe the actual photo):

```js
images = {
  hero: { src: 'img/hero.jpg', alt: 'Students outside the college library' },
  faq:  { src: '', alt: '...' },
  cta:  { src: '', alt: '' },
};
```

4. Commit and push. Leave a `src` empty to keep that slot hidden.

## Sizes

| Slot   | Where it appears                  | Ratio | Export at   | Notes |
|--------|-----------------------------------|-------|-------------|-------|
| `hero` | Full-bleed band under the hero    | 24:7  | 2400 x 700  | Very wide crop. Keep the subject centred — the edges get cut on narrow screens. |
| `faq`  | Left column of "Before you call"  | 4:5   | 800 x 1000  | Portrait. Good for an office or counselling photo. |
| `cta`  | Behind the dark "Talk to a counsellor" band | 24:7 | 2400 x 700 | Sits at 30% opacity behind white text, so use something dark and low-contrast. Avoid faces here — they get washed out. |

Save as JPEG, quality ~80, and keep each file under about 300 KB. All three use
`loading="lazy"` and `object-fit:cover`, so they crop rather than stretch.

## Before you use a photo

- Do not caption a generic or stock photo as a specific named college. The site
  names 55 real institutions, and a mismatched campus photo is the kind of thing
  that costs a consultancy its credibility.
- Get written consent from any student or parent who is identifiable.
- If you use free stock, Unsplash and Pexels both permit commercial use. Check the
  licence on the individual photo, not just the site.

## College logos (Top colleges section)

The "Top colleges" section on the homepage shows a logo tile per college. While a
logo is empty the college's initials are shown instead, so the section looks
finished either way.

To add one: save the file here (e.g. `img/logo-eastern.png`), then in
`home.dc.html` find `logos = {` in the logic class and fill in the value:

```js
logos = {
  'dhaka-national-medical-college': 'img/logo-dhaka-national.png',
  'eastern-medical-college': '',
  ...
};
```

The keys are college ids from `data/colleges.js`. Adding or removing a key changes
which colleges appear in the section, and in what order — the fees and names come
from `data/colleges.js`, so they stay correct on their own.

Logo files: square-ish, at least 200x200, transparent PNG or SVG, on no background
(the tile supplies the white). They are drawn with `object-fit:contain`, so nothing
is cropped.

**Before using a college logo:** these are the institutions' trademarks. Using them
to identify a college you genuinely place students at is normally fine, but it
should not imply the college endorses or is affiliated with Education Zone Kashmir.
If a college asks you to stop using its mark, remove it. Never draw or approximate
a logo you do not have — an invented crest for a real institution is the kind of
thing that ends a consultancy's credibility.
