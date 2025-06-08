import { Component } from '@angular/core';
import { Cards } from '../../components/home/cards/cards';
import { Newest } from '../../components/home/newest/newest';
import { Newsletter } from '../../components/home/newsletter/newsletter';

@Component({
  selector: 'app-home',
  imports: [Cards, Newest, Newsletter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
