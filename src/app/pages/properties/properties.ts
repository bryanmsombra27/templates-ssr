import { Component } from '@angular/core';
import { Hero } from '../../components/properties/hero/hero';
import { Filters } from '../../components/properties/filters/filters';
import { Cards } from '../../components/properties/cards/cards';

@Component({
  selector: 'app-properties',
  imports: [Hero, Filters, Cards],
  templateUrl: './properties.html',
  styleUrl: './properties.css',
})
export class Properties {}
