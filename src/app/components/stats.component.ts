import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  template: `
    <section class="stats-section section-padding relative" id="resultados">
      <div class="tech-grid-light"></div>
      
      <div class="container relative-z">
        
        <!-- Header do Carrossel com Títulos e Navegação Lado a Lado no Desktop -->
        <div class="stats-header">
          <div class="header-content">
            <div class="tech-badge">
              <span class="pulse-dot"></span> REPORT DA SAFRA
            </div>
            <h2 class="section-title">Resultados em <span>Escala</span></h2>
            <p class="section-subtitle">A união da precisão tecnológica com a vocação natural do cerrado produz números expressivos de ponta a ponta.</p>
          </div>
          
          <div class="carousel-controls">
            <button class="c-btn" (click)="scrollLeft()" aria-label="Voltar Slider">&larr;</button>
            <button class="c-btn" (click)="scrollRight()" aria-label="Avançar Slider">&rarr;</button>
          </div>
        </div>
        
        <!-- Wrapper para permitir o "sangramento" do carrossel na borda direita da tela -->
        <div class="carousel-wrapper">
          <div class="premium-carousel" #carousel>
            
            <!-- Card 1 -->
            <div class="future-glass-card">
              <div class="f-card-bg" style="background-image: url('assets/media/gallery-2.jpg');"></div>
              <div class="f-card-overlay"></div>
              <div class="f-card-content">
                <div class="f-icon-circle pulse-glow">🏆</div>
                <div class="f-stat-title">84+ Pontos SCA</div>
                <div class="f-stat-desc">Score médio alcançado, atestando a qualidade superior, doçura e notas frutadas dos nossos microlotes de café.</div>
                <button class="f-btn-explore">Visualizar Laudos &rarr;</button>
              </div>
            </div>
            
            <!-- Card 2 -->
            <div class="future-glass-card">
              <div class="f-card-bg" style="background-image: url('assets/media/gallery-3.jpg');"></div>
              <div class="f-card-overlay"></div>
              <div class="f-card-content">
                <div class="f-icon-circle pulse-glow">📍</div>
                <div class="f-stat-title">Telemetria 100%</div>
                <div class="f-stat-desc">Toda a área de plantio da fazenda é coberta por sensoriamento de solo e cima via satélite e dispositivos IoT.</div>
                <button class="f-btn-explore">Ver Dashboard &rarr;</button>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="future-glass-card">
              <div class="f-card-bg" style="background-image: url('assets/media/gallery-1.jpg');"></div>
              <div class="f-card-overlay"></div>
              <div class="f-card-content">
                <div class="f-icon-circle pulse-glow">☕</div>
                <div class="f-stat-title">Espécie Arábica</div>
                <div class="f-stat-desc">Cultivo puro focado na alta complexidade sensorial e padronização que as melhores torrefações globais exigem.</div>
                <button class="f-btn-explore">Ver Variedades &rarr;</button>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="future-glass-card">
              <div class="f-card-bg" style="background-image: url('assets/media/gallery-4.jpg');"></div>
              <div class="f-card-overlay"></div>
              <div class="f-card-content">
                <div class="f-icon-circle pulse-glow">♻️</div>
                <div class="f-stat-title">Carbono Neutro</div>
                <div class="f-stat-desc">Manejos sustentáveis rigorosos que sequestram mais carbono do que nossa cadeia emite, garantindo biodiversidade.</div>
                <button class="f-btn-explore">Relatório ESG &rarr;</button>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .relative { position: relative; overflow: hidden; }
    .relative-z { position: relative; z-index: 10; }
    
    .stats-section {
      background-color: var(--fst-color-bg-primary); /* Marfim base light */
      padding: 100px 0;
    }
    
    .tech-grid-light {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background-image: 
        linear-gradient(rgba(44, 59, 45, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(44, 59, 45, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      z-index: 1;
    }

    /* HEADER & NAVEGAÇÃO DO CARROSSEL */
    .stats-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 60px;
    }
    .header-content {
      max-width: 600px;
      text-align: left;
    }

    .tech-badge {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: rgba(44, 59, 45, 0.04);
      border: 1px solid rgba(44, 59, 45, 0.1);
      padding: 6px 16px;
      border-radius: 30px;
      font-family: var(--fst-font-secondary);
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 2.5px;
      color: var(--fst-color-primary);
      margin-bottom: 24px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.03);
    }

    .section-title {
      font-size: 3rem;
      font-family: var(--fst-font-primary);
      color: var(--fst-color-primary);
      margin-bottom: 16px;
    }
    .section-title span {
      background: linear-gradient(90deg, var(--fst-color-primary) 0%, var(--fst-color-highlight) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .section-subtitle {
      font-size: 1.15rem;
      color: var(--fst-color-secondary);
      line-height: 1.6;
      margin: 0;
    }

    .carousel-controls {
      display: flex;
      gap: 16px;
      padding-bottom: 15px; /* Alinha visualmente com o bottom do texto */
    }
    .c-btn {
      width: 54px; height: 54px;
      border-radius: 50%;
      background: rgba(44, 59, 45, 0.03);
      border: 1px solid rgba(44, 59, 45, 0.15);
      color: var(--fst-color-primary);
      font-size: 1.4rem;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; 
      transition: all var(--fst-transition-base);
    }
    .c-btn:hover {
      background: var(--fst-color-primary);
      color: white;
      transform: scale(1.08);
      box-shadow: 0 10px 20px rgba(44, 59, 45, 0.2);
    }

    /* LÓGICA DO CARROSSEL HORIZONTAL */
    .carousel-wrapper {
      position: relative;
      /* Permite que no desktop o carrossel avance até a borda direita escapando do container */
      margin-right: calc(-50vw + 50%);
    }

    .premium-carousel {
      display: flex;
      flex-wrap: nowrap; /* Força que fique em linha única, sem quebrar! */
      gap: 30px;
      overflow-x: auto;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      padding-bottom: 60px; /* Folga ampla pro box-shadow on hover não cortar */
      padding-top: 10px;
      padding-right: calc(50vw - 50%); /* Garante espaço visual na última rolagem */
      
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none;  /* IE and Edge */
    }
    .premium-carousel::-webkit-scrollbar {
      display: none;
    }

    /* CARD FUTURISTA */
    .future-glass-card {
      position: relative;
      height: 460px;
      min-width: clamp(380px, 35vw, 550px); /* Sofisticação: os cards ditam a largura pra não apertar */
      flex: 0 0 auto;
      scroll-snap-align: start;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      box-shadow: 0 15px 35px rgba(0,0,0,0.05);
      border: 1px solid rgba(44, 59, 45, 0.1);
      cursor: pointer;
      isolation: isolate;
      transition: all var(--fst-transition-base);
    }
    .future-glass-card:hover {
      transform: translateY(-12px);
      box-shadow: 0 25px 60px rgba(0,0,0,0.15), 0 0 30px rgba(200, 169, 110, 0.1);
      border-color: rgba(200, 169, 110, 0.5);
    }

    .f-card-bg {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background-size: cover;
      background-position: center;
      transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      z-index: -2;
    }
    .future-glass-card:hover .f-card-bg {
      transform: scale(1.08);
    }

    .f-card-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(44, 59, 45, 0.45);
      backdrop-filter: blur(0px);
      -webkit-backdrop-filter: blur(0px);
      z-index: -1;
      transition: background 0.4s ease;
    }
    .future-glass-card:hover .f-card-overlay {
      background: rgba(44, 59, 45, 0.7);
      backdrop-filter: blur(4px);
    }

    .f-card-content {
      position: relative;
      padding: 40px 30px;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
      justify-content: space-between;
      transition: transform 0.3s ease;
    }

    .f-icon-circle {
      width: 55px; height: 55px;
      border-radius: 50%;
      background-color: rgba(200, 169, 110, 0.1);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border: 1px solid rgba(200, 169, 110, 0.5);
      font-size: 1.5rem;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .pulse-glow { animation: icon-glow 3s infinite ease-in-out; }
    @keyframes icon-glow {
      0%, 100% { box-shadow: 0 0 15px rgba(200, 169, 110, 0.2); }
      50% { box-shadow: 0 0 25px rgba(200, 169, 110, 0.6); }
    }

    .f-stat-title {
      font-family: var(--fst-font-secondary);
      font-weight: 800;
      font-size: 1.8rem;
      margin-top: auto;
      margin-bottom: 12px;
      color: #FFFFFF;
      letter-spacing: -0.5px;
    }
    .f-stat-desc {
      font-family: var(--fst-font-secondary);
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 30px;
      color: rgba(255, 255, 255, 0.85);
    }
    .f-btn-explore {
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: white;
      padding: 10px 24px;
      border-radius: 30px;
      font-size: 0.85rem;
      font-weight: 600;
      display: flex; align-items: center; gap: 8px;
      transition: all var(--fst-transition-base);
      backdrop-filter: blur(4px);
    }
    .future-glass-card:hover .f-btn-explore {
      background-color: var(--fst-color-highlight);
      border-color: var(--fst-color-highlight);
      color: var(--fst-color-primary);
      padding-left: 28px; padding-right: 20px;
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.6); opacity: 0.4; }
    }

    /* RESPONSIVE */
    @media (max-width: 991px) {
      .stats-header {
        flex-direction: column;
        text-align: center;
        align-items: center;
      }
      .header-content { text-align: center; }
      .carousel-controls { display: none; /* No mobile ele arrasta com o dedo naturalmente */ }
      .carousel-wrapper { margin-right: -15px; margin-left: -15px; } /* Sangramento bilateral pra mobile */
      .premium-carousel { 
        padding-left: 15px; 
        padding-right: 15px; 
        gap: 20px;
        scroll-snap-type: x mandatory;
      }
      .future-glass-card {
        min-width: 80vw;
        height: 400px;
        scroll-snap-align: center; /* Centraliza a view no card atual */
      }
    }
  `]
})
export class StatsComponent { 
  @ViewChild('carousel', { static: false }) carousel?: ElementRef<HTMLElement>;

  scrollLeft() {
    if (this.carousel?.nativeElement) {
      const el = this.carousel.nativeElement;
      // Se estiver no começo, vai para o final
      if (el.scrollLeft <= 10) {
        el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: -450, behavior: 'smooth' });
      }
    }
  }

  scrollRight() {
    if (this.carousel?.nativeElement) {
      const el = this.carousel.nativeElement;
      // Se estiver no final (ou muito próximo), volta para o começo
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 450, behavior: 'smooth' });
      }
    }
  }
}
