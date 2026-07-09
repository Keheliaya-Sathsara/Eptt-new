import {
  animate,
  animateChild,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * Shared animation triggers for the EPTT site.
 *
 * Convention: components bind these as state machines — 'out' => 'in' —
 * driven by AppearOnScrollDirective's (appear) output, rather than relying
 * on :enter/:leave. This keeps the trigger reusable both for viewport
 * reveals and for hover/interaction states (cardLift, goldSweep).
 *
 * Every timed trigger accepts { duration, delay } params so callers can
 * collapse them via `motionParams()` under prefers-reduced-motion.
 */

export const fadeSlideUp = trigger('fadeSlideUp', [
  state('out', style({ opacity: 0, transform: 'translateY(40px)' })),
  state('in', style({ opacity: 1, transform: 'translateY(0)' })),
  transition(
    'out => in',
    [animate('{{duration}} {{delay}} cubic-bezier(0.22, 1, 0.36, 1)')],
    { params: { duration: '600ms', delay: '0ms' } }
  ),
]);

export const counterFade = trigger('counterFade', [
  state('out', style({ opacity: 0, transform: 'translateY(20px)' })),
  state('in', style({ opacity: 1, transform: 'translateY(0)' })),
  transition(
    'out => in',
    [animate('{{duration}} {{delay}} cubic-bezier(0.22, 1, 0.36, 1)')],
    { params: { duration: '500ms', delay: '0ms' } }
  ),
]);

/** Applied to a grid/list container; children carry the `.stagger-item` class. */
export const staggerChildren = trigger('staggerChildren', [
  transition('out => in', [
    query(
      '.stagger-item',
      [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        stagger('80ms', [
          animate(
            '500ms cubic-bezier(0.22, 1, 0.36, 1)',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

/** Gold lozenge bar: scaleX in from its left (transform-origin set in CSS). */
export const pillReveal = trigger('pillReveal', [
  state('out', style({ transform: 'scaleX(0)' })),
  state('in', style({ transform: 'scaleX(1)' })),
  transition(
    'out => in',
    animate('{{duration}} {{delay}} cubic-bezier(0.22, 1, 0.36, 1)'),
    { params: { duration: '550ms', delay: '0ms' } }
  ),
]);

/** Black circle terminator: pops in with a slight overshoot after the pill sweeps. */
export const circlePop = trigger('circlePop', [
  state('out', style({ transform: 'scale(0)', opacity: 0 })),
  state('in', style({ transform: 'scale(1)', opacity: 1 })),
  transition(
    'out => in',
    animate('{{duration}} {{delay}} cubic-bezier(0.34, 1.56, 0.64, 1)'),
    { params: { duration: '420ms', delay: '250ms' } }
  ),
]);

/** Underline / accent bar that sweeps left-to-right on hover or focus. */
export const goldSweep = trigger('goldSweep', [
  state('hidden', style({ transform: 'scaleX(0)' })),
  state('visible', style({ transform: 'scaleX(1)' })),
  transition('hidden => visible', animate('350ms cubic-bezier(0.22, 1, 0.36, 1)')),
  transition('visible => hidden', animate('200ms ease-in')),
]);

/** Card hover lift with shadow bloom. */
export const cardLift = trigger('cardLift', [
  state(
    'rest',
    style({ transform: 'translateY(0)', boxShadow: '0 2px 8px rgba(13, 13, 13, 0.08)' })
  ),
  state(
    'lifted',
    style({ transform: 'translateY(-8px)', boxShadow: '0 20px 48px rgba(13, 13, 13, 0.24)' })
  ),
  transition('rest <=> lifted', animate('300ms cubic-bezier(0.22, 1, 0.36, 1)')),
]);

/** Hero image entrance: drifts in from the right. Continuous scroll parallax
 * is applied separately as a plain style binding (not state-transition-shaped). */
export const imageDrift = trigger('imageDrift', [
  state('out', style({ opacity: 0, transform: 'translateX(60px)' })),
  state('in', style({ opacity: 1, transform: 'translateX(0)' })),
  transition(
    'out => in',
    animate('{{duration}} {{delay}} cubic-bezier(0.22, 1, 0.36, 1)'),
    { params: { duration: '800ms', delay: '150ms' } }
  ),
]);

/** Parent-level trigger that simply cascades into any @fadeSlideUp children. */
export const staggerAnimateChildren = trigger('staggerAnimateChildren', [
  transition('out => in', [query('@fadeSlideUp', animateChild(), { optional: true })]),
]);
