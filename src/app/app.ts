import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { CropsComponent } from './components/crops.component';
import { StatsComponent } from './components/stats.component';
import { GalleryComponent } from './components/gallery.component';
import { FooterComponent } from './components/footer.component';
import { LocationComponent } from "./components/location.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, AboutComponent, CropsComponent, StatsComponent, GalleryComponent, FooterComponent, LocationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FazSantaTerezinha');
}
