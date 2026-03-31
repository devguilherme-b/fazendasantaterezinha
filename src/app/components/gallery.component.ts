import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="fotos" class="future-gallery-section relative">
      <div class="ambient-glow"></div>
      
      <div class="container text-center relative z-10">
        <div class="tech-badge mx-auto">
          <span class="pulse-dot"></span> MÓDULO ÓPTICO // GALERIA
        </div>
        <h2 class="section-title">Registro da <span class="gold">Excelência</span></h2>
        <p class="section-subtitle">Acompanhe visualmente nossos setores de cultivo e processamento, onde a tradição se une à tecnologia de ponta.</p>
        
        <div class="scanner-grid">
          <div class="scanner-frame g-large">
             <img src="assets/media/gallery-1.jpg" alt="Centro de Processamento" class="gallery-img">
             <div class="scanner-hud">
                <span class="hud-corner tl"></span><span class="hud-corner tr"></span>
                <span class="hud-corner bl"></span><span class="hud-corner br"></span>
                <div class="hud-info">ESTRUTURA // SECADORES OK</div>
             </div>
          </div>
          <div class="scanner-frame">
             <img src="assets/media/gallery-2.jpg" alt="Manejo dos Cafeeiros" class="gallery-img">
             <div class="scanner-hud">
                <span class="hud-corner tl"></span><span class="hud-corner tr"></span>
                <span class="hud-corner bl"></span><span class="hud-corner br"></span>
                <div class="hud-info">SEDE // DOURADO-SP</div>
             </div>
          </div>
          <div class="scanner-frame">
             <img src="assets/media/gallery-3.jpg" alt="Campo e Infraestrutura" class="gallery-img">
             <div class="scanner-hud">
                <span class="hud-corner tl"></span><span class="hud-corner tr"></span>
                <span class="hud-corner bl"></span><span class="hud-corner br"></span>
                <div class="hud-info">CULTIVO // ARÁBICA</div>
             </div>
          </div>
          <div class="scanner-frame g-wide">
             <img src="assets/media/gallery-5.jpeg" alt="Mecanização na Colheita" class="gallery-img">
             <div class="scanner-hud">
                <span class="hud-corner tl"></span><span class="hud-corner tr"></span>
                <span class="hud-corner bl"></span><span class="hud-corner br"></span>
                <div class="hud-info">COLHEITA // MECANIZAÇÃO 100%</div>
             </div>
          </div>

          <div class="scanner-frame">
             <video autoplay [muted]="true" loop playsinline class="gallery-img">
                <source src="assets/media/drone-1.mp4" type="video/mp4">
             </video>
             <div class="scanner-hud">
                <span class="hud-corner tl"></span><span class="hud-corner tr"></span>
                <span class="hud-corner bl"></span><span class="hud-corner br"></span>
                <div class="hud-info">SOBREVÔO // MONITORAMENTO</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      --fst-green-musgo: #2C3B2D;
      --fst-gold: #C8A96E;
      --fst-marfim: #F5EDD9;
    }

    .future-gallery-section {
      background-color: #0b120c;
      padding: 140px 0;
      position: relative;
      overflow: hidden;
    }

    .ambient-glow {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 70vw; height: 70vw;
      background: radial-gradient(circle, rgba(200,169,110,0.03) 0%, transparent 70%);
      pointer-events: none;
    }
    
    .tech-badge {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: rgba(200, 169, 110, 0.05);
      border: 1px solid rgba(200, 169, 110, 0.2);
      padding: 8px 18px;
      font-family: 'Jost', sans-serif;
      font-size: 0.8rem;
      letter-spacing: 3px;
      color: var(--fst-gold);
      margin-bottom: 24px;
    }
    .pulse-dot {
      width: 8px; height: 8px;
      background-color: var(--fst-gold);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--fst-gold);
      animation: pulse 2s infinite ease-in-out;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.6); opacity: 0.4; }
    }

    .section-title {
      font-family: 'Cormorant Garamond', serif;
      color: #fff;
      font-size: clamp(3rem, 6vw, 4rem);
      margin-bottom: 16px;
    }
    .gold { color: var(--fst-gold); font-style: italic; }

    .section-subtitle {
      font-family: 'Jost', sans-serif;
      font-size: 1.2rem;
      color: rgba(245, 237, 217, 0.6);
      max-width: 650px;
      margin: 0 auto 80px auto;
      line-height: 1.6;
    }

    .scanner-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 350px);
      gap: 30px;
    }

    .scanner-frame {
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      background: #000;
      cursor: crosshair;
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.5s ease;
    }
    .g-large { grid-column: span 2; grid-row: span 2; }
    .g-wide { grid-column: span 2; }

    .gallery-img {
      width: 100%; height: 100%;
      object-fit: cover;
      opacity: 0.6;
      filter: saturate(0.8) contrast(1.1);
      transition: all 0.8s ease;
    }
    
    .scanner-hud {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      pointer-events: none;
      transition: all 0.5s ease;
      background: linear-gradient(to bottom, transparent 60%, rgba(11, 18, 12, 0.7) 100%);
    }
    .hud-corner {
      position: absolute;
      width: 25px; height: 25px;
      border: 1px solid transparent;
      transition: all 0.4s ease;
    }
    .hud-corner.tl { top: 20px; left: 20px; border-top-color: rgba(255,255,255,0.2); border-left-color: rgba(255,255,255,0.2); }
    .hud-corner.tr { top: 20px; right: 20px; border-top-color: rgba(255,255,255,0.2); border-right-color: rgba(255,255,255,0.2); }
    .hud-corner.bl { bottom: 20px; left: 20px; border-bottom-color: rgba(255,255,255,0.2); border-left-color: rgba(255,255,255,0.2); }
    .hud-corner.br { bottom: 20px; right: 20px; border-bottom-color: rgba(255,255,255,0.2); border-right-color: rgba(255,255,255,0.2); }

    .hud-info {
      position: absolute;
      bottom: 25px; left: 30px;
      font-family: monospace;
      font-size: 0.7rem;
      letter-spacing: 2px;
      color: var(--fst-gold);
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.4s ease;
    }

    .scanner-frame:hover {
      border-color: var(--fst-gold);
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    }
    .scanner-frame:hover .gallery-img {
      opacity: 0.9;
      transform: scale(1.05);
      filter: saturate(1.1) contrast(1.1);
    }
    .scanner-frame:hover .hud-corner {
      border-color: var(--fst-gold);
      width: 35px; height: 35px;
    }
    .scanner-frame:hover .hud-info {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 991px) {
      .scanner-grid { grid-template-columns: 1fr; grid-template-rows: auto; }
      .g-large, .g-wide { grid-column: span 1; grid-row: span 1; }
      .scanner-frame { height: 300px; }
    }
  `]
})
export class GalleryComponent { }
