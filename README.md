# amrit1426.github.io

Personal portfolio site for **Amrit Pratim Baruah** — Data Analyst (SQL · Python · Power BI · Machine Learning), built as static HTML/CSS/JS for GitHub Pages. No build step, no frameworks — push to `main` and it's live.

Live at: `https://amrit1426.github.io/`

## Structure

```
index.html      → all page markup and section content
style.css       → design tokens, layout, components, animations
script.js       → navigation, scroll reveals, counters, typing effect, project rendering
projects.js     → the ONLY file you edit to add/remove a project
assets/images/  → project screenshots, favicon, and social preview image
```

## Adding a new project (no HTML editing required)

`index.html` renders one card per entry in `projects.js` automatically. To add a project:

1. Open `projects.js`.
2. Copy one of the existing objects in the `projects` array and fill in your own details:

   ```js
   {
     title: "Your Project Title",
     tag: "Category · Tech Focus",
     description: "One paragraph describing the problem, method, and outcome.",
     tech: ["Python", "SQL"],
     github: "https://github.com/amrit1426/your-repo",
     dashboard: "https://your-live-app.streamlit.app/", // leave "" if none
     image: "assets/images/your-screenshot.png",
     featured: true
   }
   ```
3. Drop the matching screenshot into `assets/images/`.
4. Save, commit, and push. The new card appears on the site automatically — no changes to `index.html` are needed.

## Required image assets

These are referenced by the site but are **not included** — add real screenshots/graphics for a finished look:

| File | Used for |
|---|---|
| `assets/images/favicon.png` | Browser tab icon |
| `assets/images/og-cover.png` | Social share preview (Open Graph / Twitter) |
| `assets/images/project-late-delivery.png` | Late Delivery Risk Prediction card |
| `assets/images/project-profitability.png` | Product Line Profitability card |
| `assets/images/project-job-market.png` | Global Job Market Analysis card |
| `assets/images/project-electricity.png` | Electricity Load Intelligence card |

If an image file is missing, the card gracefully falls back to a placeholder pattern instead of breaking.

## Local preview

No build tools needed. From this folder, run any static server, e.g.:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploying

1. Push this repository to `amrit1426/amrit1426.github.io`.
2. In **Settings → Pages**, set the source branch to `main` (root).
3. The site publishes at `https://amrit1426.github.io/` within a few minutes.

Make sure `Amrit_Pratim_Baruah_Data_Analyst_Resume.pdf` sits at the repository root — the "Download Resume" buttons link to it directly.
