import { Component } from '@angular/core';
import { FirstSection } from '../../components/home/first-section/first-section';

@Component({
  selector: 'app-home',
  imports: [FirstSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
