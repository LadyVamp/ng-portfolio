import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataList, Project } from '@shared/model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<DataList<Project>> {
    return this.http.get<any>('../../assets/projects/projects.json');
  }
}
