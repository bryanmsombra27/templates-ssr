import { Component } from '@angular/core';
import { FirstSection } from '../../components/home/first-section/first-section';
import { SecondSection } from '../../components/home/second-section/second-section';
import { ThirdSection } from '../../components/home/third-section/third-section';

@Component({
  selector: 'app-home',
  imports: [FirstSection, SecondSection, ThirdSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
