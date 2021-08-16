import { Component, OnInit } from '@angular/core';
import { Skill } from '@shared/model/model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      title: 'HTML5',
      imageUrl: './assets/img/skills/html5.svg',
    },
    {
      title: 'CSS3',
      imageUrl: './assets/img/skills/css3.svg',
    },
    {
      title: 'SASS',
      imageUrl: './assets/img/skills/sass.svg',
    },
    {
      title: 'Adobe Photoshop',
      imageUrl: './assets/img/skills/adobephotoshop.svg',
    },
    {
      title: 'Figma',
      imageUrl: './assets/img/skills/figma.svg',
    },
    {
      title: 'Visual Studio Code',
      imageUrl: './assets/img/skills/visualstudiocode.svg',
    },
    {
      title: 'JavaScript',
      imageUrl: './assets/img/skills/javascript.svg',
    },
    {
      title: 'TypeScript',
      imageUrl: './assets/img/skills/typescript.svg',
    },
    {
      title: 'Git',
      imageUrl: './assets/img/skills/git.svg',
    },
    {
      title: 'Angular',
      imageUrl: './assets/img/skills/angular.svg',
    },
    {
      title: 'Vue.js',
      imageUrl: './assets/img/skills/vuejs.svg',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.skills = this.skills.reverse();
  }

}
