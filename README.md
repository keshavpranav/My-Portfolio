# Keshav Pranav K P — Cloud Engineer Portfolio

A production-quality portfolio site built with **React + Vite**, positioning Keshav Pranav K P
as a Cloud Engineer (AWS, Docker, Linux, Python, DevOps) for recruiters, placement teams and
technical interviewers.

This README is a complete, beginner-friendly guide — it assumes no prior experience with Node,
Git or deployment. Work through it in order.

---

## 1. Install Node.js

1. Go to [nodejs.org](https://nodejs.org) and download the **LTS** version for your OS.
2. Run the installer, accepting the defaults.
3. Restart your terminal (close and reopen it) if it was already open.
4. Verify the install:

   ```bash
   node -v
   npm -v
   ```

   Success looks like two version numbers printing, e.g. `v20.x.x` and `10.x.x`. If you see
   "command not found", the install didn't complete — re-run the installer and restart your
   computer.

## 2. Extract the project

1. If you received this as a `.zip`, right-click it → **Extract All** (Windows) or double-click
   it (Mac).
2. Open the extracted folder. You should see a file called `package.json` directly inside it —
   that confirms you're in the right folder (this is the project root; run all commands below
   from here).

## 3. Open the project in VS Code

1. Install [VS Code](https://code.visualstudio.com) if you don't have it.
2. Open VS Code → **File → Open Folder** → select the project folder.
3. Open a terminal inside VS Code: **Terminal → New Terminal**. All commands below run in this
   terminal.

## 4. Install dependencies

```bash
npm install
```

This downloads the packages the project depends on (React, Vite, the icon library) into a
`node_modules` folder. It can take a minute. If it fails:
- Make sure you're connected to the internet.
- Delete any `node_modules` folder and `package-lock.json` and try again.
- Make sure `node -v` shows 18 or newer.

## 5. Run the site locally

```bash
npm run dev
```

Vite will print a local URL, typically:

```
http://localhost:5173
```

Open that in your browser. Changes you save in the code will reload automatically.

---

## 6. Add your resume

Place your actual resume PDF at:

```
public/resume.pdf
```

That's it — every "Resume" button on the site already links to `/resume.pdf`. You can then
delete `public/RESUME_INSTRUCTIONS.txt`.

## 7. Update your personal info in one place

Open `src/data/siteConfig.js`. This is the single source of truth for your identity:

```js
const siteConfig = {
  name: "Keshav Pranav K P",
  email: "YOUR_EMAIL",
  linkedin: "https://www.linkedin.com/in/keshavpranav/",
  github: "YOUR_GITHUB_URL",
  resume: "/resume.pdf",
  ...
};
```

Replace `YOUR_EMAIL` and `YOUR_GITHUB_URL` with your real values. Every component (nav, hero,
footer, contact) reads from here, so this one edit updates the whole site.

## 8. Add GitHub links per project

Each project can link to a different repository, so those live in
`src/data/projects.js` (and the featured project at the top of the same file). Find a project
and replace:

```js
github: "YOUR_GITHUB_URL",
```

with your real repo link. Until you do, the button shows "Add GitHub link" and stays disabled
rather than pointing anywhere fake.

## 9. Add project screenshots (optional)

If you want to show real screenshots instead of the current text-only cards:

1. Put image files in `src/assets/projects/`.
2. Import and use them inside `src/components/ProjectCard.jsx` /
   `src/components/FeaturedProject.jsx`, e.g.:

   ```js
   import shot from "../assets/projects/movie-ticket-booking.png";
   // then: <img src={shot} alt="Movie Ticket Booking System screenshot" />
   ```

This is left as a manual step deliberately — you should only add screenshots you actually have.

## 10. Add certificate files (optional)

Same pattern: put files in `src/assets/certificates/`, and update the `url` field per entry in
`src/data/certifications.js` — either to an imported local image/PDF, or to a real hosted
verification link. Replace `YOUR_CERTIFICATE_URL` per certificate; until you do, that button
stays disabled instead of pointing anywhere fake.

## 11. Change colors / theme

All design tokens live at the top of `src/index.css`, under `:root` (dark theme) and
`[data-theme="light"]` (light theme) — background, text, accent color, borders, etc. Change a
value there and it updates everywhere that token is used.

## 12. Change content

Everything else content-wise lives in `src/data/`:

| File                    | Controls                          |
|--------------------------|------------------------------------|
| `siteConfig.js`          | Name, links, resume path           |
| `experience.js`          | Internship / work experience       |
| `skills.js`              | Skill groups + summary cards       |
| `cloudServices.js`       | AWS services + architecture diagram|
| `projects.js`            | Featured + all other projects      |
| `certifications.js`      | Certification timeline             |

Edit these directly — no need to touch component code for text changes.

---

## 13. Test everything (checklist)

**Navigation** — Home, About, Skills, Experience, Projects, Cloud, Certifications, Education,
Contact all scroll to the right section.

**Buttons** — Resume downloads/opens once you've added the PDF; LinkedIn opens your profile;
GitHub and Email work once configured.

**Projects** — filtering (All / Cloud / Web / Software / AI/ML) switches the visible cards; any
GitHub links you've added open correctly.

**Mobile** (resize to ~375px or use dev tools device mode) — hamburger menu opens/closes, no
horizontal scrolling on the page, cards resize correctly.

**Theme** — the sun/moon icon in the nav switches dark ↔ light and the choice persists on
reload.

## 14. Production build

```bash
npm run build
```

This creates an optimized `dist/` folder — the actual files you deploy. Preview it locally
exactly as it will appear in production:

```bash
npm run preview
```

---

## 15. Deploy — Vercel (recommended)

1. Push the project to GitHub first (see step 16 below).
2. Create a free account at [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project**, then select your repository.
4. Vercel auto-detects Vite. Leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**. In under a minute you'll get a live URL like
   `your-portfolio.vercel.app`.
6. Every future `git push` to your main branch redeploys automatically.

## Deploy — Netlify (alternative)

1. Create a free account at [netlify.com](https://netlify.com).
2. **Add new site → Import an existing project** → connect GitHub → select your repo.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Click **Deploy site**.

---

## 16. Push the project to GitHub

If you're new to Git:

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. On GitHub, click **New repository**, name it (e.g. `portfolio`), leave it empty (no README),
   and copy the URL it gives you.
3. In your project's terminal:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPOSITORY_URL
   git push -u origin main
   ```

   What each line does:
   - `git init` — turns this folder into a Git project.
   - `git add .` — stages every file to be committed.
   - `git commit -m "..."` — saves a snapshot with that message.
   - `git branch -M main` — names your main branch `main`.
   - `git remote add origin ...` — points your local project at the GitHub repo you created.
   - `git push -u origin main` — uploads everything to GitHub.

## 17. Updating the site after deployment

The normal workflow going forward:

1. Edit content (usually in `src/data/`).
2. Save, check it locally with `npm run dev`.
3. `npm run build` to confirm it builds cleanly.
4. `git add . && git commit -m "Update projects"`.
5. `git push`.
6. Vercel/Netlify redeploys automatically within a minute or two.

## 18. Custom domain (optional)

Both Vercel and Netlify let you attach a custom domain from their dashboard's **Domains**
settings once you own one — this isn't required to have a working, shareable portfolio URL.

---

## 19. Final placement checklist

**Professional identity**
- [ ] Cloud Engineer title is clear in the hero
- [ ] AWS is prominent (Cloud Engineering section, internship, featured project)
- [ ] Internship is visible
- [ ] Projects are visible

**Technical credibility**
- [ ] AWS project featured
- [ ] Docker, Linux, Python represented in skills
- [ ] Backend and database work represented

**Recruiter experience**
- [ ] Resume downloadable (after you add `public/resume.pdf`)
- [ ] LinkedIn accessible
- [ ] GitHub accessible (after you add your URL in `siteConfig.js`)
- [ ] Contact info visible
- [ ] Mobile responsive

**Technical quality**
- [ ] No console errors (`npm run build` completes cleanly)
- [ ] No broken links
- [ ] No horizontal scrolling
- [ ] SEO metadata present (already set in `index.html`)

---

## Project structure

```
src/
├── assets/
│   ├── projects/         ← add project screenshots here
│   └── certificates/      ← add certificate files here
├── components/            ← reusable UI pieces (Navbar, cards, diagrams, footer)
├── sections/               ← one file per page section (Hero, About, Skills, ...)
├── data/                    ← all editable content lives here
│   ├── siteConfig.js
│   ├── projects.js
│   ├── skills.js
│   ├── certifications.js
│   ├── experience.js
│   └── cloudServices.js
├── hooks/useReveal.js
├── ThemeContext.jsx
├── App.jsx
├── main.jsx
└── index.css                ← design tokens (colors, type, spacing) + base styles

public/
└── resume.pdf                ← add this yourself
```

## Notes on what's real vs. placeholder

Per the "no fake information" requirement this was built to, the following are intentionally
left as editable placeholders rather than invented:

- `YOUR_EMAIL` in `siteConfig.js`
- `YOUR_GITHUB_URL` in `siteConfig.js` (profile) and in each project's `github` field in
  `projects.js`
- `YOUR_CERTIFICATE_URL` per entry in `certifications.js`
- `public/resume.pdf` (not included — add your own file)

Everything else (name, LinkedIn, education, internship, project descriptions, certification
list, dates) reflects what was provided, without added metrics, testimonials or achievements
that weren't specified.
