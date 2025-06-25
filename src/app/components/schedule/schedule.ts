import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  signal,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-schedule',
  imports: [CommonModule],
  templateUrl: './schedule.html',
  styleUrl: './schedule.css',
  encapsulation: ViewEncapsulation.None,
})
export class Schedule implements OnInit {
  date = signal('');
  @ViewChild('datepicker')
  datePicker!: ElementRef;

  isOpen = signal(false);

  ngOnInit(): void {
    this.formatDate(new Date());
  }

  formatDate(date: Date) {
    const formater = new Intl.DateTimeFormat('es-ES', { dateStyle: 'full' });

    this.date.set(formater.format(date));
  }

  setSelectedDate(e: any) {
    const value = e.target.value;

    this.formatDate(new Date(`${value}T12:00:00`));
  }

  toggleModal() {
    this.isOpen.update((state) => !state);
  }
}
