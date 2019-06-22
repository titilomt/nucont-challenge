import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';
import { StageOneComponent } from '../components/stage-one/stage-one.component';
import { StageTwoComponent } from '../components/stage-two/stage-two.component';
import { HomeComponent } from '../components/home/home.component';
import { StageThreeComponent } from '../components/stage-three/stage-three.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent 
  },
  {
    path: 'level/one',
    component: StageOneComponent
  },
  {
    path: 'level/two',
    component: StageTwoComponent
  },
  {
    path: 'level/three',
    component: StageThreeComponent
  },
  {
    path: 'level/four',
    component: PlaceholderComponent
  },
  //
  // The Wildcard route
  //

  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
