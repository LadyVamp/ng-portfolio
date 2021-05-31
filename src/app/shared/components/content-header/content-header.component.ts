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
      return (moment(new Date(start)).format('MMMM YYYY') + ' — по настоящее время');
    } else {
      return (moment(new Date(start)).format('MMMM YYYY') + ' — ' + moment(new Date(end)).format('MMMM YYYY'));
    }
  }

  differenceBetweenDates(start: string, end: string): string {
    let endDate;
    const startDate = moment(new Date(start));
    end === 'now' ? endDate = moment() : endDate = moment(new Date(end));
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
