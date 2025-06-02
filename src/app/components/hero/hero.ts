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

  title = input<string>('Un verano con sabor');
  description = input<string>(
    'Endulza tus dias con los favoritos de temporada.'
  );
  heroBackground = input<string>('#f0fbc1');
  invertOrder = input<boolean>(false);
}
