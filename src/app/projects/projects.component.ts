import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Project } from '@shared/model/model';
import { ProjectService } from '@services/project.service';

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
  filteredProjects: Project[];
  selectedType = 'All';

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.projectService.getProjects().pipe()
      .subscribe(res => {
        this.projects = this.filteredProjects = res.data;
      });
  }

  applyFilter(type: string): void {
    this.selectedType = type;
    this.filteredProjects = this.projects;

    if (type === 'All') {
      return;
    } else {
      this.filteredProjects = this.filteredProjects.filter(item => item.type === type);
    }
  }

}