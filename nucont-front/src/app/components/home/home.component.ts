import { Component, OnInit } from '@angular/core';

interface ROUTES {
  set?: string,
  icon?: string,
  route?: string,
  title?: string,
  desc?:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  myLevelRoutes: ROUTES[] = [
    {
      set: 'fas',
      icon: 'laugh-squint',
      route: 'level/one',
      title: 'LEVEL_1',
      desc: 'LEVEL_1_DESC'
    },
    {
      set: 'fas',
      icon: 'grin',
      route: 'level/two',
      title: 'LEVEL_2',
      desc: 'LEVEL_2_DESC'
    },
    {
      set: 'fas',
      icon: 'meh',
      route: 'level/three',
      title: 'LEVEL_3',
      desc: 'LEVEL_3_DESC'
    },
    {
      set: 'fas',
      icon: 'dizzy',
      route: 'level/four',
      title: 'LEVEL_4',
      desc: 'LEVEL_4_DESC'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
