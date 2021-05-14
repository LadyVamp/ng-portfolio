import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  repoUrl: string;
  type: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  faGithub = faGithub;
  faGlobe = faGlobe;

  projects: Project[];
  types = ['All', 'Angular', 'JavaScript', 'Other'];

  constructor() { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projects = [
      { title: 'Project title', description: 'Project description', imageUrl: '../../assets/img/placeholder-image.png', demoUrl: 'https://stackblitz.com/', repoUrl: 'https://github.com/', type: 'Angular' },
      { title: 'Project title', description: 'Project description', imageUrl: '../../assets/img/placeholder-image.png', demoUrl: 'https://stackblitz.com/', repoUrl: 'https://github.com/', type: 'Angular' },
      { title: 'Project title', description: 'Project description', imageUrl: '../../assets/img/placeholder-image.png', demoUrl: 'https://stackblitz.com/', repoUrl: 'https://github.com/', type: 'JavaScript' },
      { title: 'Project title', description: 'Project description', imageUrl: '../../assets/img/placeholder-image.png', demoUrl: 'https://stackblitz.com/', repoUrl: 'https://github.com/', type: 'JavaScript' },
      { title: 'Project title', description: 'Project description', imageUrl: '../../assets/img/placeholder-image.png', demoUrl: 'https://stackblitz.com/', repoUrl: 'https://github.com/', type: 'Other' },
    ];
  }

  applyFilter(type: string) {
    console.log(type, 'projects %o', this.projects);
    this.getProjects();
    if (type === 'All') {
      return;
    } else {
      this.projects = this.projects.filter(t => t.type === type);
    }
  }

}
