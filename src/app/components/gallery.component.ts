import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <section id="fotos" class="gallery-section section-padding">
      <div class="container text-center">
        <span class="badge-pill">Nossas Lentes</span>
        <h2 class="title-dark">Galeria de Campo</h2>
        <p class="subtitle-dark">A beleza da Fazenda Santa Terezinha através de fotos reais.</p>
        
        <div class="gallery-grid">
          <img src="assets/media/gallery-1.jpg" alt="Campo 1" class="gallery-img g-large">
<img src="assets/media/gallery-2.jpg" alt="Campo 2" class="gallery-img">
<img src="assets/media/gallery-3.jpg" alt="Campo 3" class="gallery-img">
<img src="assets/media/gallery-4.jpg" alt="Campo 4" class="gallery-img g-wide">
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery-section {
      background-color: var(--fst-color-bg-secondary);
    }
    .text-center {
      text-align: center;
      margin-bottom: 48px;
    }
    .title-dark {
      color: var(--fst-color-primary);
      font-size: 3rem;
      margin-bottom: 16px;
    }
    .subtitle-dark {
      color: var(--fst-color-secondary);
      font-size: 1.2rem;
      margin-bottom: 32px;
    }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 250px);
      gap: 16px;
    }
    .gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      transition: filter 0.3s ease, transform 0.3s ease;
    }
    .gallery-img:hover {
      filter: brightness(1.1);
      transform: scale(1.02);
    }
    .g-large {
      grid-column: span 2;
      grid-row: span 2;
    }
    .g-wide {
      grid-column: span 2;
    }
    @media (max-width: 768px) {
      .gallery-grid {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      }
      .g-large, .g-wide {
        grid-column: span 1;
        grid-row: span 1;
      }
      .gallery-img { height: 250px; }
    }
  `]
})
export class GalleryComponent { }
