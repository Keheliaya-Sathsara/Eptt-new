import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';
import { StatsComponent } from './sections/stats/stats.component';
import { StoryComponent } from './sections/story/story.component';
import { CapabilitiesComponent } from './sections/capabilities/capabilities.component';
import { TransfersToursComponent } from './sections/transfers-tours/transfers-tours.component';
import { WhyChooseUsComponent } from './sections/why-choose-us/why-choose-us.component';
import { FleetComponent } from './sections/fleet/fleet.component';
import { ClienteleComponent } from './sections/clientele/clientele.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    StatsComponent,
    StoryComponent,
    CapabilitiesComponent,
    TransfersToursComponent,
    WhyChooseUsComponent,
    FleetComponent,
    ClienteleComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
