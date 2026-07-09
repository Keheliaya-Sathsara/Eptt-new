import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { fadeSlideUp, staggerChildren } from '../../core/animations/animations';
import { AppearOnScrollDirective } from '../../core/directives/appear-on-scroll.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { motionParams } from '../../core/utils/reduced-motion';

interface Client {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-clientele',
  standalone: true,
  imports: [NgFor, SectionHeaderComponent, AppearOnScrollDirective],
  animations: [fadeSlideUp, staggerChildren],
  templateUrl: './clientele.component.html',
  styleUrl: './clientele.component.scss',
})
export class ClienteleComponent {
  readonly introVisible = signal(false);
  readonly gridVisible = signal(false);
  readonly introParams = motionParams('600ms');

  readonly clients: Client[] = [
    { name: 'Central Bank of Sri Lanka', logo: 'assets/images/client-central-bank-of-sri-lanka.svg' },
    { name: 'Galle Face Hotel', logo: 'assets/images/client-galle-face-hotel.svg' },
    { name: 'Taj Samudra Colombo', logo: 'assets/images/client-taj-samudra-colombo.svg' },
    { name: 'Oman Air', logo: 'assets/images/client-oman-air.svg' },
    { name: 'LOT Polish Airlines', logo: 'assets/images/client-lot-polish-airlines.svg' },
    { name: 'Caltex', logo: 'assets/images/client-caltex.svg' },
    { name: 'Chevron', logo: 'assets/images/client-chevron.svg' },
    { name: "Bally's Casino", logo: 'assets/images/client-bally-s-casino.svg' },
    { name: 'Bellagio Casino', logo: 'assets/images/client-bellagio-casino.svg' },
    { name: 'Casino Marina', logo: 'assets/images/client-casino-marina.svg' },
  ];
}
