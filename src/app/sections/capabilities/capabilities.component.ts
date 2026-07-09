import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { staggerChildren } from '../../core/animations/animations';
import { AppearOnScrollDirective } from '../../core/directives/appear-on-scroll.directive';
import { SectionHeaderComponent } from '../../shared/section-header/section-header.component';

interface Capability {
  icon: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-capabilities',
  standalone: true,
  imports: [NgFor, SectionHeaderComponent, AppearOnScrollDirective],
  animations: [staggerChildren],
  templateUrl: './capabilities.component.html',
  styleUrl: './capabilities.component.scss',
})
export class CapabilitiesComponent {
  readonly visible = signal(false);

  readonly capabilities: Capability[] = [
    {
      icon: 'academy',
      title: 'Chauffeur Training Academy',
      body: "The first of its kind in Sri Lanka — an exclusive, state-of-art academy that trains every chauffeur to executive-grade standards before they take the wheel.",
    },
    {
      icon: 'gps',
      title: 'GPS + AI Fleet Monitoring',
      body: 'Big data analytics track every vehicle in real time, with customizable reporting built around what matters to your business.',
    },
    {
      icon: 'invoice',
      title: 'Tailored Invoicing',
      body: 'Income breakdowns by day or shift, fully customizable to match your finance team’s workflow.',
    },
    {
      icon: 'support',
      title: '24×7 Team Access',
      body: 'Speak to a real team member any hour of any day — no automated queues, no waiting for office hours.',
    },
    {
      icon: 'wifi',
      title: 'Free Unlimited WiFi',
      body: 'Every vehicle in the fleet is equipped with complimentary, unlimited WiFi for uninterrupted travel.',
    },
    {
      icon: 'coordinator',
      title: 'Dedicated Travel Coordinator',
      body: 'Each corporate client is assigned a dedicated coordinator who owns the relationship end to end.',
    },
  ];

  // Minimal single-path line icons — kept hand-rolled to avoid an icon library dependency.
  readonly iconPaths: Record<string, string> = {
    academy:
      'M12 3 2 8l10 5 8-4.2V16h2V8L12 3ZM6 12.4V16c0 2.2 2.7 4 6 4s6-1.8 6-4v-3.6l-6 3.15-6-3.15Z',
    gps: 'M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z',
    invoice:
      'M6 2h9l5 5v15H6V2Zm8 1.5V8h4.5L14 3.5ZM8 12h8v1.5H8V12Zm0 3.5h8V17H8v-1.5Zm0-7h4V10H8V8.5Z',
    support:
      'M12 2a8 8 0 0 0-8 8v5a3 3 0 0 0 3 3h1v-7H5v-1a7 7 0 0 1 14 0v1h-3v7h1a3 3 0 0 0 3-3v-5a8 8 0 0 0-8-8Z',
    wifi: 'M12 18.5a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2ZM7.8 15a6 6 0 0 1 8.4 0l-1.9 1.9a3.4 3.4 0 0 0-4.6 0L7.8 15Zm-3.6-3.6a11 11 0 0 1 15.6 0l-1.9 1.9a8.4 8.4 0 0 0-11.8 0L4.2 11.4Zm-3.6-3.6a16 16 0 0 1 22.8 0L21.5 9.7a13.4 13.4 0 0 0-19 0L.6 7.8Z',
    coordinator:
      'M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.2-8 5v3h16v-3c0-2.8-3.6-5-8-5Z',
  };
}
