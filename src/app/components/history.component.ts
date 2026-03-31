import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="history-container">
      <!-- HERO SECTION FOR HISTORY -->
      <section class="history-hero">
        <div class="hero-bg-overlay"></div>
        <img src="assets/media/drone-overview.jpg" alt="Visão Aérea" class="hero-img" />
        <div class="hero-content container">
          <div class="tech-label">MEMÓRIA // TRADIÇÃO</div>
          <h1>Nossa <span class="gold">História</span></h1>
          <p class="subtitle">O legado da Família Bortolozzo através das décadas.</p>
        </div>
      </section>

      <!-- NARRATIVE SECTION -->
      <section class="narrative-section container">
        <div class="narrative-grid">
          
          <!-- BLOCK 1: Origins -->
          <div class="story-block">
            <div class="block-number">01</div>
            <div class="block-content">
              <h3>Raízes Imigrantes</h3>
              <p>
                A história da Fazenda Santa Terezinha está profundamente ligada às origens da família Bortolozzo, descendente de imigrantes italianos que chegaram ao Brasil no início do século passado. Vindos da região do Vêneto, da cidade de Vigonza, próxima a Veneza, trouxeram consigo a forte vocação para a agricultura.
              </p>
            </div>
            <div class="block-image">
              <img src="assets/media/gallery-2.jpg" alt="Raízes" />
            </div>
          </div>

          <!-- BLOCK 2: The Foundation -->
          <div class="story-block reverse">
            <div class="block-number">02</div>
            <div class="block-content">
              <h3>O Nascimento da Fazenda</h3>
              <p>
                Foi nesse contexto que nasceu a Fazenda Santa Terezinha, não apenas como um empreendimento, mas como o verdadeiro lar da família. Mais do que um local de trabalho, a fazenda representa a extensão da casa, o espaço onde histórias foram construídas, valores foram transmitidos e vínculos foram fortalecidos ao longo do tempo.
              </p>
            </div>
            <div class="block-image">
              <img src="assets/media/drone-fields.jpg" alt="Campo" />
            </div>
          </div>

          <!-- BLOCK 3: Modern Legacy -->
          <div class="story-block">
            <div class="block-number">03</div>
            <div class="block-content">
              <h3>O Propósito e o Futuro</h3>
              <p>
                A Fazenda Santa Terezinha marcou o início de toda a trajetória de desenvolvimento da família Bortolozzo no agronegócio. Tornou-se símbolo de dedicação, fé e gratidão. Mais do que produzir, a família cultiva um propósito: honrar suas raízes, valorizar o trabalho no campo e seguir construindo um legado sólido para as próximas gerações.
              </p>
            </div>
            <div class="block-image">
              <img src="assets/media/drone-processing.jpg" alt="Processamento" />
            </div>
          </div>

        </div>
      </section>

      <!-- PILLARS OF EXCELLENCE (MISSION, VISION, VALUES) -->
      <section class="pillars-section container">
        <div class="pillars-grid">
          
          <!-- MISSÃO -->
          <div class="pillar-card">
            <div class="pillar-header">
              <span class="pillar-number">M</span>
              <h4>Missão</h4>
            </div>
            <p>Cultivar e produzir de forma ética e sustentável, contribuindo para o desenvolvimento regional e o bem estar das pessoas.</p>
          </div>

          <!-- VISÃO -->
          <div class="pillar-card">
            <div class="pillar-header">
              <span class="pillar-number">V</span>
              <h4>Visão</h4>
            </div>
            <p>Ser referência na produção de café, através de boas práticas de gestão, qualidade e avançadas técnicas de produção.</p>
          </div>

          <!-- VALORES -->
          <div class="pillar-card gold-border">
            <div class="pillar-header">
              <span class="pillar-number">V</span>
              <h4>Valores</h4>
            </div>
            <p>Integridade, Comprometimento, Inovação, Sustentabilidade, Responsabilidade Social e Valores Cristãos.</p>
          </div>

        </div>
        
      </section>
      <div class="wave-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="var(--fst-marfim)" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,117.3C480,96,600,96,720,122.7C840,149,960,203,1080,213.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  `,
  styles: [`
    :host {
      --fst-green-musgo: #2C3B2D;
      --fst-gold: #C8A96E;
      --fst-marfim: #F5EDD9;
      display: block;
      background: var(--fst-green-musgo);
    }

    .history-container {
      color: var(--fst-marfim);
      font-family: 'Jost', sans-serif;
    }

    /* HERO SECTION */
    .history-hero {
      position: relative;
      height: 70vh;
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    .hero-bg-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(to bottom, rgba(44, 59, 45, 0.4), var(--fst-green-musgo));
      z-index: 1;
    }
    .hero-img {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      object-fit: cover;
      opacity: 0.5;
    }
    .hero-content {
      position: relative;
      z-index: 2;
      padding-top: 100px;
    }
    .tech-label {
      font-size: 0.75rem;
      letter-spacing: 4px;
      color: var(--fst-gold);
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .tech-label::before {
      content: '';
      width: 30px; height: 1px;
      background: var(--fst-gold);
    }
    h1 {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(3.5rem, 8vw, 6rem);
      margin-bottom: 20px;
      line-height: 1;
    }
    .gold { color: var(--fst-gold); font-style: italic; }
    .subtitle {
      font-size: 1.25rem;
      color: rgba(245, 237, 217, 0.7);
      max-width: 600px;
    }

    /* NARRATIVE SECTION */
    .narrative-section {
      padding: 100px 15px;
    }
    .story-block {
      display: grid;
      grid-template-columns: 80px 1fr 1fr;
      grid-template-areas: "num content img";
      gap: 60px;
      margin-bottom: 150px;
      align-items: center;
      animation: fadeRight 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) both;
      animation-timeline: view();
      animation-range: entry 10% cover 30%;
    }
    .story-block.reverse {
      grid-template-columns: 1fr 1fr 80px;
      grid-template-areas: "img content num";
    }
    .block-number { grid-area: num; }
    .block-content { grid-area: content; }
    .block-image { grid-area: img; }

    .block-number {
      font-family: 'Cormorant Garamond', serif;
      font-size: 3rem;
      color: var(--fst-gold);
      opacity: 0.4;
      font-style: italic;
    }
    .block-content h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.5rem;
      margin-bottom: 25px;
      color: #fff;
    }
    .block-content p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: rgba(245, 237, 217, 0.8);
    }
    .block-image {
      position: relative;
      padding: 15px;
      border: 1px solid rgba(200, 169, 110, 0.2);
    }
    .block-image img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      filter: sepia(20%) brightness(80%);
      transition: all 0.5s ease;
    }
    .block-image:hover img {
      filter: none;
      transform: scale(1.02);
    }

    /* PILLARS SECTION */
    .pillars-section {
      padding: 100px 15px;
      margin-bottom: 50px;
    }
    .pillars-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
    .pillar-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 40px;
      transition: all 0.4s ease;
    }
    .pillar-card:hover {
      background: rgba(255, 255, 255, 0.06);
      transform: translateY(-8px);
    }
    .pillar-card.gold-border {
      border: 1px solid rgba(200, 169, 110, 0.2);
    }
    .pillar-header {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 25px;
    }
    .pillar-number {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.5rem;
      color: var(--fst-gold);
      opacity: 0.6;
    }
    .pillar-card h4 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.8rem;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #fff;
    }
    .pillar-card p {
      font-family: 'Jost', sans-serif;
      font-size: 1rem;
      line-height: 1.7;
      color: rgba(245, 237, 217, 0.7);
    }

    /* wave bottom */

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

    @media (max-width: 991px) {
      .story-block, .story-block.reverse {
        grid-template-columns: 1fr;
        grid-template-areas: 
          "content"
          "img";
        gap: 30px;
      }
      .block-number { display: none; }
      .pillars-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class HistoryComponent {}
