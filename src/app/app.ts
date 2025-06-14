import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoCards } from "./components/info-cards/info-cards";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InfoCards],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'templates';
}
