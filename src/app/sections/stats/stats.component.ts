import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { StatItemComponent } from './stat-item/stat-item.component';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [NgFor, StatItemComponent],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  readonly stats: Stat[] = [
    { value: 500000, suffix: 'km+', label: 'Limousine Transportation' },
    { value: 3000, suffix: '+', label: 'VIP & CIP Passengers' },
    { value: 50, suffix: '+', label: 'National Conferences' },
    { value: 16, suffix: '+', label: 'International Conferences' },
    { value: 6, suffix: '+', label: 'Years in Operation' },
    { value: 6, suffix: '+', label: 'Premium Vehicle Brands' },
  ];
}
