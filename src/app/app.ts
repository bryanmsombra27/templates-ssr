import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'templates';
}
