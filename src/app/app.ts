import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Articles } from './components/articles/articles';
import { NewsLetter } from './components/news-letter/news-letter';
import { Cards } from './components/cards/cards';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Articles, NewsLetter, Cards],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'templates';
}
