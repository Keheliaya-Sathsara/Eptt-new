import { NgFor } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  readonly navLinks: NavLink[] = [
    { label: 'Home', fragment: 'hero' },
    { label: 'Our Story', fragment: 'story' },
    { label: 'Services', fragment: 'capabilities' },
    { label: 'Tours', fragment: 'transfers-tours' },
    { label: 'Fleet', fragment: 'fleet' },
    { label: 'Clientele', fragment: 'clientele' },
    { label: 'Contact', fragment: 'contact' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
