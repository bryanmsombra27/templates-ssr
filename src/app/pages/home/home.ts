import { Component } from '@angular/core';
import { Cards } from '../../components/home/cards/cards';
import { Newest } from '../../components/home/newest/newest';
import { Newsletter } from '../../components/home/newsletter/newsletter';
import { ContactInfo } from '../../components/home/contact-info/contact-info';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Cards, Newest, Newsletter, ContactInfo, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
