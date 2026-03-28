import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="inicio" class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Tradição que Brota da Terra</h1>
        <p>Tradição, qualidade e dedicação familiar em cada colheita.</p>
        <div class="hero-actions">
          <a href="#historia" class="btn-primary">Conheça Nossa História</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      width: 100%;
      height: 100vh;
      background: url('/assets/media/hero-bg.jpg') no-repeat center center/cover;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .hero-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(44, 59, 45, 0.7) 100%);
    }
    .hero-content {
      position: relative;
      z-index: 10;
      color: white;
      max-width: 800px;
      padding: 0 24px;
      animation: fadeIn 1s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .hero-content h1 {
      font-size: clamp(3.5rem, 6vw, 5.5rem);
      margin-bottom: 24px;
      color: var(--fst-color-bg-primary);
      text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
    }
    .hero-content p {
      font-size: 1.3rem;
      font-weight: 300;
      margin-bottom: 40px;
      color: var(--fst-color-bg-secondary);
      text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
    }
  `]
})
export class HeroComponent { }
