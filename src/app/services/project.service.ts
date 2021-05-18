import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataList, Project } from '@shared/model/model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, private snackBar: SnackbarService) { }

  getProjects(): Observable<DataList<Project>> {
    return this.http.get<DataList<Project>>('../../assets/projects/projects.json')
      .pipe(
        retry(1),
        catchError(this.handleError.bind(this))
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.status === 0) {
      errorMessage = 'An error occurred:', error.error;
    } else {
      errorMessage = `Backend Error: ${error.message}`;
    }
    this.snackBar.error(errorMessage);
    return throwError(errorMessage);
  }

}
