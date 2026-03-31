import { Component, signal, computed, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

interface MediaItem {
  id: number;
  type: 'photo' | 'video';
  url: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  template: `
    <div class="photos-page" [class.modal-open]="!!selectedMedia()">
      <!-- HEADER HERO -->
      <section class="photos-hero">
        <div class="hero-overlay"></div>
        <img src="assets/media/drone/drone-p-25.jpg" alt="Vista Panorâmica Fazenda Santa Terezinha" class="hero-img-static">
        
        <div class="container hero-content">
          <div class="tech-tag">SISTEMA DE MONITORAMENTO // ARQUIVO VISUAL INTEGRADO</div>
          <h1>Hub de <span class="gold">Mídia</span></h1>
          <p>Conheça a Fazenda Santa Terezinha</p>
        </div>

        <div class="scroll-indicator">
          <div class="mouse"></div>
        </div>
      </section>

      <!-- MEDIA HUB -->
      <section class="media-hub container">
        <div class="hub-header">
          <div class="back-nav">
            <a routerLink="/" class="btn-back">
              <span class="icon">&larr;</span> Voltar ao Início
            </a>
          </div>
          <div class="filter-tabs">
            <button [class.active]="filter() === 'all'" (click)="filter.set('all')">Todos (78)</button>
            <button [class.active]="filter() === 'photo'" (click)="filter.set('photo')">Fotografia (51)</button>
            <button [class.active]="filter() === 'video'" (click)="filter.set('video')">Cinematografia (27)</button>
          </div>
        </div>

        <div class="masonry-grid">
          @for (item of filteredItems(); track item.id) {
            <div class="grid-item" [class.video-item]="item.type === 'video'" (click)="expandMedia(item)">
              <div class="media-container glass-frame">
                @if (item.type === 'photo') {
                  <img [src]="item.url" [alt]="item.title" loading="lazy">
                } @else {
                  <video #vid [src]="item.url" loop muted preload="metadata" 
                         (mouseenter)="playWithSound(vid)" 
                         (mouseleave)="stopAndMute(vid)"></video>
                  <div class="play-hint">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <div class="audio-indicator">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>
                    <span>AUDIÇÃO ATIVA</span>
                  </div>
                }
                
                <div class="media-overlay">
                  <div class="hud-labels">
                    <span class="hud-tag">{{ item.category }}</span>
                    <h4>{{ item.title }}</h4>
                  </div>
                  <div class="hud-corners">
                    <span class="c tl"></span><span class="c tr"></span>
                    <span class="c bl"></span><span class="c br"></span>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- LIGHTBOX MODAL (Futuristic Card Overlay) -->
      @if (selectedMedia(); as current) {
        <div class="lightbox active" (click)="closeMedia()">
          <div class="lightbox-overlay-bg"></div>
          <div class="lightbox-content futuristic-card" (click)="$event.stopPropagation()">
            <div class="card-hud-border">
               <span class="h-c tl"></span><span class="h-c tr"></span>
               <span class="h-c bl"></span><span class="h-c br"></span>
               <div class="h-line top"></div><div class="h-line bottom"></div>
            </div>
            
            <button class="close-btn-tech" (click)="closeMedia()">
              <span class="close-icon">&times;</span>
              <span class="close-text">FECHAR MÓDULO</span>
            </button>
            
            <div class="media-wrapper-deep">
              @if (current.type === 'photo') {
                <img [src]="current.url" [alt]="current.title" class="full-img">
              } @else {
                <video [src]="current.url" controls autoplay class="modal-video"></video>
              }
            </div>
            
            <div class="lightbox-footer-tech">
              <div class="footer-left">
                <span class="tech-id">ASSET_ID: 00{{ current.id }}</span>
                <span class="tech-cat">TYPE: {{ current.type | uppercase }}</span>
              </div>
              <div class="footer-center">
                <h3>{{ current.title }}</h3>
                <p>{{ current.category }} // MONITORAMENTO INTEGRADO</p>
              </div>
            </div>
          </div>
        </div>
      }

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

    .photos-page {
      min-height: 100vh;
      color: var(--fst-marfim);
      font-family: 'Jost', sans-serif;
    }
    
    .modal-open { overflow: hidden; height: 100vh; }

    /* HERO SECTION */
    .photos-hero {
      position: relative;
      height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      overflow: hidden;
    }
    .hero-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: radial-gradient(circle at center, rgba(44, 59, 45, 0.4) 0%, var(--fst-green-musgo) 100%);
      z-index: 2;
    }
    .hero-img-static {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      min-width: 100%; min-height: 100%;
      object-fit: cover;
      opacity: 0.6;
    }
    .hero-content {
      position: relative;
      z-index: 3;
      animation: fadeUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    }
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(40px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .tech-tag {
      font-size: 0.75rem;
      letter-spacing: 4px;
      color: var(--fst-gold);
      margin-bottom: 24px;
      font-weight: 700;
    }
    h1 {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(3.5rem, 8vw, 6rem);
      margin-bottom: 20px;
    }
    .gold { color: var(--fst-gold); font-style: italic; }
    .hero-content p {
      max-width: 700px;
      margin: 0 auto;
      font-size: 1.2rem;
      color: rgba(245, 237, 217, 0.7);
      line-height: 1.6;
    }

    /* MEDIA HUB */
    .media-hub {
      padding: 60px 15px 120px 15px;
    }
    .hub-header {
      margin-bottom: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
    .btn-back {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: var(--fst-gold);
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
      transition: all 0.3s ease;
      background: rgba(255,255,255,0.05);
      padding: 8px 20px;
      border-radius: 20px;
    }
    .btn-back:hover { background: rgba(255,255,255,0.1); transform: translateX(-5px); }
    
    .filter-tabs {
      display: flex;
      gap: 10px;
      background: rgba(255, 255, 255, 0.05);
      padding: 6px;
      border-radius: 40px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .filter-tabs button {
      padding: 10px 30px;
      border-radius: 30px;
      font-family: 'Jost', sans-serif;
      font-weight: 600;
      font-size: 0.9rem;
      color: rgba(245, 237, 217, 0.6);
      transition: all 0.3s ease;
      background: transparent;
      border: none;
      cursor: pointer;
    }
    .filter-tabs button.active {
      background: var(--fst-gold);
      color: var(--fst-green-musgo);
      box-shadow: 0 4px 15px rgba(200, 169, 110, 0.3);
    }

    .masonry-grid {
      columns: 3 350px;
      column-gap: 30px;
    }
    .grid-item {
      break-inside: avoid;
      margin-bottom: 30px;
      animation: fadeIn 0.8s ease backwards;
      cursor: pointer;
    }
    .glass-frame {
      position: relative;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .media-container img, .media-container video {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.8s ease;
    }
    
    .audio-indicator {
      position: absolute;
      top: 20px; right: 20px;
      background: rgba(200, 169, 110, 0.9);
      color: var(--fst-green-musgo);
      font-size: 0.6rem;
      font-weight: bold;
      padding: 4px 10px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
      opacity: 0;
      transform: translateY(-10px);
      transition: all 0.3s ease;
      z-index: 5;
    }
    .audio-indicator svg { width: 12px; }
    .grid-item:hover .audio-indicator { opacity: 1; transform: translateY(0); }

    .play-hint {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 60px; height: 60px;
      background: rgba(200, 169, 110, 0.8);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.8;
      transition: all 0.3s ease;
      pointer-events: none;
    }
    .play-hint svg { width: 30px; margin-left: 4px; color: var(--fst-green-musgo); }

    .media-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(to top, rgba(15, 23, 18, 0.9) 0%, transparent 60%);
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .hud-labels h4 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.4rem;
      margin: 0;
      color: #fff;
    }
    .hud-tag {
      font-size: 0.6rem;
      letter-spacing: 2px;
      color: var(--fst-gold);
      text-transform: uppercase;
      margin-bottom: 5px;
      display: block;
    }

    .hud-corners .c {
      position: absolute;
      width: 15px; height: 15px;
      border: 1px solid rgba(200, 169, 110, 0.4);
      transition: all 0.4s ease;
    }
    .c.tl { top: 20px; left: 20px; border-bottom: 0; border-right: 0; }
    .c.tr { top: 20px; right: 20px; border-bottom: 0; border-left: 0; }
    .c.bl { bottom: 20px; left: 20px; border-top: 0; border-right: 0; }
    .c.br { bottom: 20px; right: 20px; border-top: 0; border-left: 0; }

    .glass-frame:hover {
      border-color: var(--fst-gold);
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }
    .glass-frame:hover img, .glass-frame:hover video { transform: scale(1.08); }
    .glass-frame:hover .media-overlay { opacity: 1; }
    .glass-frame:hover .play-hint { opacity: 0; transform: translate(-50%, -50%) scale(1.2); }

    /* LIGHTBOX / FUTURISTIC CARD OVERLAY */
    .lightbox {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px;
      perspective: 1500px;
    }
    
    .lightbox-overlay-bg {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(10, 15, 12, 0.95);
      backdrop-filter: blur(15px);
      animation: fadeIn 0.4s ease forwards;
    }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

    .futuristic-card {
      position: relative;
      width: 90vw;
      max-width: 1300px;
      background: rgba(44, 59, 45, 0.4);
      backdrop-filter: blur(30px);
      border: 1px solid rgba(200, 169, 110, 0.1);
      border-radius: 4px;
      padding: 70px 40px 40px 40px;
      display: flex;
      flex-direction: column;
      gap: 25px;
      box-shadow: 0 100px 200px rgba(0,0,0,1), 0 0 60px rgba(200, 169, 110, 0.1);
      animation: cardEnter 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      transform-style: preserve-3d;
    }
    @keyframes cardEnter {
      from { opacity: 0; transform: scale(0.9) translateY(40px) rotateX(-5deg); }
      to { opacity: 1; transform: scale(1) translateY(0) rotateX(0); }
    }

    .card-hud-border .h-c {
      position: absolute;
      width: 40px; height: 40px;
      border: 2px solid var(--fst-gold);
      z-index: 10;
    }
    .h-c.tl { top: -2px; left: -2px; border-right: 0; border-bottom: 0; }
    .h-c.tr { top: -2px; right: -2px; border-left: 0; border-bottom: 0; }
    .h-c.bl { bottom: -2px; left: -2px; border-right: 0; border-top: 0; }
    .h-c.br { bottom: -2px; right: -2px; border-left: 0; border-top: 0; }

    .h-line { position: absolute; left: 10%; width: 80%; height: 1px; background: linear-gradient(90deg, transparent, var(--fst-gold), transparent); opacity: 0.3; }
    .h-line.top { top: 0; }
    .h-line.bottom { bottom: 0; }

    .close-btn-tech {
      position: absolute;
      top: 25px; right: 25px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(200,169,110,0.3);
      color: var(--fst-gold);
      padding: 10px 20px;
      display: flex;
      align-items: center;
      gap: 15px;
      cursor: pointer;
      font-family: 'Jost', sans-serif;
      font-size: 0.75rem;
      letter-spacing: 3px;
      transition: all 0.3s ease;
      z-index: 20;
    }
    .close-btn-tech:hover {
      background: var(--fst-gold);
      color: var(--fst-green-musgo);
      box-shadow: 0 0 25px rgba(200,169,110,0.4);
    }
    .close-icon { font-size: 1.4rem; line-height: 1; }

    .media-wrapper-deep {
      width: 100%;
      height: 60vh;
      background: #000;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(255,255,255,0.05);
    }
    .full-img, .modal-video {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    .lightbox-footer-tech {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-top: 1px solid rgba(200, 169, 110, 0.2);
      padding-top: 25px;
    }
    .footer-left { display: flex; flex-direction: column; gap: 8px; }
    .tech-id, .tech-cat { font-family: monospace; font-size: 0.8rem; color: var(--fst-gold); opacity: 0.7; }
    
    .footer-center { text-align: right; }
    .footer-center h3 { font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; color: #fff; margin: 0; letter-spacing: 1px; }
    .footer-center p { font-size: 0.8rem; color: var(--fst-gold); letter-spacing: 3px; margin: 8px 0 0 0; opacity: 0.8; }

    /* wave */
    .wave-bottom {
      position: relative;
      bottom: 0;
      left: 0;
      width: 100%;
      line-height: 0;
      z-index: 10;
    }
    .wave-bottom svg { display: block; width: 100%; height: 120px; }

    @media (max-width: 768px) {
      .masonry-grid { columns: 1; }
      h1 { font-size: 3rem; }
      .futuristic-card { padding: 50px 20px 20px 20px; }
      .footer-center h3 { font-size: 1.5rem; }
      .media-wrapper-deep { height: 40vh; }
    }
  `]
})
export class PhotosComponent {
  filter = signal<'all' | 'photo' | 'video'>('all');
  selectedMedia = signal<MediaItem | null>(null);

