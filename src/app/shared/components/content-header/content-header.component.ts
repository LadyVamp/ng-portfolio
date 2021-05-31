import { Component, OnInit, Input } from '@angular/core';
import * as dayjs from 'dayjs';
import 'dayjs/locale/ru';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
  @Input() dates: string[];
  @Input() title: string;
  @Input() subtitle: string;
  @Input() logo: string;

  constructor() { }

  ngOnInit(): void {
  }

  formatDates(start: string, end: string): string {
    dayjs.locale('ru');

    if (end === 'now') {
      return (dayjs(start).format('MMMM YYYY') + ' — по настоящее время');
    } else {
      return (dayjs(start).format('MMMM YYYY') + ' — ' + dayjs(end).format('MMMM YYYY'));
    }
  }

  differenceBetweenDates(start: string, end: string): string {
    let endDate;
    const startDate = dayjs(start);
    end === 'now' ? endDate = dayjs() : endDate = dayjs(end);
    const diff = endDate.diff(startDate, 'month');
    const y = Math.floor(diff / 12);
    const m = diff % 12;
    if (y === 0) {
      return m + ' месяцев';
    } else {
      return (y + ' год ' + m + ' месяцев');
    }
  }

}
