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

---

## Ask AI — the portfolio chatbot

The **Ask AI** section (`#ask-ai`) is an LLM-powered assistant that answers questions about Anvi's work, projects, skills, and interests. It's grounded in a knowledge base built from the resume, so it only talks about Anvi.

### How it works

```
Browser (chatbot.js)
   │  POST /.netlify/functions/chat   { messages: [...] }
   ▼
Netlify function (netlify/functions/chat.js)
   │  injects knowledge-base.js into the system prompt
   │  calls Groq (OpenAI-compatible API) with GROQ_API_KEY
   ▼
Groq LLM  →  reply  →  rendered in the chat window
```

The API key lives **only** on the server (the Netlify function), never in the browser. The front-end just talks to `/.netlify/functions/chat`.

### Files

```
netlify/
└── functions/
    ├── chat.js             # serverless function → Groq
    └── knowledge-base.js   # everything the bot knows about Anvi
chatbot.js                  # front-end chat logic
netlify.toml                # Netlify build + functions config
.env.example                # template for the API key
```

### Get a free Groq API key

1. Sign up at https://console.groq.com (no credit card required).
2. Go to **API Keys** → **Create API Key**, and copy it.

Groq's free tier is plenty for a portfolio bot. You only ever pay if you upgrade to a paid plan.

### Run it locally

The chatbot needs the Netlify dev server (a plain `python -m http.server` won't run the function).

```powershell
# 1. Install the Netlify CLI + dev dependencies
npm install

# 2. Add your key
#    Copy .env.example to .env and paste your GROQ_API_KEY
copy .env.example .env

# 3. Start the dev server (serves the site AND the function)
npx netlify dev
```

Then open the URL it prints (usually http://localhost:8888) and try the Ask AI section.

### Deploy on Netlify

1. Push this repo to GitHub (already connected if you cloned it).
2. In Netlify: **Add new site → Import from Git**, pick the repo.
3. Netlify auto-detects `netlify.toml` — no build command needed.
4. **Site settings → Environment variables →** add `GROQ_API_KEY` with your key.
5. Deploy. The Ask AI section goes live with the rest of the site.

> If you change the model, set a `GROQ_MODEL` env var too. Current model IDs: https://console.groq.com/docs/models

### Update what the bot knows

Edit `netlify/functions/knowledge-base.js`. No retraining, no vector database — the text is injected straight into the system prompt on every request. Add a new job, project, or hobby and redeploy.
