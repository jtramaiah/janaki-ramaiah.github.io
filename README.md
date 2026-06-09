# Terminal Portfolio — Janakiram

A terminal-styled developer portfolio with a green-on-black Matrix aesthetic, boot sequence animation, and interactive command line.

## File Structure

```
portfolio/
├── index.html          ← entry point
├── css/
│   ├── terminal.css    ← base terminal styles, variables, layout
│   └── sections.css    ← per-section styles (about, exp, skills, projects, blog)
├── js/
│   ├── boot.js         ← kernel boot sequence animation
│   ├── sections.js     ← all section HTML content (edit this to customise)
│   └── terminal.js     ← navigation + command-line interaction
└── README.md
```

## Customisation

**All your personal content lives in `js/sections.js`** — update:
- `about` — name, links, bio text
- `experience` — job history
- `skills` — skill names and percentages
- `projects` — project cards
- `blog` — article titles/excerpts

## Hosting on GitHub Pages

1. Create a repo named `<yourusername>.github.io`
2. Copy all files into the repo root (keep the `css/` and `js/` folders)
3. Push to `main`
4. GitHub Pages will serve `index.html` automatically at `https://<yourusername>.github.io`

## Terminal Commands

Type in the input bar at the bottom:

| Command | Action |
|---|---|
| `help` | list all commands |
| `about` / `experience` / `skills` / `projects` / `blog` | navigate sections |
| `whoami` | print user info |
| `uname -a` | fake kernel info |
| `ls` | list sections |
| `cat contact.txt` | show contact info |
| `clear` | clear current section output |
| `date` | current date/time |
