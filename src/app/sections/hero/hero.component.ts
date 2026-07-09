import { NgFor } from '@angular/common';
import { Component, HostListener, OnInit, signal } from '@angular/core';
import { fadeSlideUp, imageDrift, staggerChildren } from '../../core/animations/animations';
import { motionParams, prefersReducedMotion } from '../../core/utils/reduced-motion';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor],
  animations: [staggerChildren, fadeSlideUp, imageDrift],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  readonly headlineWords = ['Finest', 'luxury', 'chauffeur'];
  readonly revealed = signal(false);
  readonly parallaxOffset = signal(0);

  readonly imageParams = motionParams('800ms', '150ms');

  ngOnInit(): void {
    // Entrance runs once on load — hero is always in view at first paint.
    requestAnimationFrame(() => this.revealed.set(true));
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (prefersReducedMotion()) {
      return;
    }
    // Slow parallax drift, capped so the image never scrolls far from frame.
    const offset = Math.min(window.scrollY * 0.12, 60);
    this.parallaxOffset.set(offset);
  }
}
