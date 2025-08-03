import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  image = input<string>('malteada-frape.jpg');
  imageAlt = input<string>('malteada y frape');

  title = input<string>('El café que inspira tu día');
  description = input<string>(
    'Descubre nuestra selección de cafés artesanales y déjate llevar por una experiencia de sabor única. Cada taza, una nueva historia.'
  );
  heroBackground = input<string>('#F5F5DC');
  invertOrder = input<boolean>(false);
}
