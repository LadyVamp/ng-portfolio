import { Component, OnInit } from '@angular/core';
import { version } from '../../../package.json';
import * as moment from 'moment'; 

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  counter = 0;
  version: string = version;

  rsbImages = [
    { url: './assets/img/resume/rsb/email1.png', web: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/03102019/PIL_web.html', title: 'Кредит наличными на особых условиях' },
    { url: './assets/img/resume/rsb/email2.png', web: 'https://www.rsb.ru/f/1/global/i/CRM/rsb/01062019_DJ/3082.html', title: 'Дайджест июнь' },
    { url: './assets/img/resume/rsb/check_banner1.jpg', title: 'Баннер 1' },
    { url: './assets/img/resume/rsb/check_banner2.png', title: 'Баннер 2' },
    { url: './assets/img/resume/rsb/claim1.jpg', title: 'Форма для исключения клиентов' },
    { url: './assets/img/resume/rsb/claim2.jpg', title: 'Форма для исключения клиентов / пример валидации' },
    { url: './assets/img/resume/rsb/faceident1.png', title: 'Сервис распознавания лиц' },
    { url: './assets/img/resume/rsb/faceident2.png', title: 'Сервис распознавания лиц / пример результата поиска' },
    { url: './assets/img/resume/rsb/cashoff1.png', title: 'Cashoff / скриншоты макетов' },
    { url: './assets/img/resume/rsb/cashoff2.png', title: 'Cashoff / скриншоты приложения' },
    { url: './assets/img/resume/rsb/dialer_ng_client.png', title: 'Dialer CRM / карточка клиента' },
    { url: './assets/img/resume/rsb/dialer_ng_survey.png', title: 'Dialer CRM / окно назначения встречи' },
    { url: './assets/img/resume/rsb/camp_home.png', title: 'CRM Camp / главная страница' },
    { url: './assets/img/resume/rsb/camp_edit.png', title: 'CRM Camp / редактирование кампании' },
  ]

  vskImages = [
    { url: './assets/img/resume/vsk/smev.png', title: 'СМЭВ' },
    { url: './assets/img/resume/vsk/sunp1.png', title: 'СУНП / конфигурации' },
    { url: './assets/img/resume/vsk/sunp2.png', title: 'СУНП / выбрана конфигурация' },
    { url: './assets/img/resume/vsk/sunp3.png', title: 'СУНП / редактирование конфигурации' },
    { url: './assets/img/resume/vsk/sunp4.png', title: 'СУНП / запросы на применение' },
    { url: './assets/img/resume/vsk/guard1.jpg', title: 'Росгвардия / меню' },
    { url: './assets/img/resume/vsk/guard2.jpg', title: 'Росгвардия / сервисы' },
    { url: './assets/img/resume/vsk/guard3.jpg', title: 'Росгвардия / фильтры' },
    { url: './assets/img/resume/vsk/gas1.png', title: 'ГАС / реестр операторов' },
    { url: './assets/img/resume/vsk/gas2.png', title: 'ГАС / редактирование оператора' },
    { url: './assets/img/resume/vsk/gas3.png', title: 'ГАС / редактирование публикации' },
    { url: './assets/img/resume/vsk/dashboard.png', title: 'СЦ дашборд' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter++;
  }

  pluralize(count: number, words = ['месяц', 'месяца', 'месяцев']) {
    const cases = [2, 0, 1, 1, 1, 2];
    return count + ' ' + words[ (count % 100 > 4 && count % 100 < 20) ? 2 : cases[ Math.min(count % 10, 5)] ];
  }

  calculateWorkExperience() {
    const DIPLOMA_PAUSE = 1;
    const start_date = moment('2016-09');
    const end_date = moment();
    const duration = moment.duration(end_date.diff(start_date));
    return (duration.years() - DIPLOMA_PAUSE) + ' лет ' + this.pluralize(duration.months());
  }

}
