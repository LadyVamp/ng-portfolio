import { Component, OnInit } from '@angular/core';
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  repoUrl: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    { title: 'Project title', description: 'Project description', imageUrl: '../../assets/img/placeholder-image.png', demoUrl: 'https://stackblitz.com/', repoUrl: 'https://github.com/' },
    { title: 'Project title', description: 'Project description', imageUrl: '../../assets/img/placeholder-image.png', demoUrl: 'https://stackblitz.com/', repoUrl: 'https://github.com/' },
    { title: 'Project title', description: 'Project description', imageUrl: '../../assets/img/placeholder-image.png', demoUrl: 'https://stackblitz.com/', repoUrl: 'https://github.com/' },
    { title: 'Project title', description: 'Project description', imageUrl: '../../assets/img/placeholder-image.png', demoUrl: 'https://stackblitz.com/', repoUrl: 'https://github.com/' },
    { title: 'Project title', description: 'Project description', imageUrl: '../../assets/img/placeholder-image.png', demoUrl: 'https://stackblitz.com/', repoUrl: 'https://github.com/' },
    { title: 'Project title', description: 'Project description', imageUrl: '../../assets/img/placeholder-image.png', demoUrl: 'https://stackblitz.com/', repoUrl: 'https://github.com/' },
    { title: 'Project title', description: 'Project description', imageUrl: '../../assets/img/placeholder-image.png', demoUrl: 'https://stackblitz.com/', repoUrl: 'https://github.com/' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
