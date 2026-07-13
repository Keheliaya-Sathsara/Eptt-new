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
    { name: 'Central Bank of Sri Lanka', logo: 'assets/images/client-central-bank-of-sri-lanka.png' },
    { name: 'Galle Face Hotel', logo: 'assets/images/client-galle-face-hotel.png' },
    { name: 'Taj Samudra Colombo', logo: 'assets/images/client-taj-samudra-colombo.png' },
    { name: 'Oman Air', logo: 'assets/images/client-oman-air.png' },
    { name: 'LOT Polish Airlines', logo: 'assets/images/client-lot-polish-airlines.png' },
    { name: 'Caltex', logo: 'assets/images/client-caltex.png' },
    { name: 'Chevron', logo: 'assets/images/client-chevron.png' },
    { name: "Bally's Casino", logo: 'assets/images/client-bally-s-casino.png' },
    { name: 'Bellagio Casino', logo: 'assets/images/client-bellagio-casino.png' },
    { name: 'Casino Marina', logo: 'assets/images/client-casino-marina.png' },
  ];
}
