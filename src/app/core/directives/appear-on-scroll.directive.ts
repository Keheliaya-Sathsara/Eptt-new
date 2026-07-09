import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { prefersReducedMotion } from '../utils/reduced-motion';

/**
 * Fires `(appear)` once when the host element crosses into the viewport,
 * then unobserves itself. Components pair this with a state-based
 * animation trigger, e.g.:
 *
 *   <div appearOnScroll (appear)="visible = true" [@fadeSlideUp]="visible ? 'in' : 'out'">
 *
 * Under prefers-reduced-motion the element is marked visible immediately
 * (no observation, no delay) so motion-sensitive users see final states
 * without waiting on scroll position.
 */
@Directive({
  selector: '[appearOnScroll]',
  standalone: true,
})
export class AppearOnScrollDirective implements OnInit, OnDestroy {
  /** Fraction of the element that must be visible before firing. */
  @Input() appearThreshold = 0.2;
  /** Root margin passed to IntersectionObserver, e.g. to pre-trigger before entry. */
  @Input() appearRootMargin = '0px 0px -60px 0px';

  @Output() appear = new EventEmitter<void>();

  private observer?: IntersectionObserver;

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      this.appear.emit();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.appear.emit();
            this.observer?.unobserve(entry.target);
            this.observer?.disconnect();
          }
        }
      },
      { threshold: this.appearThreshold, rootMargin: this.appearRootMargin }
    );

    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
