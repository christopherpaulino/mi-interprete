import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyProfilePage } from './my-profile.page';
import { BecomeInterpreterComponent } from './become-interpreter/become-interpreter.component';

const routes: Routes = [
  {
    path: '',
    component: MyProfilePage
  },
  {
    path: 'become-interpreter',
    component: BecomeInterpreterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProfilePageRoutingModule { }
