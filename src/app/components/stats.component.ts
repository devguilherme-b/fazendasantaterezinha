import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  template: `
    <section class="stats-section section-padding">
      <div class="container text-center">
        <h2 class="section-title">Nossos Pilares</h2>
        <p class="section-subtitle">Conheça mais sobre a nossa essência e impacto de ponta a ponta.</p>
        
        <div class="premium-grid">
          <!-- Card 1 -->
          <div class="premium-card">
            <div class="card-bg" style="background-image: url('assets/media/gallery-1.jpg');"></div>
            <div class="card-overlay"></div>
            <div class="card-content">
              <div class="icon-circle">🌱</div>
              <div class="stat-title">25+ Anos</div>
              <div class="stat-desc">De tradição e excelência cultivando o futuro do agronegócio brasileiro.</div>
              <button class="btn-explore">Explorar &rarr;</button>
            </div>
          </div>
          
          <!-- Card 2 -->
          <div class="premium-card">
            <div class="card-bg" style="background-image: url('assets/media/gallery-2.jpg');"></div>
            <div class="card-overlay"></div>
            <div class="card-content">
              <div class="icon-circle">🚜</div>
              <div class="stat-title">10k Hectares</div>
              <div class="stat-desc">De área cultivada com o mais alto rigor de sustentabilidade e tecnologia.</div>
              <button class="btn-explore">Explorar &rarr;</button>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="premium-card">
            <div class="card-bg" style="background-image: url('assets/media/gallery-3.jpg');"></div>
            <div class="card-overlay"></div>
            <div class="card-content">
              <div class="icon-circle">👥</div>
              <div class="stat-title">500+ Pessoas</div>
              <div class="stat-desc">Colaboradores diretos que transformam o agronegócio todos os dias.</div>
              <button class="btn-explore">Explorar &rarr;</button>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="premium-card">
            <div class="card-bg" style="background-image: url('assets/media/gallery-4.jpg');"></div>
            <div class="card-overlay"></div>
            <div class="card-content">
              <div class="icon-circle">🌾</div>
              <div class="stat-title">200k Toneladas</div>
              <div class="stat-desc">De safra anual, entregando máxima qualidade do campo à mesa.</div>
              <button class="btn-explore">Explorar &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .stats-section {
      background-color: var(--fst-color-bg-primary); /* Marfim */
    }
    .text-center {
      text-align: center;
    }
    .section-title {
      font-size: 2.8rem;
      color: var(--fst-color-primary);
      margin-bottom: 8px;
    }
    .section-subtitle {
      font-size: 1.1rem;
      color: var(--fst-color-secondary);
      margin-bottom: 48px;
    }
    .premium-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 24px;
      text-align: left;
    }
    .premium-card {
      position: relative;
      height: 420px;
      border-radius: 16px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      cursor: pointer;
    }
    .card-bg {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background-size: cover;
      background-position: center;
      transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      z-index: 1;
    }
    .premium-card:hover .card-bg {
      transform: scale(1.08);
    }
    .card-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(180deg, rgba(44, 59, 45, 0) 20%, rgba(44, 59, 45, 0.85) 75%, rgba(44, 59, 45, 0.95) 100%);
      z-index: 2;
    }
    .card-content {
      position: relative;
      z-index: 3;
      padding: 32px 24px;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .icon-circle {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background-color: var(--fst-color-highlight); /* Ouro vintage */
      color: var(--fst-color-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      margin-bottom: 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    .stat-title {
      font-family: var(--fst-font-secondary);
      font-weight: 800;
      font-size: 1.5rem;
      margin-bottom: 8px;
      color: #FFFFFF;
      letter-spacing: -0.5px;
    }
    .stat-desc {
      font-family: var(--fst-font-secondary);
      font-size: 0.95rem;
      line-height: 1.4;
      margin-bottom: 24px;
      color: rgba(255, 255, 255, 0.85);
    }
    .btn-explore {
      background-color: rgba(44, 59, 45, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      padding: 8px 18px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all var(--fst-transition-base);
    }
    .premium-card:hover .btn-explore {
      background-color: var(--fst-color-secondary);
      border-color: var(--fst-color-highlight);
      padding-left: 22px;
      padding-right: 14px;
    }
  `]
})
export class StatsComponent {}
