import { Component, OnInit, Input, ContentChild, TemplateRef, ElementRef } from '@angular/core';
import * as moment from 'moment';

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
    moment.locale('ru');

    if (end === 'now') {
      return (moment(start).format('MMMM YYYY') + ' — по настоящее время');
    } else {
      return (moment(start).format('MMMM YYYY') + ' — ' + moment(end).format('MMMM YYYY'));
    }
  }

  differenceBetweenDates(start: string, end: string): string {
    const startDate = moment(start);
    const endDate = moment(end);

    if (end === 'now') {
      const diff = moment().diff(startDate, 'month');
      return diff + ' месяцев';
    } else {
      const diff = endDate.diff(startDate, 'month');
      if (diff < 12) {
        return diff + ' месяцев';
      } else {
        const y = Math.ceil(diff / 12);
        const m = diff % 12;
        return (y + ' года ' + m + ' месяцев');
      }
    }
  }

}
