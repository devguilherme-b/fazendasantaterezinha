import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crops',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="estrutura" class="future-crops-section relative">
      <!-- ambient backdrop -->
      <div class="ambient-glow"></div>
      <div class="crops-tech-grid"></div>

      <div class="container relative z-10">
        <div class="header-center">
          <div class="tech-badge">
            <span class="pulse-dot"></span> 
            ECOSSISTEMA PRODUTIVO // ESTRUTURA
          </div>
          <h2 class="section-title">Excelência em <span class="gold">Larga Escala</span></h2>
          <p class="section-subtitle">Infraestrutura desenhada para aliar produtividade com consistência de qualidade, do solo à xícara.</p>
        </div>
        
        <div class="crops-glass-grid">
          
          <!-- Card 1 -->
          <div class="glass-crop-card">
            <div class="card-image-wrapper">
              <img src="assets/media/gallery-4.jpg" alt="Campo de Café">
              <div class="hologram-overlay"></div>
              <div class="status-tab"><span>LIVE</span> // CAMPO / PRODUÇÃO</div>
            </div>
            <div class="card-tech-content">
              <div class="tech-icon-wrapper">
                <div class="tech-icon-hex">🚜</div>
              </div>
              <h3>Manejo e Plantio Moderno</h3>
              <p>Mecanização avançada e agricultura de precisão. Lavouras protegidas e renovadas com mudas sadias, garantindo solo fértil e produção sustentável.</p>
              <a [routerLink]="['/']" fragment="localizacao" (click)="scrollToSection('localizacao')" class="tech-link">Conheça nosso manejo &rarr;</a>
            </div>
          </div>
          
          <!-- Card 2 -->
          <div class="glass-crop-card">
            <div class="card-image-wrapper">
              <img src="assets/media/drone-processing.jpg" alt="Infraestrutura de Processamento">
              <div class="hologram-overlay"></div>
              <div class="status-tab"><span class="blue-dot">EST</span> // PÓS-COLHEITA / SECAGEM</div>
            </div>
            <div class="card-tech-content">
              <div class="tech-icon-wrapper">
                <div class="tech-icon-hex">⚙️</div>
              </div>
              <h3>Beneficiamento de Alta Capacidade</h3>
              <p>Estrutura equipada com terreiros pavimentados e secadores mecânicos de fluxo contínuo, assegurando padronização total para exportação.</p>
              <a [routerLink]="['/']" fragment="localizacao" (click)="scrollToSection('localizacao')" class="tech-link">Veja a tecnologia &rarr;</a>
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
      --fst-green-oliva: #4A5C3A;
    }

    .future-crops-section {
      background-color: #0b120c;
      color: var(--fst-marfim);
      position: relative;
      overflow: hidden;
      padding: 140px 0;
    }

    .ambient-glow {
      position: absolute;
      top: 0; right: 0;
      width: 60vw; height: 60vw;
      background: radial-gradient(circle, rgba(200,169,110,0.04) 0%, transparent 70%);
      pointer-events: none;
    }
    
    .crops-tech-grid {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background-image: 
        linear-gradient(rgba(200, 169, 110, 0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(200, 169, 110, 0.02) 1px, transparent 1px);
      background-size: 50px 50px;
    }

    .header-center {
      text-align: center;
      margin-bottom: 80px;
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
      margin-bottom: 30px;
    }
    .pulse-dot {
      width: 8px; height: 8px;
      background-color: var(--fst-gold);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--fst-gold);
      animation: pulse 2s infinite ease-in-out;
    }
    .blue-dot { color: #60A5FA !important; }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.6); opacity: 0.4; }
    }

    .section-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(3rem, 6vw, 4.5rem);
      color: #fff;
      margin-bottom: 20px;
    }
    .gold { color: var(--fst-gold); font-style: italic; }
    
    .section-subtitle {
      font-family: 'Jost', sans-serif;
      color: rgba(245, 237, 217, 0.6);
      font-size: 1.2rem;
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .crops-glass-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 40px;
    }

    .glass-crop-card {
      background: rgba(255, 255, 255, 0.02);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 20px;
      overflow: hidden;
      transition: all 0.5s ease;
      display: flex;
      flex-direction: column;
    }
    .glass-crop-card:hover {
      transform: translateY(-10px);
      border-color: rgba(200, 169, 110, 0.2);
      background: rgba(255, 255, 255, 0.04);
    }

    .card-image-wrapper {
      position: relative;
      height: 300px;
      overflow: hidden;
    }
    .card-image-wrapper img {
      width: 100%; height: 100%;
      object-fit: cover;
      opacity: 0.75;
      transition: all 0.8s ease;
    }
    .glass-crop-card:hover .card-image-wrapper img {
      opacity: 0.9;
      transform: scale(1.05);
    }
    .hologram-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(to bottom, transparent, rgba(11, 18, 12, 0.8));
    }
    .status-tab {
      position: absolute;
      top: 25px; right: 25px;
      background: rgba(0,0,0,0.6);
      padding: 6px 14px;
      border-radius: 4px;
      font-size: 0.7rem;
      font-family: monospace;
      color: #fff;
      display: flex; align-items: center; gap: 8px;
    }

    .card-tech-content {
      padding: 50px 40px;
      position: relative;
    }
    .tech-icon-wrapper {
      position: absolute;
      top: -30px; left: 40px;
      width: 60px; height: 60px;
      background: #1a231b;
      border: 1px solid var(--fst-gold);
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 10px 20px rgba(0,0,0,0.4);
    }

    .card-tech-content h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.2rem;
      margin-bottom: 20px;
      color: var(--fst-gold);
    }
    .card-tech-content p {
      font-family: 'Jost', sans-serif;
      font-size: 1rem;
      line-height: 1.7;
      color: rgba(245, 237, 217, 0.7);
      margin-bottom: 30px;
    }
    .tech-link {
      font-family: 'Jost', sans-serif;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--fst-gold);
      text-decoration: none;
      transition: all 0.3s ease;
    }
    .tech-link:hover { color: #fff; transform: translateX(5px); }

    @media (max-width: 768px) {
      .crops-glass-grid { grid-template-columns: 1fr; }
      .card-tech-content { padding: 40px 30px; }
    }
  `]
})
export class CropsComponent {
  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
