import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ROUTES {
  set?: string,
  icon?: string,
  route?: string,
  name?: string
}

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  myLevelRoutes: ROUTES[] = [
    {
      set: 'fas',
      icon: 'laugh-squint',
      route: 'level/one',
      name: 'Level 1'
    },
    {
      set: 'fas',
      icon: 'grin',
      route: 'level/two',
      name: 'Level 2'
    },
    {
      set: 'fas',
      icon: 'meh',
      route: 'level/three',
      name: 'Level 3'
    },
    {
      set: 'fas',
      icon: 'dizzy',
      route: 'level/four',
      name: 'Level 4'
    }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
