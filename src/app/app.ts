import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { CropsComponent } from './components/crops.component';
import { StatsComponent } from './components/stats.component';
import { GalleryComponent } from './components/gallery.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, AboutComponent, CropsComponent, StatsComponent, GalleryComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FazSantaTerezinha');
}
