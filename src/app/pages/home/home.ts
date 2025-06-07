import { Component } from '@angular/core';
import { Cards } from '../../components/home/cards/cards';

@Component({
  selector: 'app-home',
  imports: [Cards],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
