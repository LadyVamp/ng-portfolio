import { Component, ViewChild, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Router, NavigationStart } from '@angular/router';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { OverlayContainer } from '@angular/cdk/overlay';
import { version } from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version: string = version;
  title = 'ng-portfolio';
  isHandset = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        if (result.matches) {
          this.isHandset = true;
          return true;
        } else {
          this.isHandset = false;
          return false;
        }
      })
    );
  @ViewChild('drawer', { static: true }) drawer: MatDrawerContainer;

  currentTheme = '';
  @HostBinding('class') componentCssClass: string;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, public overlayContainer: OverlayContainer) {
    this.router.events.pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => {
        if (this.isHandset) {
          this.drawer.close();
          console.log('closed');
        }
      });
    this.onSetTheme('default');
  }

  onSetTheme(theme: string): void {
    this.currentTheme = theme;
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

}
