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

      <!-- CALL TO ACTION / VISION -->
      <section class="history-footer">
        <div class="container text-center">
          <div class="vision-badge">NOSSA VISÃO</div>
          <h2>"Alimentando o mundo com excelência e tradição."</h2>
        </div>
      </section>
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

    /* FOOTER CALL */
    .history-footer {
      padding: 150px 0;
      background: linear-gradient(to top, rgba(200, 169, 110, 0.05), transparent);
    }
    .vision-badge {
      display: inline-block;
      padding: 10px 25px;
      border: 1px solid var(--fst-gold);
      color: var(--fst-gold);
      font-size: 0.8rem;
      letter-spacing: 3px;
      margin-bottom: 30px;
    }
    .history-footer h2 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.5rem;
      font-style: italic;
      max-width: 800px;
      margin: 0 auto;
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
    }
  `]
})
export class HistoryComponent {}
