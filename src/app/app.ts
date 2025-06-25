import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { DescriptionCards } from './components/description-cards/description-cards';
import { Schedule } from './components/schedule/schedule';
import { SoccerFields } from './components/soccer-fields/soccer-fields';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Hero,
    DescriptionCards,
    Schedule,
    SoccerFields,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'templates';
}
