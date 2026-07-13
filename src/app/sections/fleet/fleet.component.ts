import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { staggerChildren } from '../../core/animations/animations';
import { AppearOnScrollDirective } from '../../core/directives/appear-on-scroll.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';
import { FleetCardComponent } from './fleet-card/fleet-card.component';

interface Vehicle {
  name: string;
  image: string;
}

@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [NgFor, SectionHeaderComponent, AppearOnScrollDirective, FleetCardComponent],
  animations: [staggerChildren],
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.scss',
})
export class FleetComponent {
  readonly visible = signal(false);

  readonly vehicles: Vehicle[] = [
    { name: 'Mercedes S-Class Coupé', image: 'assets/images/fleet-s-class.png' },
    { name: 'Mercedes C-Class', image: 'assets/images/fleet-c-class.png' },
    { name: 'Mercedes E-Class', image: 'assets/images/fleet-e-class.png' },
    { name: 'Mercedes V-Class', image: 'assets/images/fleet-v-class.png' },
    { name: 'Toyota Corolla Axio', image: 'assets/images/fleet-corolla-axio.png' },
    { name: 'Toyota HiAce', image: 'assets/images/fleet-hiace.png' },
  ];
}
