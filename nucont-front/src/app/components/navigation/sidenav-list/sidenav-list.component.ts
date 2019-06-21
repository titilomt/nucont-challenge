import { Component, Output, EventEmitter } from '@angular/core';

interface ROUTES {
  set?: string,
  icon?: string,
  route?: string,
  name?: string
}

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent {
  @Output() sidenavClose = new EventEmitter();

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


  constructor() { }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
