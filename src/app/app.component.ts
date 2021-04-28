import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-portfolio';

  isShowing: boolean = false;

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  callMethods() {
    this.toggleSidenav();
  }

  navLinks: any[];

  constructor() {
    this.navLinks = [
      {
        label: 'Home',
        path: './home',
        icon: 'home'
      }, {
        label: 'Resume',
        path: './resume',
        icon: 'person_pin'
      }, {
        label: 'Projects',
        path: './projects',
        icon: 'folder'
      }, {
        label: 'Contacts',
        path: './contacts',
        icon: 'email'
      },
    ];
  }



}
