import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-location',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section id="localizacao" class="location-section relative">
      <div class="ambient-light"></div>
      
      <div class="container relative z-10">
        <div class="location-grid">
          
          <!-- INFO CARD -->
          <div class="info-side">
            <div class="tech-tag">COORDENADAS // GPS</div>
            <h2 class="location-title">Onde a <span class="gold">Excelência</span> se Localiza</h2>
            
            <div class="glass-info-card">
              <div class="info-item">
                <div class="icon-box">📍</div>
                <div class="text-box">
                  <label>Endereço</label>
                  <p>Fazenda Santa Terezinha, Zona Rural<br>Trabiju - SP, CEP: 14935-000</p>
                </div>
              </div>

              <div class="info-item">
                <div class="icon-box">📞</div>
                <div class="text-box">
                  <label>Telefone</label>
                  <a href="tel:+5516997560109" class="contact-link">+55 (16) 99756-0109</a>
                </div>
              </div>

              <div class="info-item">
                <div class="icon-box">✉️</div>
                <div class="text-box">
                  <label>E-mail</label>
                  <a href="mailto:contato@fazsantaterezinha.com.br" class="contact-link">contato&#64;fazsantaterezinha.com.br</a>
                </div>
              </div>
            </div>

            <div class="location-pills">
              <span class="pill">CAFÉ ARÁBICA</span>
              <span class="pill">CULTIVO IRRIGADO</span>
              <span class="pill">SÃO PAULO</span>
            </div>
          </div>

          <!-- MAP SIDE -->
          <div class="map-side">
            <div class="map-frame">
              <div class="corner-accents">
                <span class="c-tl"></span><span class="c-tr"></span>
                <span class="c-bl"></span><span class="c-br"></span>
              </div>
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3697.7647721389576!2d-48.319805124714414!3d-22.05859191535793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDAzJzI5LjgiUyA0OMKwMTknMDIuMCJX!5e1!3m2!1spt-BR!2sbr!4v1774896727271!5m2!1spt-BR!2sbr&maptype=satellite" 
                  width="100%" 
                  height="450" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
              </iframe>
              <div class="map-overlay"></div>
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
      }

      .location-section {
        padding: 140px 0;
        background: var(--fst-green-musgo);
        overflow: hidden;
      }

      .ambient-light {
        position: absolute;
        bottom: -10%; right: -10%;
        width: 40vw; height: 40vw;
        background: radial-gradient(circle, rgba(200, 169, 110, 0.03) 0%, transparent 70%);
        pointer-events: none;
      }

      .location-grid {
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        gap: 80px;
        align-items: center;
      }

      /* INFO SIDE */
      .tech-tag {
        font-family: 'Jost', sans-serif;
        font-size: 0.75rem;
        letter-spacing: 4px;
        color: var(--fst-gold);
        margin-bottom: 20px;
      }
      .location-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(2.5rem, 4vw, 3.5rem);
        color: #fff;
        margin-bottom: 40px;
        line-height: 1.1;
      }
      .gold { color: var(--fst-gold); font-style: italic; }

      .glass-info-card {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 20px;
        padding: 40px;
        margin-bottom: 40px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
      }

      .info-item {
        display: flex;
        gap: 20px;
        margin-bottom: 30px;
      }
      .info-item:last-child { margin-bottom: 0; }

      .icon-box {
        width: 40px; height: 40px;
        display: flex; align-items: center; justify-content: center;
        background: rgba(200, 169, 110, 0.1);
        border: 1px solid rgba(200, 169, 110, 0.2);
        border-radius: 10px;
        font-size: 1.2rem;
      }

      .text-box label {
        display: block;
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: var(--fst-gold);
        margin-bottom: 5px;
      }
      .text-box p, .contact-link {
        font-family: 'Jost', sans-serif;
        font-size: 1.1rem;
        color: var(--fst-marfim);
        margin: 0;
        text-decoration: none;
        transition: color 0.3s ease;
      }
      .contact-link:hover {
        color: var(--fst-gold);
      }

      .location-pills {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
      }
      .pill {
        padding: 6px 18px;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 30px;
        font-size: 0.8rem;
        color: rgba(255,255,255,0.6);
        background: rgba(255,255,255,0.02);
      }

      /* MAP SIDE */
      .map-frame {
        position: relative;
        padding: 10px;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(200, 169, 110, 0.2);
        overflow: hidden;
      }
      .corner-accents span {
        position: absolute;
        width: 30px; height: 30px;
        border: 2px solid var(--fst-gold);
        z-index: 5;
      }
      .c-tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
      .c-tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
      .c-bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
      .c-br { bottom: -2px; right: -2px; border-left: none; border-top: none; }

      iframe {
        filter: contrast(1.1);
        opacity: 1;
        transition: all 0.5s ease;
      }
      .map-frame:hover iframe {
        filter: contrast(1.2) brightness(1.1);
      }

      @media (max-width: 991px) {
        .location-grid { grid-template-columns: 1fr; gap: 60px; }
        .map-side { order: 2; }
        .info-side { order: 1; }
      }
    `]
})

export class LocationComponent {
    constructor() { }
}