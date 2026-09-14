# Sankalp Public School — Frontend Website

A high-fidelity, compact, responsive React 19 + TypeScript application reproducing the Sankalp Public School homepage design and demonstration flows, built with Vite, Tailwind CSS v4, Motion for React, and Lucide React.

---

## Getting Started

### Prerequisites
- Node.js (v20+ or v22+ recommended)
- npm

### Installation & Commands
```bash
# Install dependencies
npm install

# Start local development server (runs on http://localhost:5173/)
npm run dev

# Build production bundle with TypeScript type-checking
npm run build

# Preview the production build locally
npm run preview
```

---

## Where to Change Text & Assets

- **All School Copy, Stats, Navigation, Events & News**:
  Modify [src/data/school.ts](file:///d:/getItUse/Benni/sankalp%20college%20website/src/data/school.ts).
- **Design Tokens (Colors, Dimensions, Radii)**:
  Modify [src/styles/tokens.css](file:///d:/getItUse/Benni/sankalp%20college%20website/src/styles/tokens.css).
- **Local Photographic & Graphic Assets**:
  Stored in [public/images/](file:///d:/getItUse/Benni/sankalp%20college%20website/public/images/):
  - `school-crest.png`: School seal
  - `hero-students.webp`: Four students in uniform
  - `academic-lab.webp`: Science laboratory students
  - `student-basketball.webp`: Outdoor sports court
  - `campus.webp`: Campus building & grounds
  - `parent-priya.webp`: Parent testimonial portrait
  - `news-science.webp`: Science fair news image
  - `news-green-campus.webp`: Tree plantation news image
  - `news-toppers.webp`: Academic toppers news image
- **Asset Registry & Metadata**:
  Documented in [src/data/assets.ts](file:///d:/getItUse/Benni/sankalp%20college%20website/src/data/assets.ts) and [ASSETS.md](file:///d:/getItUse/Benni/sankalp%20college%20website/ASSETS.md).

---

## Local Demo Interactions (Prompt 6)

All interactive controls use an in-memory native HTML `<dialog>` system:
1. **Online Admission Application**: Click *"Apply for Admission"* or *"Online Admission"* to view the form with validation and demo submission preview.
2. **Campus Tour Booking**: Click *"Book a Campus Visit"* to select visit dates and time slots.
3. **Parent Portal & Login**: Click *"Parent Login"* or *"Parent Portal"* to view login and access the fictional student dashboard (attendance, grades, timetable).
4. **Fee Payment Preview**: Click *"Fee Payment"* to inspect the quarterly fee schedule and demo receipt.
5. **Bus Route Simulation**: Click *"Bus Tracking"* to view an interactive SVG route with transit stops, moving marker, and live ETA.
6. **Global Search**: Click the search icon in the header to search across school pillars, events, and news articles in real time.
7. **Campus Facility Lightbox**: Click *"Take a Virtual Tour"* on the campus card to browse high-resolution facility photos.
8. **Event & News Overlays**: Click on any event or news card for expanded details.

---

## Motion Control & Testing (?motion=off)

- **Default Motion**: Gentle staggered entrances and subtle hover lifts powered by `motion/react`.
- **Disable Motion**: Append `?motion=off` to the URL (e.g. `http://localhost:5173/?motion=off`) to immediately disable all animations, transitions, and smooth scrolling for instant visual comparison and screenshot testing.
- **Accessibility**: Automatically respects system `prefers-reduced-motion: reduce`.

---

## Asset & Font Notes

- **Serif Typography**: Configured with `Georgia`, `Merriweather`, and system serif fallbacks.
- **Sans-Serif Typography**: Configured with `Inter` and system sans-serif font stack.
- **Photographic Assets**: All 9 photorealistic and graphic assets have been generated to match the exact composition and subjects specified in the prompt checklist.
