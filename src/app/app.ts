import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoCards } from './components/info-cards/info-cards';
import { OrdersStatus } from './components/orders-status/orders-status';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InfoCards, OrdersStatus],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'templates';
}
