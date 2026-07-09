import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { circlePop, pillReveal } from '../../core/animations/animations';
import { AppearOnScrollDirective } from '../../core/directives/appear-on-scroll.directive';
import { motionParams } from '../../core/utils/reduced-motion';

/**
 * The brochure's signature gold pill section header: a lozenge bar bleeding
 * off the left viewport edge, capped with a solid black circle. Reused by
 * every content section below the hero.
 */
@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [NgIf, AppearOnScrollDirective],
  animations: [pillReveal, circlePop],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss',
})
export class SectionHeaderComponent {
  @Input() kicker = '';
  @Input({ required: true }) title!: string;
  /** Use on dark section backgrounds so surrounding copy switches to white. */
  @Input() theme: 'light' | 'dark' = 'light';

  visible = false;

  readonly pillParams = motionParams('550ms');
  readonly circleParams = motionParams('420ms', '250ms');

  onAppear(): void {
    this.visible = true;
  }
}
