import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="inicio" class="hero-section">
      <!-- Dark minimal gradient overlay to make text pop naturally -->
      <div class="hero-overlay"></div>
      
      <!-- Tech Grid background gives structure -->
      <div class="hero-tech-grid"></div>

      <!-- Left decorative frame border to look like an optic lens -->
      <div class="optic-frame-left"></div>
      <div class="optic-frame-right"></div>

      <div class="container hero-container relative">
        
        <div class="hero-content-pure">
          <div class="tech-badge-inline">
            <span class="pulse-dot"></span> CAFEICULTURA DE PRECISÃO
          </div>
          
          <h1 class="future-title">O Futuro do Café<br><span class="highlight-text">Nasce Aqui</span></h1>
          
          <div class="accent-line"></div>
          
          <p class="hero-lead">Produção de grãos premium com tecnologia preditiva e manejo inteligente aplicados de ponta a ponta: do solo mapeado até a perfeição em cada xícara.</p>
          
          <div class="hero-actions">
            <a href="#historia" class="btn-glow-outline">Explorar Ecossistema <span>&rarr;</span></a>
          </div>
        </div>

        <div class="hero-telemetry-sidebar">
          <div class="telemetry-block">
            <div class="glow-indicator"></div>
            <div class="t-data">
              <span class="t-val">100%</span>
              <span class="t-label">ARÁBICA</span>
            </div>
          </div>
          
          <div class="telemetry-block line-below">
            <div class="glow-indicator"></div>
            <div class="t-data">
              <span class="t-val">24H</span>
              <span class="t-label">TELEMETRIA</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .relative { position: relative; }
    
    .hero-section {
      width: 100%;
      height: 100vh;
      background: url('/assets/media/hero-bg.jpg') no-repeat center center/cover;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      overflow: hidden;
    }
    
    /* Overlay focado no contraste puro */
    .hero-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(90deg, rgba(15, 23, 18, 0.8) 0%, rgba(15, 23, 18, 0.4) 60%, rgba(15, 23, 18, 0) 100%),
                  linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 20%);
      z-index: 1;
    }
    
    /* Fine optical grid */
    .hero-tech-grid {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
      background-size: 60px 60px;
      z-index: 2;
    }

    /* Detalhes de "lentes/frame" para efeito mecânico/premium */
    .optic-frame-left, .optic-frame-right {
      position: absolute;
      top: 20%; bottom: 20%;
      width: 1px;
      background: rgba(255,255,255,0.1);
      z-index: 3;
    }
    .optic-frame-left { left: 40px; }
    .optic-frame-right { right: 40px; }
    
    .optic-frame-left::before, .optic-frame-left::after,
    .optic-frame-right::before, .optic-frame-right::after {
      content: ''; position: absolute; left: -3px; width: 7px; height: 1px; background: rgba(255,255,255,0.5);
    }
    .optic-frame-left::before { top: 0; }
    .optic-frame-left::after { bottom: 0; }
    .optic-frame-right::before { top: 0; }
    .optic-frame-right::after { bottom: 0; }

    .hero-container {
      position: relative;
      z-index: 10;
      width: 100%;
      padding-top: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    /* TYPOGRAPHY DRIVEN CONTENT */
    .hero-content-pure {
      max-width: 650px;
      padding-left: 20px;
      animation: fadeRight 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      border-left: 1px solid rgba(255,255,255,0.05); /* subtle anchor */
    }

    @keyframes fadeRight {
      0% { opacity: 0; transform: translateX(-40px); }
      100% { opacity: 1; transform: translateX(0); }
    }

    .tech-badge-inline {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
      padding-left: 20px;
    }
    .tech-badge-inline span {
      font-family: var(--fst-font-secondary);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 3px;
      color: rgba(255, 255, 255, 0.8);
      text-transform: uppercase;
    }
    .pulse-dot {
      width: 6px; height: 6px;
      background-color: var(--fst-color-highlight);
      border-radius: 50%;
      box-shadow: 0 0 12px var(--fst-color-highlight);
      animation: pulse 2s infinite ease-in-out;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.6); opacity: 0.4; }
    }

    .future-title {
      font-family: var(--fst-font-primary);
      font-size: clamp(3.5rem, 6vw, 5.5rem);
      line-height: 1.05;
      margin-bottom: 30px;
      color: white;
      text-shadow: 0 10px 30px rgba(0,0,0,0.5);
      font-weight: 400;
      padding-left: 20px;
    }
    .highlight-text {
      color: var(--fst-color-highlight);
      font-style: italic; /* Dá um tom elegante/editorial */
      padding-right: 15px; /* Evita corte da fonte itálica */
    }

    .accent-line {
      width: 60px;
      height: 2px;
      background: var(--fst-color-highlight);
      margin-left: 20px;
      margin-bottom: 30px;
      box-shadow: 0 0 10px rgba(200, 169, 110, 0.5);
    }

    .hero-lead {
      font-family: var(--fst-font-secondary);
      font-size: 1.2rem;
      font-weight: 300;
      line-height: 1.7;
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: 48px;
      text-shadow: 0 2px 10px rgba(0,0,0,0.5);
      padding-left: 20px;
    }

    .hero-actions {
      padding-left: 20px;
    }
    .btn-glow-outline {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 14px 32px;
      border: 1px solid rgba(200, 169, 110, 0.4);
      border-radius: 4px; /* Mais técnico, menos bubble */
      color: white;
      font-family: var(--fst-font-secondary);
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      text-decoration: none;
      transition: all var(--fst-transition-base);
      background: rgba(0,0,0,0.2);
      backdrop-filter: blur(4px);
    }
    .btn-glow-outline span {
      color: var(--fst-color-highlight);
      font-size: 1.2rem;
      transition: transform 0.3s ease;
    }
    .btn-glow-outline:hover {
      background: rgba(200, 169, 110, 0.1);
      border-color: var(--fst-color-highlight);
      box-shadow: 0 0 20px rgba(200, 169, 110, 0.15);
    }
    .btn-glow-outline:hover span {
      transform: translateX(4px);
    }

    /* TELEMETRY SIDEBAR */
    .hero-telemetry-sidebar {
      display: flex;
      flex-direction: column;
      gap: 40px;
      padding-right: 20px;
      animation: fadeLeft 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      animation-delay: 0.3s;
      opacity: 0;
    }
    @keyframes fadeLeft {
      0% { opacity: 0; transform: translateX(20px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    
    .telemetry-block {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      position: relative;
    }
    .glow-indicator {
      width: 2px; height: 35px;
      background: var(--fst-color-highlight);
      box-shadow: 0 0 10px var(--fst-color-highlight);
    }
    .t-data {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .t-val {
      font-family: var(--fst-font-primary);
      font-size: 2.2rem;
      line-height: 1;
      color: white;
      text-shadow: 0 2px 10px rgba(0,0,0,0.8);
    }
    .t-label {
      font-family: var(--fst-font-secondary);
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 2px;
      color: rgba(255, 255, 255, 0.6);
    }

    /* RESPONSIVE */
    @media (max-width: 991px) {
      .hero-section {
        justify-content: center;
      }
      .hero-overlay {
        background: radial-gradient(circle at center, rgba(15,23,18,0.4) 0%, rgba(15,23,18,0.9) 100%);
      }
      .optic-frame-left, .optic-frame-right { display: none; }
      .hero-container {
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
      .hero-content-pure {
        border-left: none;
        padding-left: 0;
      }
      .future-title, .hero-lead { padding-left: 0; }
      .accent-line { margin: 0 auto 30px auto; }
      .tech-badge-inline, .hero-actions { padding-left: 0; justify-content: center; }
      
      .hero-telemetry-sidebar {
        flex-direction: row;
        justify-content: center;
        margin-top: 60px;
        padding-right: 0;
        gap: 30px;
      }
    }
  `]
})
export class HeroComponent { }
