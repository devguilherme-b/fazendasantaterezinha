import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterModule],
  template: `
    <footer id="contato" class="footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <div class="footer-brand-content">
            <img src="assets/media/logo.png" alt="Logo Fazenda Santa Terezinha" class="footer-logo" />
            <p>Tradição, inovação e excelência na produção de café arábica no interior de São Paulo.</p>
          </div>
        </div>
        <div class="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a routerLink="/" fragment="inicio">Início</a></li>
            <li><a routerLink="/historia">História</a></li>
            <li><a routerLink="/" fragment="estrutura">Estrutura</a></li>
            <li><a routerLink="/" fragment="localizacao">Localização</a></li>
            <li><a routerLink="/" fragment="fotos">Fotos</a></li>
          </ul>
        </div>
        <div class="footer-contact glass-card">
          <div class="contact-header">
            <h4>Unidade Administrativa</h4>
            <span class="state-badge">SP</span>
          </div>
          <div class="contact-body">
            <p>📍 Fazenda Santa Terezinha, Trabiju - SP</p>
            <p>
              <a href="tel:+5516997560109" class="contact-link">
                📞 +55 (16) 99756-0109
              </a>
            </p>
            <p>
              <a href="mailto:contato@fazsantaterezinha.com.br" class="contact-link">
                ✉️ contato&#64;fazsantaterezinha.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Fazenda Santa Terezinha - Família Bortolozzo. Todos os direitos reservados.</p>
        <p>Cultivando Tradição, Qualidade e Amor pela Terra</p>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      --fst-green-musgo: #2C3B2D;
      --fst-gold: #C8A96E;
      --fst-marfim: #F5EDD9;
      --fst-green-oliva: #4A5C3A;
    }

    .footer {
      background-color: var(--fst-marfim);
      color: var(--fst-green-musgo);
      padding-top: 100px;
      position: relative;
    }
    .wave-transition {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      line-height: 0;
      transform: translateY(-98%);
      z-index: 10;
    }
    .wave-transition svg {
      display: block;
      width: 100%;
      height: 100px;
    }
    .wave-transition path {
      fill: var(--fst-marfim);
    }
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 60px;
      margin-bottom: 80px;
      align-items: start;
    }
    .footer h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.2rem;
      color: var(--fst-gold);
      margin-bottom: 16px;
    }
    .footer-logo {
      height: 150px; /* Mantendo seu ajuste manual */
      width: auto;
      margin-bottom: 25px;
      object-fit: contain;
      filter: drop-shadow(0 0 5px rgba(0,0,0,0.1));
    }
    .footer h4 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.6rem;
      color: var(--fst-green-musgo);
      margin-bottom: 24px;
      font-weight: 700;
      border-bottom: 1px solid rgba(200, 169, 110, 0.3);
      padding-bottom: 10px;
      display: inline-block;
    }
    .footer-brand {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      filter: drop-shadow(0 0 5px rgba(200, 169, 110, 0.3));
      border-left: 2px solid rgba(200, 169, 110, 0.3);
      border-right: 2px solid rgba(200, 169, 110, 0.3);
      padding: 20px 0;
      border-radius: 20px;
    }
    .footer-brand-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .footer-brand p {
      color: rgba(44, 59, 45, 0.7);
      max-width: 320px;
      line-height: 1.6;
      font-family: 'Jost', sans-serif;
      margin: 0;
    }
    .footer-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .footer-links ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .footer-links ul li {
      margin-bottom: 12px;
    }
    .footer-links a {
      color: var(--fst-green-musgo);
      text-decoration: none;
      transition: color 0.3s ease;
      font-family: 'Jost', sans-serif;
      font-weight: 500;
    }
    .footer-links a:hover {
      color: var(--fst-gold);
    }
    
    /* CARD CONTATO - DARK GLASS ON LIGHT */
    .glass-card {
      background: rgba(44, 59, 45, 0.05);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(44, 59, 45, 0.1);
      border-radius: 20px;
      padding: 32px;
      box-shadow: 
        0 10px 30px rgba(0, 0, 0, 0.05);
    }
    .contact-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      border-bottom: 1px solid rgba(44, 59, 45, 0.1);
      padding-bottom: 16px;
    }
    .contact-header h4 {
      margin-bottom: 0;
      font-size: 1.4rem;
      border-bottom: none;
      padding-bottom: 0;
    }
    .state-badge {
      background-color: rgba(200, 169, 110, 0.15);
      color: var(--fst-green-musgo);
      border: 1px solid var(--fst-gold);
      font-size: 0.75rem;
      font-weight: bold;
      padding: 4px 10px;
      border-radius: 8px;
    }
    .contact-body p {
      margin-bottom: 16px;
      color: var(--fst-green-musgo);
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 0.95rem;
    }
    .contact-link {
      color: inherit;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    .contact-link:hover {
      color: var(--fst-gold);
    }

    .footer-bottom {
      border-top: 1px solid rgba(44, 59, 45, 0.1);
      padding: 40px 0;
      text-align: center;
      color: rgba(44, 59, 45, 0.5);
      font-size: 0.9rem;
    }
    
    @media (max-width: 991px) {
      .footer-grid { grid-template-columns: 1fr; gap: 60px; }
      .footer-brand, .footer-brand-content {
        align-items: center;
        text-align: center;
      }
      .footer-logo {
        height: 220px; /* Brasão em destaque total nas telas mobile/tablet */
        margin-bottom: 25px;
      }
      .footer-brand p {
        max-width: 100%;
      }
      .glass-card { grid-column: 1 / -1; }
    }
  `]
})
export class FooterComponent { }
