import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { fadeSlideUp, staggerChildren } from '../../core/animations/animations';
import { AppearOnScrollDirective } from '../../core/directives/appear-on-scroll.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { motionParams } from '../../core/utils/reduced-motion';

interface WhyBlock {
  title: string;
  body: string;
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [NgFor, SectionHeaderComponent, AppearOnScrollDirective],
  animations: [fadeSlideUp, staggerChildren],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss',
})
export class WhyChooseUsComponent {
  readonly quoteVisible = signal(false);
  readonly gridVisible = signal(false);
  readonly quoteParams = motionParams('600ms');

  readonly blocks: WhyBlock[] = [
    {
      title: 'Availability 24/7',
      body: 'Our travel counter is staffed round the clock, with dedicated Front-Line Officers and an Operations Manager on call 24×7.',
    },
    {
      title: 'Smooth Operation',
      body: 'Non-intrusive counter operations, hand-picked chauffeurs and designated uniforms keep every interaction seamless.',
    },
    {
      title: 'Vehicles',
      body: 'A surge fleet on demand, valid registration and revenue licenses, daily interior cleaning and scheduled servicing — faultless and impeccable condition, always.',
    },
  ];
}
