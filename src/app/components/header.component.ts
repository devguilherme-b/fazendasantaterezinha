import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header [class.scrolled]="isScrolled()">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid px-4">
          <a class="navbar-brand" href="#">Fazenda Santa Terezinha</a>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#inicio">Início</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#historia">Nossa História</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#estrutura">Estrutura</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#fotos">Fotos</a>
              </li>
            </ul>
            <div class="nav-actions d-flex">
              <a href="#contato" class="btn-primary" style="padding: 10px 20px; font-size: 1rem;">Contato</a>
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
      background: rgba(255, 255, 255, 0.05); 
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      transition: all var(--fst-transition-base);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    header.scrolled {
      background: rgba(44, 59, 45, 0.85); /* var(--fst-color-primary) with opacity */
      backdrop-filter: blur(12px);
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    .navbar {
      padding: 12px 0;
      transition: padding var(--fst-transition-base);
    }
    header.scrolled .navbar {
      padding: 8px 0;
    }

    .navbar-brand {
      font-family: var(--fst-font-primary);
      font-size: 1.8rem;
      font-weight: 700;
      color: white !important;
      transition: color var(--fst-transition-base);
    }
    header.scrolled .navbar-brand {
      color: var(--fst-color-highlight) !important;
    }

    .navbar-nav .nav-link {
      color: white !important;
      font-weight: 500;
      font-size: 1.05rem;
      position: relative;
      margin: 0 12px;
      transition: color var(--fst-transition-base);
    }
    .navbar-nav .nav-link::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--fst-color-highlight);
      transition: width var(--fst-transition-base);
    }
    .navbar-nav .nav-link:hover::after {
      width: 100%;
    }

    /* Override Bootstrap Toggler for dark/transparent background */
    .navbar-toggler {
      border-color: rgba(255, 255, 255, 0.5);
    }
    .navbar-toggler-icon {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.85%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
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
      .navbar-collapse {
        background: var(--fst-color-primary);
        padding: 24px;
        border-radius: 12px;
        margin-top: 16px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.5);
      }
      .navbar-nav .nav-link {
        margin: 8px 0;
      }
      .nav-actions {
        margin-top: 16px;
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
