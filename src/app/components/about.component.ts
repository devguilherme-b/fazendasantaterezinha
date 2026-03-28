import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="historia" class="future-agro-section">
      <div class="container relative">
        <!-- Decoration Holographic Circle -->
        <div class="tech-circle"></div>

        <div class="about-grid">
          
          <!-- LEFT PANEL: Texts & Stats -->
          <div class="about-text-panel">
            <div class="tech-badge">
              <span class="pulse-dot"></span> NOSSA HISTÓRIA
            </div>
            
            <h2 class="gradient-title">Tradição e Inovação <span>no Agronegócio</span></h2>
            
            <p class="lead-tech">Desde o plantio da primeira semente, a Fazenda Santa Terezinha tem se destacado pela precisão e excelência em suas operações.</p>
            
            <p class="body-tech">
              Guiados pelo compromisso com a terra e focados no futuro, adotamos as melhores práticas agrícolas globais, combinando nossa sabedoria tradicional com sistemas e inovações tecnológicas de ponta. O futuro do campo já começou aqui.
            </p>
            
            <div class="stats-grid">
              <div class="future-stat-box">
                <p class="st-label">FUNDAÇÃO</p>
                <p class="st-value">Dádiva da Terra</p>
              </div>
              <div class="future-stat-box">
                <p class="st-label">FOCO</p>
                <p class="st-value">Alta Performance Sustentável</p>
              </div>
            </div>
          </div>

          <!-- RIGHT PANEL: Glass Media -->
          <div class="about-media">
            <div class="media-container">
              <img src="assets/media/gallery-2.jpg" alt="Visão da Fazenda" class="tech-img" />
              
              <!-- Tech glass HUD overlay -->
              <div class="glass-overlay-metric">
                <div class="metric-ring"></div>
                <div class="metric-data">
                  <strong>100%</strong>
                  <span>Monitoramento Digital</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .future-agro-section {
      padding: 120px 0;
      position: relative;
      background: var(--fst-color-bg-primary); /* Marfim base */
      overflow: hidden;
    }
    .relative { position: relative; }
    
    /* Background abstract tech element */
    .tech-circle {
      position: absolute;
      top: -10%; left: 40%;
      width: 600px; height: 600px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(200,169,110,0.06) 0%, rgba(200,169,110,0) 70%);
      z-index: 0;
      animation: rotate-pulse 15s linear infinite;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 60px;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    /* LEFT TEXT PANEL */
    .about-text-panel {
      padding-right: 20px;
    }

    .tech-badge {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: rgba(44, 59, 45, 0.05); /* very light verde-musgo */
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
      background-color: var(--fst-color-highlight); /* Ouro vintage */
      border-radius: 50%;
      box-shadow: 0 0 10px var(--fst-color-highlight);
      animation: pulse 2s infinite ease-in-out;
    }

    .gradient-title {
      font-family: var(--fst-font-primary);
      font-size: 3.8rem;
      line-height: 1.1;
      margin-bottom: 24px;
      color: var(--fst-color-primary);
    }
    .gradient-title span {
      background: linear-gradient(90deg, var(--fst-color-primary) 0%, var(--fst-color-highlight) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: block;
    }

    .lead-tech {
      font-size: 1.25rem;
      font-weight: 500;
      color: var(--fst-color-secondary);
      margin-bottom: 20px;
    }
    .body-tech {
      color: var(--fst-color-secondary);
      opacity: 0.8;
      line-height: 1.7;
      margin-bottom: 50px;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .future-stat-box {
      background: rgba(255, 255, 255, 0.5);
      border-left: 3px solid var(--fst-color-highlight);
      padding: 16px 20px;
      border-radius: 0 12px 12px 0;
      box-shadow: 0 8px 20px rgba(0,0,0,0.03);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      transition: transform var(--fst-transition-base);
    }
    .future-stat-box:hover {
      transform: translateX(5px);
    }
    .st-label {
      font-family: var(--fst-font-secondary);
      font-size: 0.8rem;
      color: var(--fst-color-tertiary);
      font-weight: 700;
      letter-spacing: 1.5px;
      margin-bottom: 6px;
    }
    .st-value {
      font-family: var(--fst-font-primary);
      font-size: 1.5rem;
      color: var(--fst-color-primary);
      font-weight: 700;
      margin-bottom: 0;
      line-height: 1.2;
    }

    /* RIGHT MEDIA PANEL */
    .about-media {
      position: relative;
    }
    .media-container {
      position: relative;
      border-radius: 20px;
      padding: 12px;
      background: rgba(255, 255, 255, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0 20px 40px rgba(0,0,0,0.08);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      margin-right: 20px;
      /* Float animation */
      animation: float 6s ease-in-out infinite;
    }
    .tech-img {
      width: 100%;
      height: 480px;
      object-fit: cover;
      border-radius: 12px;
      display: block;
    }
    
    .glass-overlay-metric {
      position: absolute;
      bottom: -20px;
      left: -40px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.5);
      padding: 20px 24px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      gap: 16px;
      box-shadow: 0 15px 35px rgba(0,0,0,0.1);
      /* Reverse float so it moves uniquely */
      animation: float 5s ease-in-out infinite reverse;
    }
    .metric-ring {
      width: 44px; height: 44px;
      border: 3px solid var(--fst-color-highlight);
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 3s linear infinite;
    }
    .metric-data strong {
      display: block;
      font-family: var(--fst-font-primary);
      font-size: 1.8rem;
      color: var(--fst-color-primary);
      line-height: 1;
      margin-bottom: 2px;
    }
    .metric-data span {
      font-family: var(--fst-font-secondary);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--fst-color-secondary);
      font-weight: 700;
    }

    /* KEYFRAMES */
    @keyframes spin { 100% { transform: rotate(360deg); } }
    @keyframes pulse { 
      0%, 100% { transform: scale(1); opacity: 1; } 
      50% { transform: scale(1.6); opacity: 0.4; } 
    }
    @keyframes float { 
      0%, 100% { transform: translateY(0); } 
      50% { transform: translateY(-12px); } 
    }
    @keyframes rotate-pulse { 
      0% { transform: rotate(0deg) scale(1); } 
      50% { transform: rotate(180deg) scale(1.1); } 
      100% { transform: rotate(360deg) scale(1); } 
    }

    /* RESPONSIVE */
    @media (max-width: 991px) {
      .about-grid { grid-template-columns: 1fr; gap: 60px; }
      .about-text-panel { padding-right: 0; }
      .media-container { margin-right: 0; }
      .tech-img { height: 350px; }
      .glass-overlay-metric { left: 10px; bottom: -20px; }
      .gradient-title { font-size: 2.8rem; }
    }
    @media (max-width: 768px) {
      .stats-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class AboutComponent { }
