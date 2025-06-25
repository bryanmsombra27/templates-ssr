import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Schedule } from '../schedule/schedule';

@Component({
  selector: 'app-soccer-fields',
  imports: [Schedule],
  templateUrl: './soccer-fields.html',
  styleUrl: './soccer-fields.css',
})
export class SoccerFields {
  @ViewChild(Schedule)
  schedule!: Schedule;

  openModal() {
    this.schedule.toggleModal();
  }
}
