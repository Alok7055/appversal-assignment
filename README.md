# AppVersal CSAT Campaign Builder

A simplified CSAT campaign builder that matches the AppVersal frontend intern assignment.

## Project overview

This application lets users configure a CSAT popup using:
- a **Content** tab for initial feedback, rating behavior, dynamic feedback options, and thank-you page settings
- a **Styling** tab for all visual customization
- a **Live Mobile Preview** that updates instantly with every change

The preview shows both the feedback popup layout and the thank-you page mockup.

## Assignment features implemented

- Content page with:
  - Initial feedback title and subtitle
  - Rating choice: stars or numbers (1–5)
  - Dynamic add/delete options
  - Additional comment toggle
  - Submit button text
  - Thank-you page title, subtitle, button text
  - Media URL support for PNG/JPG/GIF and Lottie JSON
- Styling page with:
  - Background color
  - Title and subtitle colors
  - Button color and button text color
  - Font size and font weight
  - Border radius
  - Button width and height
  - Rating selected and unselected colors
- Live preview updates instantly with controlled React components
- Responsive layout and tabbed configuration panels

## Folder structure

- `src/`
  - `App.tsx` — main app and tab logic
  - `components/`
    - `ContentPanel.tsx` — content configuration
    - `StylePanel.tsx` — styling configuration
    - `PreviewPanel.tsx` — live mobile preview
  - `types.ts` — shared state types
  - `styles.css` — app styling
- `.gitignore` — ignores `node_modules` and build artifacts
- `index.html` — Vite entry point
- `package.json` — dependencies and scripts
- `tsconfig.json` — TypeScript settings
- `vite.config.ts` — Vite configuration

## Setup instructions

1. Install dependencies:

```bash
npm install
```

2. Start the local development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal.

## Build and preview

```bash
npm run build
npm run preview
```

## Deployment

This repo is ready for Vercel, Netlify, Render, or Firebase Hosting.
- Vercel: connect the repo and use default Vite build settings.
- Netlify: publish the `dist` folder.
- Render: `npm install` then `npm run build`.
- Firebase Hosting: deploy the `dist` output.

## Submission checklist

- GitHub Repository: `https://github.com/Alok7055/appversal-assignment`
- Live Demo URL: *add your deployed Vercel/Netlify URL here*
- README.md with setup, tech stack, folder structure, and deployment notes
- Deployment URL

## Notes

- No save button is required: every control updates the preview in real time.
- Content and styling changes are reflected instantly on the mobile preview.
- The app uses tab navigation for the Content and Styling sections.
