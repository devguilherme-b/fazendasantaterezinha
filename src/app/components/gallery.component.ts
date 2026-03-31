import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
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
                <div class="hud-info">CULTIVO // ARÁBICA</div>
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
                <div class="hud-info">SEDE // DOURADO-SP</div>
             </div>
          </div>
          <div class="scanner-frame g-wide">
             <img src="assets/media/gallery-5.jpeg" alt="Mecanização na Colheita" class="gallery-img">
             <div class="scanner-hud">
                <span class="hud-corner tl"></span><span class="hud-corner tr"></span>
                <span class="hud-corner bl"></span><span class="hud-corner br"></span>
                <div class="hud-info">COLHEITA // MONITORAMENTO</div>
             </div>
          </div>

          <div class="scanner-frame">
             <video autoplay [muted]="true" loop playsinline class="gallery-img">
                <source src="assets/media/drone-1.mp4" type="video/mp4">
             </video>
             <div class="scanner-hud">
                <span class="hud-corner tl"></span><span class="hud-corner tr"></span>
                <span class="hud-corner bl"></span><span class="hud-corner br"></span>
                <div class="hud-info">COLHEITA // MECANIZAÇÃO 100%</div>
             </div>
          </div>
          <div class="gallery-explore-cta">
          <a routerLink="/fotos" class="btn-tech-explorer">
            <span class="btn-label">EXPLORAR GALERIA DE OPERAÇÕES</span>
            <span class="btn-arrow">&rarr;</span>
          </a>
        </div>
      </div>
      </div>

      <!-- Wavy Transition to Footer -->
      <div class="wave-bottom">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
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
      background-color: var(--fst-color-primary);
      padding: 140px 0 0 0; /* Changed padding-bottom to 0 to fit the wave */
      position: relative;
      overflow: hidden;
    }

    .wave-bottom {
      position: relative;
      bottom: 0;
      left: 0;
      width: 100%;
      line-height: 0;
      z-index: 10;
    }
    .wave-bottom svg {
      display: block;
      width: 100%;
      height: 100px;
    }
    .wave-bottom path {
      fill: var(--fst-marfim);
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

    .gallery-explore-cta {
      grid-column: 1 / -1;
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
    .btn-tech-explorer {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 18px 40px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(200, 169, 110, 0.3);
      border-radius: 4px;
      color: #fff;
      text-decoration: none;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }
    .btn-label {
      font-family: 'Jost', sans-serif;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 3px;
    }
    .btn-arrow {
      color: var(--fst-gold);
      font-size: 1.4rem;
      transition: transform 0.3s ease;
    }
    .btn-tech-explorer:hover {
      background: rgba(200, 169, 110, 0.1);
      border-color: var(--fst-gold);
      box-shadow: 0 0 30px rgba(200, 169, 110, 0.15);
      transform: translateY(-2px);
    }
    .btn-tech-explorer:hover .btn-arrow {
      transform: translateX(8px);
    }
    .btn-tech-explorer::before {
      content: '';
      position: absolute;
      top: 0; left: -100%;
      width: 100%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
      transition: left 0.6s ease;
    }
    .btn-tech-explorer:hover::before {
      left: 100%;
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
