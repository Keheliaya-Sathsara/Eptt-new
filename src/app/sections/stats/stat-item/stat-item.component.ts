import { Component, Input, OnDestroy, signal } from '@angular/core';
import { counterFade } from '../../../core/animations/animations';
import { AppearOnScrollDirective } from '../../../core/directives/appear-on-scroll.directive';
import { motionParams, prefersReducedMotion } from '../../../core/utils/reduced-motion';

/** Ease-out cubic — fast start, gentle settle into the final value. */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

@Component({
  selector: 'app-stat-item',
  standalone: true,
  imports: [AppearOnScrollDirective],
  animations: [counterFade],
  templateUrl: './stat-item.component.html',
  styleUrl: './stat-item.component.scss',
})
export class StatItemComponent implements OnDestroy {
  @Input({ required: true }) target!: number;
  @Input() suffix = '';
  @Input({ required: true }) label!: string;
  /** Stagger index — drives both the entrance delay and the offset stagger. */
  @Input() index = 0;

  readonly visible = signal(false);
  readonly displayValue = signal(0);

  private rafId?: number;

  get animationParams() {
    return motionParams('600ms', `${this.index * 90}ms`);
  }

  onAppear(): void {
    this.visible.set(true);

    if (prefersReducedMotion()) {
      this.displayValue.set(this.target);
      return;
    }

    const duration = 1700;
    const startDelay = this.index * 90;
    const start = performance.now() + startDelay;

    const step = (now: number) => {
      const elapsed = now - start;
      if (elapsed < 0) {
        this.rafId = requestAnimationFrame(step);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      this.displayValue.set(Math.round(eased * this.target));
      if (progress < 1) {
        this.rafId = requestAnimationFrame(step);
      }
    };

    this.rafId = requestAnimationFrame(step);
  }

  get formattedValue(): string {
    return this.displayValue().toLocaleString('en-US');
  }

  ngOnDestroy(): void {
    if (this.rafId !== undefined) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
