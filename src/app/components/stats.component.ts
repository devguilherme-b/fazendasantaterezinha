import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="stats-section relative" id="resultados">
      <div class="tech-grid-light"></div>
      
      <div class="container relative-z">
        
        <!-- Header do Carrossel -->
        <div class="stats-header">
          <div class="header-content">
            <div class="tech-badge">
              <span class="pulse-dot"></span> REPORT DA SAFRA // PERFORMANCE
            </div>
            <h2 class="section-title">Resultados em <span class="gold">Escala</span></h2>
            <p class="section-subtitle">Manejo agrícola de alto nível resultando em volumes expressivos e qualidade consistente safra após safra.</p>
          </div>
          
          <div class="carousel-controls">
            <button class="c-btn" (click)="scrollLeft()" aria-label="Voltar Slider">&larr;</button>
            <button class="c-btn" (click)="scrollRight()" aria-label="Avançar Slider">&rarr;</button>
          </div>
        </div>
        
        <!-- Wrapper do Carrossel -->
        <div class="carousel-wrapper">
          <div class="premium-carousel" #carousel>
            
            <!-- Card 1 -->
            <div class="future-glass-card">
              <div class="f-card-bg" style="background-image: url('assets/media/drone-fields.jpg');"></div>
              <div class="f-card-overlay"></div>
              <div class="f-card-content">
                <div class="f-icon-circle pulse-glow">📍</div>
                <div class="f-stat-title">Extensão e Topografia</div>
                <div class="f-stat-desc">Vastas áreas de plantio totalmente mecanizáveis e adaptadas ao relevo local.</div>
                <a [routerLink]="['/']" fragment="localizacao" (click)="scrollToSection('localizacao')" class="f-btn-explore">Ver a Fazenda &rarr;</a>
              </div>
            </div>
            
            <!-- Card 2 -->
            <div class="future-glass-card">
              <div class="f-card-bg" style="background-image: url('assets/media/factory-dryers.jpg');"></div>
              <div class="f-card-overlay"></div>
              <div class="f-card-content">
                <div class="f-icon-circle pulse-glow">⚙️</div>
                <div class="f-stat-title">Tecnologia de Secagem</div>
                <div class="f-stat-desc">Fluxo contínuo em secadores mecânicos de alta performance técnica.</div>
                <a [routerLink]="['/']" fragment="localizacao" (click)="scrollToSection('localizacao')" class="f-btn-explore">Ver Estrutura &rarr;</a>
              </div>
            </div>
 
            <!-- Card 3 -->
            <div class="future-glass-card">
              <div class="f-card-bg" style="background-image: url('assets/media/coffee-trees.jpg');"></div>
              <div class="f-card-overlay"></div>
              <div class="f-card-content">
                <div class="f-icon-circle pulse-glow">☕</div>
                <div class="f-stat-title">Produção Arábica</div>
                <div class="f-stat-desc">Foco total na espécie arábica, entregando o melhor do cerrado paulista.</div>
                <a [routerLink]="['/']" fragment="localizacao" (click)="scrollToSection('localizacao')" class="f-btn-explore">Ver Qualidade &rarr;</a>
              </div>
            </div>
 
            <!-- Card 4 -->
            <div class="future-glass-card">
              <div class="f-card-bg" style="background-image: url('assets/media/resources-water.jpg');"></div>
              <div class="f-card-overlay"></div>
              <div class="f-card-content">
                <div class="f-icon-circle pulse-glow">💧</div>
                <div class="f-stat-title">Gestão Hídrica</div>
                <div class="f-stat-desc">Manejo responsável e preservação de importantes áreas de mata nativa.</div>
                <a [routerLink]="['/']" fragment="localizacao" (click)="scrollToSection('localizacao')" class="f-btn-explore">Visitar Fazenda &rarr;</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <!-- Wavy Transition to Footer -->
      <div class="wave-bottom">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  `,
  styles: [`
    :host {
      --fst-green-musgo: #2C3B2D;
      --fst-gold: #C8A96E;
      --fst-marfim: #F5EDD9;
    }

    /* wave-bottom */
    .wave-bottom {
      position: absolute;
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
      fill: var(--fst-green-musgo);
    }

    .relative { position: relative; overflow: hidden; }
    .relative-z { position: relative; z-index: 10; }
    
    .stats-section {
      background-color: var(--fst-marfim);
      padding: 140px 0;
    }
    
    .tech-grid-light {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background-image: 
        linear-gradient(rgba(44, 59, 45, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(44, 59, 45, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
    }

    .stats-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 80px;
    }
    .header-content { max-width: 650px; }

    .tech-badge {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: rgba(44, 59, 45, 0.04);
      border: 1px solid rgba(44, 59, 45, 0.1);
      padding: 8px 18px;
      font-family: 'Jost', sans-serif;
      font-size: 0.8rem;
      letter-spacing: 3px;
      color: var(--fst-green-musgo);
      margin-bottom: 24px;
    }
    .pulse-dot {
      width: 8px; height: 8px;
      background-color: var(--fst-gold);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--fst-gold);
      animation: pulse 2s infinite ease-in-out;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.6); opacity: 0.4; }
    }

    .section-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2.5rem, 6vw, 3.8rem);
      color: var(--fst-green-musgo);
      margin-bottom: 16px;
    }
    .gold { color: var(--fst-gold); font-style: italic; }

    .section-subtitle {
      font-family: 'Jost', sans-serif;
      font-size: 1.15rem;
      color: rgba(44, 59, 45, 0.7);
      line-height: 1.6;
    }

    .carousel-controls { display: flex; gap: 15px; }
    .c-btn {
      width: 55px; height: 55px;
      border-radius: 50%;
      border: 1px solid rgba(44, 59, 45, 0.2);
      background: transparent;
      color: var(--fst-green-musgo);
      font-size: 1.2rem;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.3s ease;
    }
    .c-btn:hover {
      background: var(--fst-green-musgo);
      color: #fff;
      border-color: var(--fst-green-musgo);
    }

    .carousel-wrapper {
      margin-right: calc(-50vw + 50%);
    }

    .premium-carousel {
      display: flex;
      gap: 30px;
      overflow-x: auto;
      scroll-behavior: smooth;
      padding: 20px 0 60px 0;
      padding-right: calc(50vw - 50%);
      scrollbar-width: none;
    }
    .premium-carousel::-webkit-scrollbar { display: none; }

    .future-glass-card {
      position: relative;
      height: 480px;
      min-width: 400px;
      flex: 0 0 auto;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      border: 1px solid rgba(44, 59, 45, 0.1);
      transition: all 0.5s ease;
    }
    .future-glass-card:hover { transform: translateY(-10px); box-shadow: 0 30px 60px rgba(0,0,0,0.15); border-color: var(--fst-gold); }

    .f-card-bg {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background-size: cover;
      background-position: center;
      transition: transform 1s ease;
      z-index: -2;
    }
    .future-glass-card:hover .f-card-bg { transform: scale(1.08); }

    .f-card-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(to bottom, transparent, rgba(44, 59, 45, 0.8));
      transition: background 0.4s ease;
      z-index: -1;
    }
    .future-glass-card:hover .f-card-overlay { background: linear-gradient(to bottom, transparent, rgba(11, 18, 12, 0.9)); }

    .f-card-content {
      padding: 40px;
      color: #fff;
    }
    .f-icon-circle {
      width: 50px; height: 50px;
      background: rgba(200, 169, 110, 0.2);
      border: 1px solid var(--fst-gold);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem;
      margin-bottom: auto; /* Push to center */
      position: absolute; top: 40px; left: 40px;
    }

    .f-stat-title {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 600;
      font-size: 2rem;
      margin-bottom: 12px;
    }
    .f-stat-desc {
      font-family: 'Jost', sans-serif;
      font-size: 1rem;
      color: rgba(255,255,255,0.7);
      margin-bottom: 25px;
    }
    .f-btn-explore {
      display: inline-block;
      background: transparent;
      border: 1px solid rgba(255,255,255,0.3);
      color: #fff;
      padding: 8px 20px;
      border-radius: 4px;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      transition: all 0.3s ease;
      cursor: pointer;
      text-decoration: none;
      position: relative;
      z-index: 10;
    }
    .future-glass-card:hover .f-btn-explore { background: var(--fst-gold); border-color: var(--fst-gold); color: #fff; }

    @media (max-width: 991px) {
      .stats-header { flex-direction: column; align-items: flex-start; gap: 30px; }
      .premium-carousel { gap: 20px; }
      .future-glass-card { min-width: 85vw; height: 420px; }
    }
  `]
})
export class StatsComponent { 
  @ViewChild('carousel', { static: false }) carousel?: ElementRef<HTMLElement>;

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollLeft() {
    if (this.carousel?.nativeElement) {
      const el = this.carousel.nativeElement;
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
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 450, behavior: 'smooth' });
      }
    }
  }
}
