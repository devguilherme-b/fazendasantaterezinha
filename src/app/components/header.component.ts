import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule],
  template: `
    <header [class.scrolled]="isScrolled()">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid px-4">
          <a class="navbar-brand d-flex align-items-center" [routerLink]="['/']">
            <img src="assets/media/logo-header.png" alt="Fazenda Santa Terezinha Logo" class="brand-logo" />
          </a>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" [routerLink]="['/']" fragment="inicio" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Início</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/historia" routerLinkActive="active">Nossa História</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" [routerLink]="['/']" fragment="estrutura" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Estrutura</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" [routerLink]="['/']" fragment="localizacao" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Localização</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" routerLink="/fotos" routerLinkActive="active">Fotos</a>
              </li>
            </ul>
            <div class="nav-actions d-flex">
              <a [routerLink]="['/']" fragment="contato" class="btn-primary" style="padding: 10px 20px; font-size: 1rem;">Contato</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 2%;
      left: 5%;
      border-radius: 20px;
      width: 90%;
      z-index: 1000;
      transition: all var(--fst-transition-base);
    }
    header::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(245, 237, 217, 0.70); /* Glass Marfim */
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border-radius: inherit;
      border: 1px solid rgba(44, 59, 45, 0.08);
      transition: all var(--fst-transition-base);
      z-index: -1;
      pointer-events: none;
    }
    header.scrolled::before {
      background: rgba(245, 237, 217, 0.85); /* Slightly more solid when scrolled */
      box-shadow: 0 4px 30px rgba(0,0,0,0.1);
      border: 1px solid rgba(44, 59, 45, 0.05);
    }
    
    .wave-bottom {
      position: absolute;
      bottom: -100px;
      left: 0;
      width: 100%;
      height: 100px;
      overflow: hidden;
      z-index: -2;
    }
    .wave-bottom svg {
      width: 100%;
      height: 100%;
    }

    .navbar {
      padding: 12px 0;
      transition: padding var(--fst-transition-base);
    }
    header.scrolled .navbar {
      padding: 8px 0;
    }
 
    .navbar-brand {
      padding: 0;
      margin-right: 2rem;
      transition: opacity var(--fst-transition-base);
    }
    .navbar-brand:hover {
      opacity: 0.8;
    }
    .brand-logo {
      height: 60px;
      width: auto;
      object-fit: contain;
      transition: all var(--fst-transition-base);
      /* Balanced filter for glass effect */
      filter: drop-shadow(0 0 4px rgba(0,0,0,0.15)) brightness(1.1);
    }
    header.scrolled .brand-logo {
      height: 50px;
      filter: drop-shadow(0 0 2px rgba(0,0,0,0.1));
    }
 
    .navbar-nav .nav-link {
      color: var(--fst-green-musgo) !important;
      font-weight: 600;
      font-size: 1.05rem;
      position: relative;
      margin: 0 12px;
      padding: 10px 0;
      text-shadow: 0 0 10px rgba(255,255,255,0.3);
      transition: color var(--fst-transition-base);
    }

    .navbar-nav .nav-link::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: currentColor;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 100;
    }
    
    /* Hover state for Anchors: 50% */
    .navbar-nav .nav-link[fragment]:hover::after {
      width: 100%;
    }
    
    /* Clicked/Active State: ALWAYS 100% */
    .navbar-nav .nav-link.active::after {
      width: 100% !important;
    }
    
    /* Page Hover: 100% */
    .navbar-nav .nav-link:not([fragment]):hover::after {
      width: 100%;
    }

    .navbar-nav .nav-link:hover,
    .navbar-nav .nav-link.active {
      color: var(--fst-gold) !important;
    }
 
    /* Override Bootstrap Toggler for light background */
    .navbar-toggler {
      border-color: rgba(44, 59, 45, 0.3);
    }
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2844, 59, 45, 0.85%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
    }
    .navbar-toggler:focus {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
    }

    /* Mobile Menu adjustments */
    @media (max-width: 991px) {
      header {
        top: 0;
        left: 0;
        width: 100%;
        border-radius: 0;
        border: none;
      }
      header::before {
        border-radius: 0;
        border: none;
        background: var(--fst-color-bg-primary); /* Preenchimento completo com a cor do marfim */
        box-shadow: 0 2px 15px rgba(0,0,0,0.06);
      }
      .navbar-collapse {
        background: var(--fst-color-primary);
        padding: 24px;
        border-radius: 12px; 
        margin-top: 16px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.5);
      }
      header .navbar-nav .nav-link,
      header .navbar-nav .nav-link.active,
      header .navbar-nav .nav-link:hover {
        color: var(--fst-color-bg-primary) !important; /* Branco puro para contraste total no fundo verde */
        text-shadow: none !important;
        margin: 12px 0;
      }
      .brand-logo {
        height: 42px;
      }
      .nav-actions {
        margin-top: 20px;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }
}
