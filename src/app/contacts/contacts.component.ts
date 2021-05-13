import { Component, OnInit } from '@angular/core';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  faGithub = faGithub;
  faTelegram = faTelegram;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}