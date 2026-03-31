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
          <h3>Fazenda Santa Terezinha</h3>
          <p>Tradição, inovação e excelência na produção de café arábica no interior de São Paulo.</p>
        </div>
        <div class="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a routerLink="/" fragment="inicio">Início</a></li>
            <li><a routerLink="/historia">História</a></li>
            <li><a routerLink="/" fragment="estrutura">Estrutura</a></li>
            <li><a routerLink="/" fragment="fotos">Fotos</a></li>
          </ul>
        </div>
        <div class="footer-contact glass-card">
          <div class="contact-header">
            <h4>Unidade Administrativa</h4>
            <span class="state-badge">SP</span>
          </div>
          <div class="contact-body">
            <p>📍 Fazenda Santa Terezinha, Dourado - SP</p>
            <p>
              <a href="tel:+5516999999999" class="contact-link">
                📞 +55 (16) 99999-9999
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
      background-color: #0b120c;
      color: var(--fst-marfim);
      padding-top: 80px;
      border-top: 1px solid rgba(200, 169, 110, 0.1);
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1.8fr;
      gap: 40px;
      margin-bottom: 80px;
      align-items: start;
    }
    .footer h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.2rem;
      color: var(--fst-gold);
      margin-bottom: 16px;
    }
    .footer h4 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.6rem;
      color: var(--fst-gold);
      margin-bottom: 24px;
    }
    .footer-brand p {
      color: rgba(245, 237, 217, 0.7);
      max-width: 320px;
      line-height: 1.6;
      font-family: 'Jost', sans-serif;
    }
    .footer-links ul {
      list-style: none;
      padding: 0;
    }
    .footer-links ul li {
      margin-bottom: 12px;
    }
    .footer-links a {
      color: var(--fst-marfim);
      text-decoration: none;
      transition: color 0.3s ease;
      font-family: 'Jost', sans-serif;
    }
    .footer-links a:hover {
      color: var(--fst-gold);
    }
    
    /* CARD CONTATO - GLASS EFFECT */
    .glass-card {
      background: rgba(255, 255, 255, 0.02);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.04);
      border-radius: 20px;
      padding: 32px;
      box-shadow: 
        inset 2px 2px 12px rgba(255, 255, 255, 0.05), 
        0 10px 30px rgba(0, 0, 0, 0.3);
    }
    .contact-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 16px;
    }
    .contact-header h4 {
      margin-bottom: 0;
      font-size: 1.4rem;
    }
    .state-badge {
      background-color: rgba(200, 169, 110, 0.15);
      color: var(--fst-gold);
      border: 1px solid var(--fst-gold);
      font-size: 0.75rem;
      font-weight: bold;
      padding: 4px 10px;
      border-radius: 8px;
    }
    .contact-body p {
      margin-bottom: 16px;
      color: rgba(245, 237, 217, 0.8);
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
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding: 40px 0;
      text-align: center;
      color: rgba(245, 237, 217, 0.5);
      font-size: 0.9rem;
    }
    
    @media (max-width: 991px) {
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .glass-card { grid-column: 1 / -1; }
    }
    @media (max-width: 768px) {
      .footer-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class FooterComponent { }
