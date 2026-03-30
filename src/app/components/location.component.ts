import { Component } from "@angular/core";

@Component({
    selector: 'app-location',
    standalone: true,
    template: `
    <section id="localizacao" class="location-section">
      <!-- Mapa incorporado do Google Maps -->
      <!-- <iframe
        src=""
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe> -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3697.7647721389576!2d-48.319805124714414!3d-22.05859191535793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDAzJzI5LjgiUyA0OMKwMTknMDIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1774896727271!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    `,
    styles: [`
    .location-section {
      padding: 100px 0;
    }
    `]
})

export class LocationComponent {
    constructor() { }
}