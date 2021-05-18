import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackBar: MatSnackBar) {
  }

  error(message: string) {
    return this._snackBar.open(message, 'OK', {
      panelClass: ['snackbar-error'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5000
    });
  }
}