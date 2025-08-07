import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoCards } from './components/info-cards/info-cards';
import { OrdersStatus } from './components/orders-status/orders-status';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InfoCards, OrdersStatus, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isActiveMenu = signal(false);

  protected title = 'templates';

  toggleMenu() {
    this.isActiveMenu.update((state) => !state);
  }
}
