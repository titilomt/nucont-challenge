import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';
import { StageOneComponent } from '../components/stage-one/stage-one.component';
import { HomeComponent } from '../components/home/home.component';

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
    component: PlaceholderComponent
  },
  {
    path: 'level/three',
    component: PlaceholderComponent
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
