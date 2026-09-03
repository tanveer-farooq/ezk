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
