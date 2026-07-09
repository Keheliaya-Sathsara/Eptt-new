import { NgIf } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { cardLift, goldSweep } from '../../../core/animations/animations';

@Component({
  selector: 'app-fleet-card',
  standalone: true,
  imports: [NgIf],
  animations: [cardLift, goldSweep],
  templateUrl: './fleet-card.component.html',
  styleUrl: './fleet-card.component.scss',
})
export class FleetCardComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) image!: string;
  @Input() tagline = '';

  readonly hovered = signal(false);

  setHovered(state: boolean): void {
    this.hovered.set(state);
  }
}