  mediaItems: MediaItem[] = [];

  constructor() {
    this.generateMediaItems();
  }

  private generateMediaItems() {
    const items: MediaItem[] = [];
    
    // PHOTOS (51 items)
    for (let i = 1; i <= 51; i++) {
        items.push({
            id: i,
            type: 'photo',
            url: `assets/media/drone/drone-p-${i}.jpg`,
            title: `Fazenda Santa Terezinha #${i}`,
            category: 'ARQUIVO TÉCNICO'
        });
    }

    // VIDEOS (27 items)
    for (let i = 1; i <= 27; i++) {
        items.push({
            id: 51 + i,
            type: 'video',
            url: `assets/media/drone/drone-v-${i}.mp4`,
            title: `Fazenda Santa Terezinha #${i}`,
            category: 'MONITORAMENTO 4K'
        });
    }

    this.mediaItems = items;
  }

  filteredItems = computed(() => {
    const f = this.filter();
    if (f === 'all') return this.mediaItems;
    return this.mediaItems.filter(item => item.type === f);
  });

  expandMedia(item: MediaItem) {
    console.log("Expanding media:", item);
    this.selectedMedia.set(item);
  }

  closeMedia() {
    this.selectedMedia.set(null);
  }

  playWithSound(vid: HTMLVideoElement) {
    vid.muted = false;
    const playPromise = vid.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback for strict browser autoplay policies
        vid.muted = true;
        vid.play();
      });
    }
  }

  stopAndMute(vid: HTMLVideoElement) {
    vid.pause();
    vid.currentTime = 0;
    vid.muted = true;
  }

  // @HostListener('document:keydown.escape', ['$event'])
  // handleEscape() {
  //   this.closeMedia();
  // }
  @HostListener('document:keydown.escape')
  handleEscape() {
    this.closeMedia();
  }
}
