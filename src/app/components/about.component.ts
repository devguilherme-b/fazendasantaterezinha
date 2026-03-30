import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-wrapper relative">
      <div class="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#2C3B2D" fill-opacity="1" d="M0,64L80,69.3C160,75,320,85,480,122.7C640,160,800,224,960,218.7C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      <section id="historia" class="future-agro-section dark-mode">
        <!-- Optical Grid Background -->
        <div class="hud-grid-bg"></div>

        <div class="container relative z-10">
          <div class="about-grid">
            
            <!-- LEFT PANEL: Texts & HUD Mission -->
            <div class="about-text-panel">
              <div class="tech-badge-cyber">
                <span class="cyber-dot"></span> HISTÓRICO // ARQUIVO FAMILIAR
              </div>
              
              <h2 class="cyber-title">A História da Família <br><span>Bortolozzo</span></h2>
              
              <div class="cyber-glass-panel">
                <p class="lead-cyber">Mais do que uma propriedade rural, somos o retrato vivo de gerações dedicadas à terra. Sob o olhar zeloso da nossa matriarca, Sra. Maria Elvira Bortolozzo, cultivamos valores que resistem ao tempo.</p>
                <div class="neon-divider"></div>
                <p class="body-cyber">
                  Aqui, o trabalho é feito com as mãos e o coração. Cada hectare conta uma história de superação, união e respeito à natureza. Tratar cada cliente como parte da nossa história garante a qualidade que só quem cuida do que é seu com amor consegue entregar.
                </p>
              </div>
              
              <div class="mission-hud">
                <div class="hud-bracket top-left"></div>
                <div class="hud-bracket bottom-right"></div>
                <div class="hud-content">
                  <p class="hud-label"><span class="blink">_</span> DIRETRIZ SECUNDÁRIA: MISSÃO</p>
                  <p class="hud-text">Produzir alimentos de excelência com respeito à natureza e à tradição familiar, garantindo que cada produto carregue o amor e a dedicação de gerações.</p>
                </div>
              </div>
            </div>

            <!-- RIGHT PANEL: Media Fader HUD -->
            <div class="about-media">
               <div class="fader-hud-container">
                 <!-- 4 HUD Corners -->
                 <div class="hud-frame-corners">
                   <span class="c-tl"></span><span class="c-tr"></span><span class="c-bl"></span><span class="c-br"></span>
                 </div>
                 
                 <!-- Holographic Scanner Line -->
                 <div class="scanner-line"></div>
                 
                 <!-- Fading Images -->
                 <img src="assets/media/gallery-6.png" alt="Familia Bortollozo" [class.active]="currentSlide === 0" class="fader-img" />
                 <img src="assets/media/drone-processing.jpg" alt="Megainfraestrutura" [class.active]="currentSlide === 1" class="fader-img" />
                 <img src="assets/media/drone-fields.jpg" alt="Visão Aérea Lavouras" [class.active]="currentSlide === 2" class="fader-img" />
                 <img src="assets/media/gallery-4.jpg" alt="Plantio Jovem" [class.active]="currentSlide === 3" class="fader-img" />
                 <img src="assets/media/drone-overview.jpg" alt="Campo em Escala" [class.active]="currentSlide === 4" class="fader-img" />
                 
                 <!-- Sci-Fi Overlay info -->
                 <div class="fader-overlay"></div>
                 <div class="fader-data">
                    <div class="f-left">
                       <span class="record-dot"></span> LIVE FEED
                    </div>
                    <div class="f-right">
                       <span class="coord-data">CAM: 0{{currentSlide + 1}} // TELEMETRIA ON</span>
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
    /* WRAPPER & BACKGROUNDS */
    .about-wrapper {
      position: relative;
      background: var(--fst-color-bg-primary); /* For above wave compatibility */
    }
    .wave-divider {
      position: absolute;
      bottom: calc(100% - 2px);
      left: 0;
      width: 100%;
      line-height: 0;
      z-index: 15;
    }
    .wave-divider svg {
      width: 100%; height: 8vw;
      min-height: 50px; max-height: 120px;
      display: block; transform: translateY(1px);
    }
    .future-agro-section.dark-mode {
      padding: 100px 0 140px 0;
      position: relative;
      // background: #0b120c; /* Dark base */
      background: var(--fst-color-primary); /* For above wave compatibility */
      overflow: hidden;
    }
    .hud-grid-bg {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background-image: 
        linear-gradient(rgba(200, 169, 110, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(200, 169, 110, 0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      z-index: 0;
    }
    .relative { position: relative; }
    .z-10 { z-index: 10; }

    /* LAYOUT GRID */
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    /* LEFT TEXT PANEL */
    .tech-badge-cyber {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 8px 16px;
      border: 1px solid rgba(200, 169, 110, 0.3);
      background: rgba(200, 169, 110, 0.05);
      border-radius: 2px;
      font-family: var(--fst-font-secondary);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 3px;
      color: rgba(200, 169, 110, 0.9);
      margin-bottom: 24px;
      box-shadow: 0 0 15px rgba(200, 169, 110, 0.1) inset;
    }
    .cyber-dot {
      width: 6px; height: 6px;
      background-color: var(--fst-color-highlight);
      box-shadow: 0 0 8px var(--fst-color-highlight);
      animation: pulse-cyber 1.5s infinite;
    }

    .cyber-title {
      font-family: var(--fst-font-primary);
      font-size: clamp(3rem, 4.5vw, 4rem);
      line-height: 1.1;
      margin-bottom: 30px;
      color: #ffffff;
      text-shadow: 0 0 20px rgba(0,0,0,0.8);
    }
    .cyber-title span {
      background: linear-gradient(90deg, #ffffff 0%, var(--fst-color-highlight) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .cyber-glass-panel {
      background: rgba(20, 30, 22, 0.6);
      border-left: 3px solid rgba(200, 169, 110, 0.5);
      padding: 24px 30px;
      border-radius: 0 8px 8px 0;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      margin-bottom: 40px;
      position: relative;
    }
    .lead-cyber {
      font-size: 1.15rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 16px;
      line-height: 1.6;
    }
    .neon-divider {
      width: 40px; height: 1px;
      background: var(--fst-color-highlight);
      margin-bottom: 16px;
      box-shadow: 0 0 5px var(--fst-color-highlight);
    }
    .body-cyber {
      color: rgba(255, 255, 255, 0.65);
      font-size: 0.95rem;
      line-height: 1.7;
      margin: 0;
    }

    .mission-hud {
      position: relative;
      padding: 20px 24px;
      background: linear-gradient(90deg, rgba(200, 169, 110, 0.08) 0%, transparent 100%);
      border: 1px solid rgba(44, 59, 45, 0.8);
    }
    .hud-bracket {
      position: absolute;
      width: 15px; height: 15px;
      border: 2px solid var(--fst-color-highlight);
    }
    .top-left { top: -2px; left: -2px; border-right: none; border-bottom: none; }
    .bottom-right { bottom: -2px; right: -2px; border-left: none; border-top: none; }
    .hud-label {
      font-family: var(--fst-font-secondary);
      font-size: 0.75rem;
      color: var(--fst-color-highlight);
      font-weight: 700;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }
    .hud-text {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1rem;
      line-height: 1.6;
      margin: 0;
    }

    /* RIGHT MEDIA PANEL (Fader) */
    .about-media {
      position: relative;
      display: flex;
      justify-content: flex-end;
    }
    .fader-hud-container {
      position: relative;
      width: 100%;
      height: 550px;
      background: #050a06;
      border: 1px solid rgba(200, 169, 110, 0.2);
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(200, 169, 110, 0.05) inset;
    }
    
    .hud-frame-corners span {
      position: absolute;
      width: 30px; height: 30px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      z-index: 5;
    }
    .c-tl { top: 15px; left: 15px; border-right: none; border-bottom: none; }
    .c-tr { top: 15px; right: 15px; border-left: none; border-bottom: none; }
    .c-bl { bottom: 15px; left: 15px; border-right: none; border-top: none; }
    .c-br { bottom: 15px; right: 15px; border-left: none; border-top: none; }

    .scanner-line {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 2px;
      background: var(--fst-color-highlight);
      box-shadow: 0 0 15px var(--fst-color-highlight), 0 0 5px #fff;
      opacity: 0.6;
      z-index: 6;
      animation: scan 6s linear infinite;
    }

    .fader-img {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      object-fit: cover;
      opacity: 0;
      transform: scale(1.05);
      transition: opacity 1.5s ease-in-out, transform 6s linear;
      z-index: 1;
    }
    .fader-img.active {
      opacity: 1;
      transform: scale(1);
      z-index: 2;
    }

    /* O overlay azul/escuro cibernético por cima das fotos */
    .fader-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(180deg, rgba(11, 18, 12, 0.2) 0%, rgba(11, 18, 12, 0.8) 100%);
      z-index: 3;
      pointer-events: none;
    }

    .fader-data {
      position: absolute;
      bottom: 25px; left: 30px; right: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 4;
      font-family: var(--fst-font-secondary);
      font-size: 0.7rem;
      letter-spacing: 2px;
      color: #fff;
    }
    .f-left { display: flex; align-items: center; gap: 8px; }
    .record-dot {
      width: 8px; height: 8px;
      background: red;
      border-radius: 50%;
      box-shadow: 0 0 8px red;
      animation: blink 1s infinite;
    }
    .coord-data {
      color: rgba(200, 169, 110, 0.8);
      font-family: monospace;
    }

    /* KEYFRAMES */
    @keyframes scan {
      0% { top: 0; opacity: 0; }
      10% { opacity: 0.6; }
      90% { opacity: 0.6; }
      100% { top: 100%; opacity: 0; }
    }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
    @keyframes pulse-cyber { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } }

    /* RESPONSIVE */
    @media (max-width: 991px) {
      .about-grid { grid-template-columns: 1fr; gap: 40px; }
      .about-text-panel { padding-right: 0; }
      .cyber-title { font-size: 2.5rem; }
      .fader-hud-container { height: 400px; }
    }
  `]
})
export class AboutComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  totalSlides = 4;
  slideInterval: any;

  ngOnInit() {
    this.slideInterval = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    }, 4500); // 4.5 sec por foto
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }
}

