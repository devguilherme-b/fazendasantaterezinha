import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="historia" class="about-wrapper relative">
      <!-- Decorative Backdrop Elements -->
      <div class="ambient-glow"></div>
      
      <section class="future-agro-section">
        <!-- Sci-Fi Grid Background -->
        <div class="hud-grid-overlay"></div>

        <div class="container relative z-10">
          <div class="about-flex-header">
            <div class="tech-badge">
              <span class="badge-dot"></span> 
              ESTABELECIDA // 1950 
            </div>
            <div class="tradition-badge">
              +70 ANOS DE TRADIÇÃO
            </div>
          </div>

          <div class="about-grid">
            
            <!-- CONTENT SIDE -->
            <div class="about-content">
              <h2 class="section-title">
                Excelência que <br>
                <span class="highlight">Atravessa Gerações</span>
              </h2>
              
              <div class="glass-story-panel">
                <p class="lead-text">
                  Conduzida pela família Bortolozzo, a Fazenda Santa Terezinha integra tradição e tecnologia de ponta na produção de café arábica de alta qualidade.
                </p>
                <p class="body-text">
                  Com estrutura industrial completa e cultivo 100% irrigado via fertirrigação, garantimos rigoroso controle de qualidade do campo à finalização. Nossa localização estratégica em São Paulo facilita o acesso aos principais centros globais, entregando um produto que carrega história em cada grão.
                </p>
              </div>

              <!-- VALUES HUD -->
              <div class="values-grid">
                <div class="value-card">
                  <div class="value-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <div class="value-info">
                    <h4>Inovação</h4>
                    <p>Tecnologia industrial de última geração.</p>
                  </div>
                </div>
                <div class="value-card">
                  <div class="value-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <div class="value-info">
                    <h4>Integridade</h4>
                    <p>Ética e transparência em cada processo.</p>
                  </div>
                </div>
                <div class="value-card">
                  <div class="value-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
                  <div class="value-info">
                    <h4>Qualidade</h4>
                    <p>Rigoroso padrão de café arábica.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- VISUAL SIDE (HUD IMAGES) -->
            <div class="about-visuals">
              <div class="hologram-frame">
                <!-- Optical Corner Accents -->
                <div class="corner tl"></div><div class="corner tr"></div>
                <div class="corner bl"></div><div class="corner br"></div>
                
                <div class="image-fader">
                  <img src="assets/media/gallery-6.png" [class.active]="currentSlide === 0" alt="Família Bortolozzo" />
                  <img src="assets/media/drone-processing.jpg" [class.active]="currentSlide === 1" alt="Indústria de Café" />
                  <img src="assets/media/drone-fields.jpg" [class.active]="currentSlide === 2" alt="Lavouras Irrigadas" />
                </div>

                <div class="telemetry-overlay">
                  <div class="t-left">
                    <div class="status-indicator">
                      <span class="pulsing-red"></span> LIVE_FEED
                    </div>
                  </div>
                  <div class="t-right">
                    SCAN_0{{currentSlide + 1}} // COORD: -22.058, -48.319
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    /* COLOR SYSTEM */
    :host {
      --fst-green-musgo: #2C3B2D;
      --fst-green-oliva: #4A5C3A;
      --fst-gold: #C8A96E;
      --fst-marfim: #F5EDD9;
      --fst-terra: #5C3D1E;
      --fst-cafe: #8B6340;
    }

    .about-wrapper {
      background: var(--fst-green-musgo);
      color: var(--fst-marfim);
      overflow: hidden;
      position: relative;
    }

    .ambient-glow {
      position: absolute;
      top: 50%; left: 0;
      width: 50vw; height: 50vw;
      background: radial-gradient(circle, rgba(200, 169, 110, 0.05) 0%, transparent 70%);
      transform: translateY(-50%);
      pointer-events: none;
    }

    .hud-grid-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background-image: radial-gradient(rgba(200, 169, 110, 0.08) 1px, transparent 1px);
      background-size: 40px 40px;
      opacity: 0.5;
    }

    .future-agro-section {
      padding: 140px 0;
      position: relative;
    }

    /* HEADER ELEMENTS */
    .about-flex-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 50px;
    }

    .tech-badge {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 8px 16px;
      border: 1px solid rgba(200, 169, 110, 0.3);
      font-family: 'Jost', sans-serif;
      font-size: 0.75rem;
      letter-spacing: 3px;
      color: var(--fst-gold);
      background: rgba(200, 169, 110, 0.05);
    }
    .badge-dot {
      width: 6px; height: 6px;
      background: var(--fst-gold);
      box-shadow: 0 0 8px var(--fst-gold);
      border-radius: 50%;
    }

    .tradition-badge {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.2rem;
      font-style: italic;
      color: rgba(255, 255, 255, 0.8);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding-bottom: 4px;
    }

    /* GRID LAYOUT */
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 100px;
      align-items: center;
    }

    /* CONTENT SIDE */
    .section-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(3rem, 5vw, 4.5rem);
      line-height: 1.1;
      margin-bottom: 40px;
      color: #fff;
    }
    .highlight {
      color: var(--fst-gold);
      font-style: italic;
    }

    .glass-story-panel {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border-left: 3px solid var(--fst-gold);
      padding: 30px 40px;
      margin-bottom: 60px;
      border-radius: 0 10px 10px 0;
    }
    .lead-text {
      font-family: 'Jost', sans-serif;
      font-size: 1.25rem;
      font-weight: 500;
      color: var(--fst-marfim);
      margin-bottom: 20px;
      line-height: 1.4;
    }
    .body-text {
      font-family: 'Jost', sans-serif;
      font-size: 1.05rem;
      color: rgba(245, 237, 217, 0.7);
      line-height: 1.7;
      margin: 0;
    }

    .values-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }
    .value-card {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    .value-icon {
      width: 50px; height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(200, 169, 110, 0.1);
      border: 1px solid rgba(200, 169, 110, 0.2);
      color: var(--fst-gold);
      border-radius: 8px;
    }
    .value-icon svg { width: 24px; height: 24px; }
    .value-info h4 {
      font-family: 'Jost', sans-serif;
      font-size: 1.1rem;
      margin: 0 0 4px 0;
      color: #fff;
    }
    .value-info p {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.5);
      margin: 0;
    }

    /* VISUAL SIDE */
    .about-visuals {
      position: relative;
    }
    .hologram-frame {
      position: relative;
      height: 600px;
      border: 1px solid rgba(200, 169, 110, 0.15);
      padding: 20px;
      background: rgba(5, 10, 6, 0.4);
    }
    
    .corner {
      position: absolute;
      width: 20px; height: 20px;
      border: 2px solid var(--fst-gold);
      z-index: 5;
    }
    .tl { top: -1px; left: -1px; border-right: none; border-bottom: none; }
    .tr { top: -1px; right: -1px; border-left: none; border-bottom: none; }
    .bl { bottom: -1px; left: -1px; border-right: none; border-top: none; }
    .br { bottom: -1px; right: -1px; border-left: none; border-top: none; }

    .image-fader {
      position: relative;
      width: 100%; height: 100%;
      overflow: hidden;
    }
    .image-fader img {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      object-fit: cover;
      opacity: 0;
      transform: scale(1.1);
      transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .image-fader img.active {
      opacity: 0.6;
      transform: scale(1);
    }

    .telemetry-overlay {
      position: absolute;
      bottom: 40px; left: 40px; right: 40px;
      display: flex;
      justify-content: space-between;
      font-family: monospace;
      font-size: 0.7rem;
      color: var(--fst-gold);
      letter-spacing: 2px;
      z-index: 10;
    }
    .status-indicator {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .pulsing-red {
      width: 8px; height: 8px;
      background: #ff4444;
      border-radius: 50%;
      box-shadow: 0 0 10px #ff4444;
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.2); }
      100% { opacity: 1; transform: scale(1); }
    }

    @media (max-width: 991px) {
      .about-grid { grid-template-columns: 1fr; gap: 60px; }
      .hologram-frame { height: 400px; }
      .values-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class AboutComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  totalSlides = 3;
  slideInterval: any;

  ngOnInit() {
    this.slideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    }, 5000);
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}

