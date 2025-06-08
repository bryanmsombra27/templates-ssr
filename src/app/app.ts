import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/shared/navbar/navbar';
import { Footer } from './components/shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App {
  protected title = 'templates';
}
