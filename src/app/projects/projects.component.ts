import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Project } from '@shared/model/model';
import { ProjectService } from '@services/project.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  faGithub = faGithub;
  faGlobe = faGlobe;

  projects: Project[];
  types: string[];
  filteredProjects: Project[];
  selectedType = 'All';
  isLoading = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;
    this.projectService.getProjects()
      .pipe(
        map(res => res.data
          .filter(p => p.title !== 'templateCard')
        )
      )
      .subscribe(data => {
        this.projects = this.filteredProjects = data.sort((a,b) => b.year - a.year);
        this.types = this.getUniqueTypes();
        this.isLoading = false;
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

  getUniqueTypes(): string[] {
    const types = this.projects.map(x => x.type);
    return Array.from(new Set(types)).sort();
  }

}
