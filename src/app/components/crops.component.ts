import { Component } from '@angular/core';

@Component({
  selector: 'app-crops',
  standalone: true,
  template: `
    <section id="estrutura" class="section-padding crops-section">
      <div class="container">
        <div class="text-center">
          <span class="badge-pill">Estrutura Produtiva</span>
          <h2 class="title-light">Operação e Cultura</h2>
          <p class="subtitle-light">Nossas matrizes de produção e infraestrutura de campo.</p>
        </div>
        
        <div class="crops-grid">
          <div class="crop-card">
            <div class="card-bg" style="background-image: url('/assets/media/gallery-4.jpg')"></div>
            <div class="card-content">
              <h3>Agricultura</h3>
              <p>Manejo eficiente e sustentável visando a preservação do solo e alta produtividade.</p>
            </div>
          </div>
          
          <div class="crop-card">
            <div class="card-bg" style="background-image: url('/assets/media/gallery-1.jpg')"></div>
            <div class="card-content">
              <h3>Infraestrutura</h3>
              <p>Estrutura de ponta para acompanhamento, preparo e processamento ágil.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .crops-section {
      background-color: var(--fst-color-primary);
      color: var(--fst-color-bg-primary);
    }
    .text-center {
      text-align: center;
      margin-bottom: 60px;
    }
    .title-light {
      color: var(--fst-color-highlight);
      font-size: 3rem;
      margin-bottom: 16px;
    }
    .subtitle-light {
      color: var(--fst-color-bg-secondary);
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto;
    }
    .crops-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 32px;
    }
    .crop-card {
      position: relative;
      height: 400px;
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
    }
    .card-bg {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background-size: cover;
      background-position: center;
      transition: transform 0.6s ease;
    }
    .crop-card:hover .card-bg {
      transform: scale(1.05);
    }
    .card-content {
      position: absolute;
      bottom: 0; left: 0; width: 100%;
      padding: 32px;
      background: linear-gradient(180deg, rgba(44,59,45,0) 0%, rgba(44,59,45,0.9) 100%);
      color: white;
    }
    .card-content h3 {
      font-size: 2rem;
      margin-bottom: 8px;
      color: var(--fst-color-highlight);
    }
  `]
})
export class CropsComponent {}
