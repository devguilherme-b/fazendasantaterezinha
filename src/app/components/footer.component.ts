import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer id="contato" class="footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <h3>Fazenda Santa Terezinha</h3>
          <p>Semeando desenvolvimento com responsabilidade e alta qualidade no cerrado brasileiro.</p>
        </div>
        <div class="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#historia">História</a></li>
            <li><a href="#estrutura">Estrutura</a></li>
            <li><a href="#fotos">Fotos</a></li>
          </ul>
        </div>
        <div class="footer-contact glass-card">
          <div class="contact-header">
            <h4>Unidade Administrativa</h4>
            <span class="state-badge">PI/SP</span>
          </div>
          <div class="contact-body">
            <p>📍 Rod. Transcerrado, PI/SP</p>
            <p>📞 +55 (89) 3544-3600</p>
            <p>✉️ contato@fazsantaterezinha.com.br</p>
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
    .footer {
      background-color: var(--fst-color-bg-tertiary);
      color: var(--fst-color-bg-primary);
      padding-top: 80px;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1.8fr;
      gap: 40px;
      margin-bottom: 80px;
      align-items: start;
    }
    .footer h3 {
      font-family: var(--fst-font-primary);
      font-size: 2.2rem;
      color: var(--fst-color-highlight);
      margin-bottom: 16px;
    }
    .footer h4 {
      font-family: var(--fst-font-primary);
      font-size: 1.6rem;
      color: var(--fst-color-highlight);
      margin-bottom: 24px;
    }
    .footer-brand p {
      color: var(--fst-color-bg-secondary);
      max-width: 320px;
      line-height: 1.6;
    }
    .footer-links ul {
      list-style: none;
      padding: 0;
    }
    .footer-links ul li {
      margin-bottom: 12px;
    }
    .footer-links a {
      color: var(--fst-color-bg-primary);
      text-decoration: none;
      transition: color var(--fst-transition-base);
    }
    .footer-links a:hover {
      color: var(--fst-color-highlight);
    }
    
    /* CARD CONTATO - GLASS EFFECT */
    .glass-card {
      background: rgba(255, 255, 255, 0.02);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.04);
      border-radius: 20px;
      padding: 32px;
      /* Sombreamento discreto: claro no topo/esquerda e escuro no fundo/direita */
      box-shadow: 
        inset 2px 2px 12px rgba(255, 255, 255, 0.08), 
        inset -2px -2px 16px rgba(0, 0, 0, 0.35),
        0 10px 30px rgba(0, 0, 0, 0.15);
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
      background-color: rgba(200, 169, 110, 0.15); /* ouro-vintage low opacity */
      color: var(--fst-color-highlight);
      border: 1px solid var(--fst-color-highlight);
      font-size: 0.75rem;
      font-weight: bold;
      padding: 4px 10px;
      border-radius: 8px;
    }
    .contact-body p {
      margin-bottom: 16px;
      color: var(--fst-color-bg-secondary);
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 0.95rem;
    }
    .contact-body p:last-child {
      margin-bottom: 0;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding: 24px 0;
      text-align: center;
      color: var(--fst-color-bg-secondary);
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
