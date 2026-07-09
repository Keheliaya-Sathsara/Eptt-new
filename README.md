# EPTT — Executive Premium Transport & Travels

Single-page marketing site for EPTT, a luxury chauffeur company in Colombo, Sri Lanka. Built with Angular 17 standalone components, hand-rolled SCSS (no UI library), and `@angular/animations`.

## Running it

```bash
npm install
npm start        # ng serve — http://localhost:4200
```

Production build:

```bash
npm run build     # outputs to dist/eptt-new
```

## Project structure

```
src/
  styles/
    _variables.scss        # brand color tokens, spacing, breakpoints, motion easing
    _mixins.scss            # gold-pill header, grey rail, gold-frame, buttons, focus ring
  app/
    core/
      animations/animations.ts        # fadeSlideUp, staggerChildren, pillReveal, circlePop,
                                       # goldSweep, cardLift, imageDrift, counterFade
      directives/appear-on-scroll.directive.ts   # IntersectionObserver → (appear) once
      utils/reduced-motion.ts         # prefers-reduced-motion helpers
    shared/
      section-header/                 # the reusable gold pill + black circle header
    layout/
      header/                         # sticky nav, transparent → solid on scroll
    sections/
      hero/
      stats/  (+ stat-item/)          # count-up numerals, staggered offset layout
      story/
      capabilities/                   # "Back End of the Business" cards
      transfers-tours/                # airport transfer promise + tour tabs
      why-choose-us/
      fleet/  (+ fleet-card/)         # hover tilt / lift / gold underline sweep
      clientele/                      # greyscale → color logo wall
      contact/                        # reactive form + footer, aria-live success state
    app.component.*                   # composes every section in order
    app.config.ts                     # provideRouter + provideAnimations
```

## Swapping in real brochure assets

All imagery under `src/assets/images/` is a generated placeholder (SVG, brand-toned, labeled) so the layout can be reviewed before real photography and client logos are ready. Regenerate them at any time with:

```bash
node scripts/gen-placeholders.js
```

To go live, replace each file **in place** with a real asset of the same name (JPG/PNG/WebP is fine — just update the `src` extension in the relevant template if it changes):

| File | Used in | Real asset needed |
|---|---|---|
| `hero-chauffeur.svg` | Hero | Chauffeur beside a Mercedes, portrait orientation |
| `story-mercedes-1.svg`, `story-mercedes-2.svg` | Our Story | Two fleet vehicle photos |
| `fleet-*.svg` (6 files) | Fleet | One photo per vehicle: S-Class Coupé, C-Class, E-Class, V-Class, Corolla Axio, HiAce |
| `transfers-airport.svg`, `tour-*.svg` (4 files) | Airport Transfers & Tours | Airport transfer + one image per tour category |
| `client-*.svg` (10 files) | Our Clientele | Client logos, ideally transparent PNG/SVG |

Also update:
- `src/favicon.ico` — replace with the real EPTT mark (gold disc on black), see the `TODO` comment in `src/index.html`.
- `og:image` in `src/index.html` once a real hero image exists.

Once real assets are in place, `scripts/gen-placeholders.js` is no longer needed and can be deleted.

## Notes on the build

- `angular.json`'s `anyComponentStyle` budget is raised to 6kb warning / 10kb error — the hand-rolled SCSS (mixins expand per-component rather than sharing utility classes) runs a bit larger than the CLI's stock 2kb/4kb defaults, which are tuned for typical component libraries.
- Animations respect `prefers-reduced-motion`: `AppearOnScrollDirective` skips the observer and reveals content immediately, and `motionParams()` collapses any duration/delay to ~0ms for state-based triggers.
