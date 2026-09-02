# Portfolio Website

A creative, single-page portfolio site built with plain HTML, CSS, and JavaScript. No build step, no dependencies, no framework. Just open it and it works. Inspired by modern, motion-forward portfolio sites.

## Features

- Animated intro loader with a counter
- Staggered text reveal on the hero
- Custom blend-mode cursor with magnetic buttons
- Scroll-triggered reveal animations (IntersectionObserver)
- Animated stat counters
- Scrolling marquee
- Fully responsive with a mobile menu
- Respects `prefers-reduced-motion` for accessibility

## Files

```
portfolio/
├── index.html    # Structure and content
├── styles.css    # Design, layout, animations
├── script.js     # Interactions (cursor, reveals, counters, nav)
└── README.md
```

## Make it yours

Everything you need to edit lives in `index.html`. Search for these and replace with your details:

1. **Your name** — replace every `Your Name` and the `YN` logo.
2. **Hero headline** — the three `<span class="line">` blocks in the `.hero__title`.
3. **Tagline & bio** — `.hero__sub` and the `.about__text` paragraph.
4. **Stats** — the `data-count` values (years, projects, clients) in the About section.
5. **Projects** — each `.project` block in the Work section. Update titles, descriptions, tags, and the `href`.
6. **Skills** — the four `.skill` cards.
7. **Contact** — your email in `.contact__email` (update both the visible text and the `mailto:` link) and the social links.
8. **SEO** — the `<title>` and `<meta name="description">` in the `<head>`.

### Change the colors

Open `styles.css` and edit the variables at the top:

```css
:root {
  --bg: #0d0d0f;       /* background */
  --fg: #f4f4f2;       /* text */
  --accent: #ff5d3b;   /* primary accent */
  --accent-2: #6c5ce7; /* secondary accent */
}
```

## Preview locally

Just double-click `index.html` to open it in your browser.

For the best experience (some browsers restrict certain features on `file://`), run a tiny local server:

```powershell
# Python 3
python -m http.server 8000
```

Then open http://localhost:8000

## Deploy (free) and share on LinkedIn

Pick any one. All give you a public URL you can paste into your LinkedIn profile (Contact info → Website) or share as a post.

### Netlify Drop (easiest, no account setup)
1. Go to https://app.netlify.com/drop
2. Drag the entire `portfolio` folder onto the page.
3. You get a live URL in seconds.

### GitHub Pages
1. Create a new GitHub repo and push these files.
2. In the repo: Settings → Pages → Source → `main` branch, `/root`.
3. Your site publishes at `https://<username>.github.io/<repo>`.

### Vercel
1. Install the CLI: `npm i -g vercel`
2. Run `vercel` in the project folder and follow the prompts.

## Adding to LinkedIn

- **Featured section:** Add a post or link to your live URL so it shows as a card on your profile.
- **Contact info:** Edit your intro → Contact info → add the site under Website.
- **About section:** Mention the portfolio and paste the link.
