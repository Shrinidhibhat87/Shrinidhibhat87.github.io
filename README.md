# Shrinidhi Bhat — Portfolio Website

Personal portfolio site built with **React + Vite** and **Tailwind CSS**, deployed on **GitHub Pages** at [shrinidhibhat87.github.io](https://shrinidhibhat87.github.io).

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Running Locally (First Time)](#running-locally-first-time)
4. [Running Locally (Returning / New Machine)](#running-locally-returning--new-machine)
5. [Updating Content](#updating-content)
6. [Deploying to GitHub Pages](#deploying-to-github-pages)
7. [Adding New Sections](#adding-new-sections)
8. [Design Reference](#design-reference)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI component framework |
| [Vite](https://vitejs.dev/) | Fast development server and production bundler |
| [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first CSS styling |
| [react-icons](https://react-icons.github.io/react-icons/) | Icon library (FaGithub, FaLinkedin, etc.) |
| [gh-pages](https://github.com/tschaub/gh-pages) | One-command deployment to GitHub Pages |
| npm | Package manager (Node.js) |

---

## Project Structure

```
sb_portfolio/
│
├── public/                    # Static files served as-is (not processed by Vite)
│   ├── assets/
│   │   ├── profile.jpg        # Your photo (used in About section)
│   │   ├── project-3dbbox.png
│   │   ├── project-thesis.png
│   │   └── project-vo.png
│   └── favicon.svg            # Browser tab icon
│
├── src/
│   ├── main.jsx               # React entry point — mounts <App /> into index.html
│   ├── App.jsx                # Root component — assembles all sections in order
│   │
│   ├── components/            # One file per page section
│   │   ├── Navbar.jsx         # Sticky top nav with scroll-spy
│   │   ├── Hero.jsx           # Landing section with neural-net canvas background
│   │   ├── About.jsx          # About Me — photo + bio
│   │   ├── Experience.jsx     # Work timeline
│   │   ├── Projects.jsx       # Project cards grid
│   │   ├── Skills.jsx         # Tech stack badge grid
│   │   ├── Education.jsx      # Education cards
│   │   ├── Certifications.jsx # Certification cards
│   │   ├── Articles.jsx       # Article cards
│   │   ├── Contact.jsx        # Contact icons
│   │   └── Footer.jsx         # Minimal footer
│   │
│   ├── hooks/
│   │   └── useIntersection.js # Scroll-reveal animation hook (IntersectionObserver)
│   │
│   ├── data/                  # ★ EDIT THESE FILES TO UPDATE CONTENT ★
│   │   ├── experience.js      # Work experience entries
│   │   ├── projects.js        # Project entries
│   │   ├── skills.js          # Skills by category
│   │   ├── education.js       # Education entries
│   │   ├── certifications.js  # Certification entries
│   │   └── articles.js        # Article entries
│   │
│   └── styles/
│       └── index.css          # Tailwind directives + global styles + animation classes
│
├── index.html                 # HTML shell — Google Fonts, meta tags, <div id="root">
├── vite.config.js             # Vite configuration (base path for GitHub Pages)
├── tailwind.config.js         # Tailwind theme (custom colors, fonts, shadows)
├── postcss.config.js          # PostCSS config (required by Tailwind v3)
├── package.json               # npm scripts and dependencies
└── README.md                  # This file
```

> **Rule of thumb:** To update *content* (bio, jobs, projects, skills), only edit files in `src/data/`. To update *styling or layout*, edit the component in `src/components/`.

---

## Running Locally (First Time)

These steps are for a fresh machine that has never run this project.

### Step 1 — Install Node.js via nvm (Linux / WSL)

> **Why nvm?** It installs Node.js locally in your home directory, isolating it from system packages and making version switching easy. Unlike Python, Node/npm projects don't need a separate "virtual environment" — `npm install` already installs all packages locally into the project's `node_modules/` folder.

```bash
# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash

# Reload your shell so nvm is available
source ~/.bashrc

# If you see a conflict about .npmrc prefix, run this once to fix it:
# nvm use --delete-prefix v24.14.1

# Install the latest LTS version of Node
nvm install --lts
nvm use --lts

# Verify
node --version   # should print v22.x.x or v24.x.x
npm --version    # should print 10.x.x or 11.x.x
```

> **WSL note:** If `node` or `npm` still resolve to Windows paths after the above steps, prepend the nvm bin directory to your PATH:
> ```bash
> export PATH="$HOME/.nvm/versions/node/$(node --version)/bin:$PATH"
> ```
> Add this line to your `~/.bashrc` to make it permanent.

### Step 2 — Clone the repo and install dependencies

```bash
git clone https://github.com/Shrinidhibhat87/Shrinidhibhat87.github.io.git
cd Shrinidhibhat87.github.io

# Install all packages listed in package.json into node_modules/
# This is the equivalent of "pip install -r requirements.txt" in Python
npm install
```

### Step 3 — Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The page hot-reloads instantly when you save any file — no manual refresh needed.

---

## Running Locally (Returning / New Machine)

If you've already done the first-time setup and just want to run the site:

```bash
# Activate the Node version (if not already active in your shell)
nvm use --lts

# If node_modules/ doesn't exist (e.g. fresh clone), reinstall packages
npm install

# Start the dev server
npm run dev
```

---

## Updating Content

All content lives in `src/data/` as plain JavaScript files. No React knowledge needed to update them — just edit the data and the site updates automatically.

### Update work experience

Open `src/data/experience.js` and edit the `experiences` array. Each entry looks like:

```js
{
  title: "Your Job Title",
  company: "Company Name",
  location: "City, Country",
  period: "MM/YYYY – MM/YYYY",
  topic: "One-line project/focus description",
  techStack: ["Python", "Docker", "..."],
  points: [
    "Bullet point one.",
    "Bullet point two.",
  ],
},
```

Add a new entry at the **top** of the array to keep newest-first ordering.

### Update projects

Open `src/data/projects.js`. Each entry:

```js
{
  title: "Project Name",
  description: "One or two sentence summary.",
  image: "/assets/your-image.png",  // or null for placeholder
  github: "https://github.com/...",
  techStack: ["Python", "PyTorch"],
  points: ["Key achievement 1.", "Key achievement 2."],
},
```

To add a project image, copy your image file into `public/assets/` and set `image: "/assets/filename.png"`.

### Update skills

Open `src/data/skills.js`. Add to an existing category or add a new one:

```js
{ category: "New Category", skills: ["Skill A", "Skill B"] },
```

### Add a certification

Open `src/data/certifications.js`. Change `status` from `"in-progress"` to `"achieved"` and fill in the `year`. Or add a new entry:

```js
{
  name: "Certification Name",
  issuer: "Issuing Body",
  year: "2026",
  status: "achieved",
},
```

### Update About Me bio

Open `src/components/About.jsx` and edit the `BIO_POINTS` array near the top of the file.

### Replace your photo

Drop a new image into `public/assets/` and update the `src` attribute in `src/components/About.jsx`:

```jsx
<img src="/assets/your-new-photo.jpg" alt="Your name" ... />
```

---

## Deploying to GitHub Pages

### Prerequisites

- Your GitHub repo must be named `Shrinidhibhat87.github.io` (it is a **user page**, not a project page).
- GitHub Pages must be set to serve from the `gh-pages` branch (Settings → Pages → Source).

### Deploy

```bash
npm run deploy
```

This command:
1. Runs `npm run build` — compiles everything into the `dist/` folder
2. Runs `gh-pages -d dist` — pushes the `dist/` contents to the `gh-pages` branch on GitHub
3. GitHub Pages automatically serves the new content within ~60 seconds

> The `main` branch always contains the **source code**. The `gh-pages` branch contains the compiled/minified output. You never need to manually touch the `gh-pages` branch.

### Build only (no deploy)

```bash
npm run build
# Output is in dist/
npm run preview  # Serves dist/ locally to check the production build
```

---

## Adding New Sections

1. **Create the data file** (if needed): `src/data/yourSection.js`
2. **Create the component**: `src/components/YourSection.jsx`
   Copy an existing simple component (e.g. `Education.jsx`) as a starting point.
3. **Import and add to App.jsx**:
   ```jsx
   import YourSection from './components/YourSection.jsx';
   // ...
   <section id="your-section">
     <YourSection />
   </section>
   ```
4. **Add the nav link** in `src/components/Navbar.jsx`, inside the `NAV_LINKS` array:
   ```js
   { label: 'Your Section', id: 'your-section' },
   ```

---

## Design Reference

| Property | Value |
|----------|-------|
| Background | `#0d1117` |
| Card surface | `#161b22` |
| Accent (teal) | `#2dd4bf` |
| Primary text | `#e6edf3` |
| Muted text | `#8b949e` |
| Body font | Inter (Google Fonts) |
| Code/badge font | JetBrains Mono (Google Fonts) |

Animations use the browser's native `IntersectionObserver` API (no animation library). The neural-network background is pure HTML5 Canvas — no external dependency.

---

*Built with React & Tailwind CSS · Deployed on GitHub Pages*
