import { Component, signal } from '@angular/core';
import { fadeSlideUp } from '../../core/animations/animations';
import { AppearOnScrollDirective } from '../../core/directives/appear-on-scroll.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { motionParams } from '../../core/utils/reduced-motion';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [SectionHeaderComponent, AppearOnScrollDirective],
  animations: [fadeSlideUp],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss',
})
export class StoryComponent {
  readonly copyVisible = signal(false);
  readonly imageVisible = signal(false);

  readonly copyParams = motionParams('600ms');
  readonly imageParams = motionParams('600ms', '150ms');
}
