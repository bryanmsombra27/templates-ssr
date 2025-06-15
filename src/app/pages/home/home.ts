import { Component } from '@angular/core';
import { FirstSection } from '../../components/home/first-section/first-section';
import { SecondSection } from '../../components/home/second-section/second-section';

@Component({
  selector: 'app-home',
  imports: [FirstSection, SecondSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
