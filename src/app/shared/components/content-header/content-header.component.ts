import { Component, OnInit, Input, ContentChild, TemplateRef, ElementRef } from '@angular/core';

@Component({
  selector: 'content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
  @Input() dates: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() logo: string;

  constructor() { }

  ngOnInit() {
  }

}
