import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <section id="fotos" class="future-gallery-section section-padding">
      <div class="container text-center" style="position: relative; z-index: 2;">
        <div class="tech-badge mx-auto">
          <span class="pulse-dot"></span> MÓDULO ÓPTICO
        </div>
        <h2 class="section-title">Varredura da <span>Lavoura</span></h2>
        <p class="section-subtitle">Visualização direta dos nossos setores de cultivo do café, monitorados para garantir a máxima qualidade em cada estágio da safra.</p>
        
        <div class="scanner-grid">
          <div class="scanner-frame g-large">
             <img src="assets/media/gallery-1.jpg" alt="Centro de Processamento" class="gallery-img">
             <div class="scanner-hud">
                <span class="hud-corner tl"></span><span class="hud-corner tr"></span>
                <span class="hud-corner bl"></span><span class="hud-corner br"></span>
                <div class="hud-info">INFRA // CONTROLE OK</div>
             </div>
          </div>
          <div class="scanner-frame">
             <img src="assets/media/gallery-2.jpg" alt="Manejo dos Cafeeiros" class="gallery-img">
             <div class="scanner-hud">
                <span class="hud-corner tl"></span><span class="hud-corner tr"></span>
                <span class="hud-corner bl"></span><span class="hud-corner br"></span>
                <div class="hud-info">SETOR BRAVO // MATURAÇÃO</div>
             </div>
          </div>
          <div class="scanner-frame">
             <img src="assets/media/gallery-3.jpg" alt="Campo e Infraestrutura" class="gallery-img">
             <div class="scanner-hud">
                <span class="hud-corner tl"></span><span class="hud-corner tr"></span>
                <span class="hud-corner bl"></span><span class="hud-corner br"></span>
                <div class="hud-info">SETOR CHARLIE // FLORAÇÃO</div>
             </div>
          </div>
          <div class="scanner-frame g-wide">
             <img src="assets/media/gallery-4.jpg" alt="Mecanização na Colheita" class="gallery-img">
             <div class="scanner-hud">
                <span class="hud-corner tl"></span><span class="hud-corner tr"></span>
                <span class="hud-corner bl"></span><span class="hud-corner br"></span>
                <div class="hud-info">TELEMETRIA // MAPEAMENTO SUPERFÍCIE</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .future-gallery-section {
      background-color: var(--fst-color-bg-secondary);
      padding: 120px 0;
      position: relative;
    }
    
    .tech-badge {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: rgba(44, 59, 45, 0.05);
      border: 1px solid rgba(44, 59, 45, 0.15);
      padding: 8px 18px;
      border-radius: 30px;
      font-family: var(--fst-font-secondary);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 2.5px;
      color: var(--fst-color-primary);
      margin-bottom: 24px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.03);
    }
    .pulse-dot {
      width: 8px; height: 8px;
      background-color: var(--fst-color-highlight);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--fst-color-highlight);
      animation: pulse 2s infinite ease-in-out;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.6); opacity: 0.4; }
    }

    .section-title {
      font-family: var(--fst-font-primary);
      color: var(--fst-color-primary);
      font-size: 3.5rem;
      margin-bottom: 16px;
    }
    .section-title span {
      background: linear-gradient(90deg, var(--fst-color-primary) 0%, var(--fst-color-highlight) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .section-subtitle {
      font-size: 1.15rem;
      color: var(--fst-color-secondary);
      max-width: 600px;
      margin: 0 auto 60px auto;
      line-height: 1.6;
    }

    .scanner-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 320px);
      gap: 24px;
      text-align: left;
    }

    .scanner-frame {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      background: #000;
      cursor: crosshair;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      transition: all 0.4s ease;
      border: 1px solid rgba(44, 59, 45, 0.1);
    }
    .g-large {
      grid-column: span 2;
      grid-row: span 2;
    }
    .g-wide {
      grid-column: span 2;
    }

    .gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.85;
      filter: saturate(0.85) contrast(1.1);
      transition: all 0.6s ease;
    }
    
    .scanner-hud {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      pointer-events: none;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
      box-sizing: border-box;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(44, 59, 45, 0.4) 100%);
    }
    .hud-corner {
      position: absolute;
      width: 25px; height: 25px;
      border: 2px solid transparent;
      transition: all 0.4s ease;
    }
    .hud-corner.tl { top: 15px; left: 15px; border-top-color: rgba(255,255,255,0.5); border-left-color: rgba(255,255,255,0.5); }
    .hud-corner.tr { top: 15px; right: 15px; border-top-color: rgba(255,255,255,0.5); border-right-color: rgba(255,255,255,0.5); }
    .hud-corner.bl { bottom: 15px; left: 15px; border-bottom-color: rgba(255,255,255,0.5); border-left-color: rgba(255,255,255,0.5); }
    .hud-corner.br { bottom: 15px; right: 15px; border-bottom-color: rgba(255,255,255,0.5); border-right-color: rgba(255,255,255,0.5); }

    .hud-info {
      position: absolute;
      bottom: 20px; left: 24px;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      padding: 6px 12px;
      color: #10B981;
      font-family: monospace;
      font-size: 0.8rem;
      letter-spacing: 1.5px;
      border-radius: 4px;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      border: 1px solid rgba(255,255,255,0.2);
    }

    .scanner-frame:hover {
      box-shadow: 0 20px 40px rgba(0,0,0,0.2), 0 0 15px rgba(200, 169, 110, 0.15);
      border-color: rgba(200, 169, 110, 0.3);
    }
    .scanner-frame:hover .gallery-img {
      transform: scale(1.05);
      opacity: 1;
      filter: saturate(1.1) contrast(1.1);
    }
    .scanner-frame:hover .scanner-hud {
      background: rgba(200, 169, 110, 0.1);
      border-color: rgba(200, 169, 110, 0.3);
    }
    .scanner-frame:hover .hud-corner {
      border-color: var(--fst-color-highlight);
    }
    .scanner-frame:hover .hud-corner.tl { top: 10px; left: 10px; }
    .scanner-frame:hover .hud-corner.tr { top: 10px; right: 10px; }
    .scanner-frame:hover .hud-corner.bl { bottom: 10px; left: 10px; }
    .scanner-frame:hover .hud-corner.br { bottom: 10px; right: 10px; }
    
    .scanner-frame:hover .hud-info {
      opacity: 1;
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      .scanner-grid {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      }
      .g-large, .g-wide {
        grid-column: span 1;
        grid-row: span 1;
      }
      .scanner-frame { height: 280px; }
    }
  `]
})
export class GalleryComponent { }
