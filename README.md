# GeoLeaf Web

A web showcase for **GeoLeaf**, a GIS-based Android mobile app for geographical mapping using a mobile device camera and cellular GPS. This site presents the app and its features — it is not a data dashboard or live viewer.

## Getting Started

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Build for production:

```
npm run build
```

## Tech Stack

- React
- TypeScript
- Vite

## Project Structure

```
src/
  components/
    Navbar.tsx        - top navigation bar
    Hero.tsx           - intro section with title and call-to-action buttons
    PhonePreview.tsx    - placeholder for an app screenshot
    Features.tsx        - feature highlights (camera, GPS, maps, storage, etc.)
    HowItWorks.tsx       - 3-step process explanation
  App.tsx              - assembles all sections into the page
  App.css               - page styling
```

## Notes

- The "Plant recognition" feature is still pending a feasibility study and may need confirmation before being finalized.
- Replace the placeholder in `PhonePreview.tsx` with an actual screenshot of the Android app once available.
