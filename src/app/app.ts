import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Brands } from './components/brands/brands';
import { Card } from './components/card/card';
import { Steps } from './components/steps/steps';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Brands, Card, Steps],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'templates';
}
