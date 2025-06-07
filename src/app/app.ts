import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Articles } from './components/articles/articles';
import { NewsLetter } from './components/news-letter/news-letter';
import { Cards } from './components/cards/cards';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Articles, NewsLetter, Cards],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected title = 'Home';

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTags([
      {
        name: 'description',
        content:
          'isfruta las mejores hamburguesas artesanales en Shadow Burguer Shop. Hechas con ingredientes frescos y 100% sabor.',
      },
      {
        name: 'keywords',
        content:
          'hamburguesas, hamburguesas baratas, shadow burguer shop, comida rapida',
      },
      { name: 'author', content: 'Bryan' },
      { name: 'robots', content: 'index, follow' },
      { name: 'revisit-after', content: '1 days' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      {
        property: 'og:title',
        content: 'Shadow Burguer Shop  | Hamburgesas artesanales',
      },
      { property: 'og:description', content: 'hamburguesas al mejor precio' },
      {
        property: 'og:image',
        content: 'https://shadow-burguer-shop.onrender.com/logo.png',
      },
    ]);
  }
}
