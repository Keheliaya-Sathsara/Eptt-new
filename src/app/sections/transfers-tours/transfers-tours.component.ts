import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { fadeSlideUp } from '../../core/animations/animations';
import { AppearOnScrollDirective } from '../../core/directives/appear-on-scroll.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { motionParams } from '../../core/utils/reduced-motion';

interface Tour {
  key: string;
  label: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-transfers-tours',
  standalone: true,
  imports: [NgFor, SectionHeaderComponent, AppearOnScrollDirective],
  animations: [fadeSlideUp],
  templateUrl: './transfers-tours.component.html',
  styleUrl: './transfers-tours.component.scss',
})
export class TransfersToursComponent {
  readonly visible = signal(false);
  readonly params = motionParams('600ms');

  readonly tours: Tour[] = [
    {
      key: 'colombo',
      label: 'In and Around Colombo',
      description:
        'Business meetings, city errands and everyday travel across Colombo in an unhurried, private vehicle.',
      image: 'assets/images/tour-colombo.svg',
    },
    {
      key: 'city',
      label: 'City Tours',
      description:
        'A curated sweep of Colombo’s landmarks, shopping and dining, paced entirely to the client’s schedule.',
      image: 'assets/images/tour-city.svg',
    },
    {
      key: 'heritage',
      label: 'Cultural & Heritage Tours',
      description:
        'Sri Lanka’s ancient cities, temples and heritage sites, with a chauffeur who knows the routes and the history.',
      image: 'assets/images/tour-heritage.svg',
    },
    {
      key: 'outstation',
      label: 'Outstation Tours',
      description:
        'Multi-day journeys across the island — hill country, coastlines and beyond — with pickup from anywhere in Sri Lanka.',
      image: 'assets/images/tour-outstation.svg',
    },
  ];

  activeTour = signal(this.tours[0]);

  selectTour(tour: Tour): void {
    this.activeTour.set(tour);
  }
}
