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

## Image assets

`src/assets/images/` holds the real brochure photography and client logos (PNG). Current dimensions and where each is used:

| File(s) | Used in | Dimensions |
|---|---|---|
| `hero-chauffeur.png` | Hero | 720×720 |
| `story-mercedes-1.png`, `story-mercedes-2.png` | Our Story | 720×720 |
| `fleet-*.png` (6 files) | Fleet | 1080×720 |
| `tour-*.png` (4 files) | Airport Transfers & Tours | 1080×720 |
| `client-*.png` (10 files) | Our Clientele | 2000×2000 |

If you replace any of these with a different asset, keep the aspect ratio close to the table above (or update the matching `width`/`height` attributes and CSS `aspect-ratio` in that section's component to avoid layout shift / awkward cropping — see `hero.component.scss`, `story.component.scss`, `fleet-card.component.scss`, `transfers-tours.component.scss`).

Still outstanding:
- `src/favicon.ico` — still the stock Angular CLI icon. Replace with the real EPTT mark (gold disc on black), see the `TODO` comment in `src/index.html`.

## Notes on the build

- `angular.json`'s `anyComponentStyle` budget is raised to 6kb warning / 10kb error — the hand-rolled SCSS (mixins expand per-component rather than sharing utility classes) runs a bit larger than the CLI's stock 2kb/4kb defaults, which are tuned for typical component libraries.
- Animations respect `prefers-reduced-motion`: `AppearOnScrollDirective` skips the observer and reveals content immediately, and `motionParams()` collapses any duration/delay to ~0ms for state-based triggers.
