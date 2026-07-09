/** True when the user's OS/browser requests reduced motion. Safe on the server. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Returns animation timing params, collapsed to near-zero when the user
 * prefers reduced motion so bound `[@trigger]="{ value: state, params }"`
 * animations resolve instantly instead of being skipped outright (skipping
 * can leave `*ngIf`-adjacent host bindings in an inconsistent visual state).
 */
export function motionParams(duration: string, delay = '0ms'): { duration: string; delay: string } {
  return prefersReducedMotion() ? { duration: '1ms', delay: '0ms' } : { duration, delay };
}
