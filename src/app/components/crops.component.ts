import { Component } from '@angular/core';

@Component({
  selector: 'app-crops',
  standalone: true,
  template: `
    <section id="estrutura" class="future-crops-section section-padding">
      <!-- tech grid background -->
      <div class="crops-tech-grid"></div>

      <div class="container relative">
        <div class="text-center">
          <div class="tech-badge mx-auto">
            <span class="pulse-dot"></span> ECOSSISTEMA PRODUTIVO
          </div>
          <h2 class="gradient-title-light">Cafeicultura em <span>Alta Precisão</span></h2>
          <p class="subtitle-tech">Infraestrutura tecnológica de ponta integrando dados desde o plantio até o processamento pós-colheita dos grãos.</p>
        </div>
        
        <div class="crops-glass-grid">
          
          <!-- Card 1 -->
          <div class="glass-crop-card">
            <div class="card-image-wrapper">
              <img src="assets/media/gallery-4.jpg" alt="Campo de Café">
              <div class="hologram-overlay"></div>
              <div class="status-tab"><span>LIVE</span> // MANEJO</div>
            </div>
            <div class="card-tech-content">
              <div class="tech-icon-wrapper">
                 <div class="tech-icon-hex">📡</div>
              </div>
              <h3>Manejo Preditivo</h3>
              <p>Mapeamento contínuo da saúde dos cafeeiros via drones e sensores ópticos, assegurando nutrição exata, controle fitossanitário e zelo sustentável pelo solo.</p>
              <a href="#historia" class="tech-link">Ver detalhes &rarr;</a>
            </div>
          </div>
          
          <!-- Card 2 -->
          <div class="glass-crop-card">
            <div class="card-image-wrapper">
              <img src="assets/media/gallery-1.jpg" alt="Infraestrutura de Processamento">
              <div class="hologram-overlay"></div>
              <div class="status-tab"><span class="blue-dot">SYS</span> // PÓS-COLHEITA</div>
            </div>
            <div class="card-tech-content">
              <div class="tech-icon-wrapper">
                 <div class="tech-icon-hex">⚙️</div>
              </div>
              <h3>Beneficiamento Ágil</h3>
              <p>Planta de processamento 4.0 equipada com secadores de última geração e separação óptica gravimétrica para garantir a máxima qualidade em cada micromote de grãos especiais.</p>
              <a href="#historia" class="tech-link">Ver detalhes &rarr;</a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  `,
  styles: [`
    .relative { position: relative; z-index: 10; }
    
    .future-crops-section {
      background-color: var(--fst-color-bg-tertiary); /* Fundo Deep-Brown/Green */
      color: white;
      position: relative;
      overflow: hidden;
      padding: 120px 0;
    }
    
    /* TECH GRID BG */
    .crops-tech-grid {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      background-size: 40px 40px;
      z-index: 1;
    }

    .text-center {
      text-align: center;
      margin-bottom: 70px;
    }

    /* BADGE OVERRIDE FOR DARK BG */
    .tech-badge {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      padding: 8px 18px;
      border-radius: 30px;
      font-family: var(--fst-font-secondary);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 2.5px;
      color: var(--fst-color-highlight);
      margin-bottom: 24px;
    }
    .pulse-dot {
      width: 8px; height: 8px;
      background-color: var(--fst-color-highlight);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--fst-color-highlight);
      animation: pulse 2s infinite ease-in-out;
    }
    .blue-dot {
      color: #60A5FA !important;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.6); opacity: 0.4; }
    }

    .gradient-title-light {
      font-family: var(--fst-font-primary);
      font-size: 3.5rem;
      line-height: 1.2;
      margin-bottom: 24px;
      color: white;
    }
    .gradient-title-light span {
      background: linear-gradient(90deg, #FFFFFF 0%, var(--fst-color-highlight) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .subtitle-tech {
      font-family: var(--fst-font-secondary);
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.25rem;
      max-width: 650px;
      margin: 0 auto;
      font-weight: 300;
      line-height: 1.6;
    }

    .crops-glass-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 40px;
      position: relative;
    }

    /* CARDS */
    .glass-crop-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 15px 35px rgba(0,0,0,0.2);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      transition: all var(--fst-transition-base);
    }
    .glass-crop-card:hover {
      transform: translateY(-8px);
      border-color: rgba(200, 169, 110, 0.3);
      box-shadow: 0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(255, 255, 255, 0.02);
    }

    .card-image-wrapper {
      position: relative;
      height: 280px;
      overflow: hidden;
    }
    .card-image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.8s ease;
    }
    .glass-crop-card:hover .card-image-wrapper img {
      transform: scale(1.05);
    }
    .hologram-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(180deg, rgba(44,59,45,0) 40%, rgba(44,59,45,0.7) 100%);
      pointer-events: none;
    }
    .status-tab {
      position: absolute;
      top: 20px; right: 20px;
      background: rgba(0,0,0,0.6);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.15);
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 1px;
      color: rgba(255,255,255,0.9);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .status-tab span {
      color: #10B981; /* Neon green indicator */
    }

    .card-tech-content {
      padding: 40px 32px 40px 32px;
      position: relative;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .tech-icon-wrapper {
      position: absolute;
      top: -28px; left: 32px;
      width: 56px; height: 56px;
      background: var(--fst-color-bg-tertiary);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 20px rgba(0,0,0,0.4);
      z-index: 10;
    }
    .tech-icon-hex {
      font-size: 1.5rem;
    }

    .card-tech-content h3 {
      font-family: var(--fst-font-primary);
      font-size: 2rem;
      color: var(--fst-color-highlight);
      margin-top: 8px;
      margin-bottom: 16px;
    }
    .card-tech-content p {
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.7;
      font-size: 1rem;
      margin-bottom: 24px;
      flex-grow: 1;
    }
    .tech-link {
      color: var(--fst-color-highlight);
      font-family: var(--fst-font-secondary);
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      text-decoration: none;
      align-self: flex-start;
      transition: color var(--fst-transition-base);
    }
    .tech-link:hover {
      color: white;
    }

    @media (max-width: 768px) {
      .crops-glass-grid { grid-template-columns: 1fr; }
      .gradient-title-light { font-size: 2.8rem; }
    }
  `]
})
export class CropsComponent {}
