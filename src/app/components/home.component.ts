import { Component } from '@angular/core';
import { HeroComponent } from './hero.component';
import { AboutComponent } from './about.component';
import { CropsComponent } from './crops.component';
import { StatsComponent } from './stats.component';
import { GalleryComponent } from './gallery.component';
import { LocationComponent } from "./location.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, CropsComponent, StatsComponent, GalleryComponent, LocationComponent],
  template: `
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-crops></app-crops>
      <app-stats></app-stats>
      <app-location></app-location>
      <app-gallery></app-gallery>
    </main>
  `
})
export class HomeComponent {}
