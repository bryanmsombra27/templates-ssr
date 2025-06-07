import { Component } from '@angular/core';
import { Cards } from '../../components/home/cards/cards';
import { Newest } from '../../components/home/newest/newest';

@Component({
  selector: 'app-home',
  imports: [Cards, Newest],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
