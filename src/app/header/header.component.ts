import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks: any[];

  constructor() {
    this.navLinks = [
      {
        label: 'Home',
        link: './home'
      }, {
        label: 'Resume',
        link: './resume',
      }, {
        label: 'Projects',
        link: './projects',
      }, {
        label: 'Contacts',
        link: './contacts',
      },
    ];
  }

  ngOnInit(): void {
  }

}
