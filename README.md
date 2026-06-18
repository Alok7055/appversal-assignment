# AppVersal CSAT Campaign Builder

A React + Vite project implementing the AppVersal frontend intern assignment.

## What this project includes

- Content page with:
  - Title and subtitle fields
  - Rating style selector (stars or numbers)
  - Dynamic add/remove feedback options
  - Optional comment toggle
  - Submit button text customization
  - Thank-you page preview with image/media URL support
- Styling page with:
  - Background, title, subtitle, and button colors
  - Button text color
  - Rating selected/unselected colors
  - Font size and font weight
  - Border radius
  - Button width and height
- Live mobile preview updates instantly
- Controlled React components and responsive layout

## Folder structure

- `src/`
  - `App.tsx` — main application logic and layout
  - `components/`
    - `ContentPanel.tsx` — content configuration controls
    - `StylePanel.tsx` — styling controls
    - `PreviewPanel.tsx` — live mobile preview
  - `types.ts` — shared TypeScript types
  - `styles.css` — app styling
- `index.html` — Vite entry point
- `package.json` — dependencies and scripts
- `tsconfig.json` — TypeScript configuration
- `vite.config.ts` — Vite React plugin configuration

## Setup instructions

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

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

This project is ready for deployment to Vercel, Netlify, Render, or Firebase Hosting.

- For Vercel: connect the repository and use the default Vite settings.
- For Netlify: publish the `dist` folder.
- For Render: use `npm install` and `npm run build`.
- For Firebase Hosting: deploy `dist`.

## Notes

- All changes in the left panels update the preview instantly.
- There is no separate save button required.
- The preview renders both the feedback page and thank-you page mockup.
