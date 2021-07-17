import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpreterProfilePage } from './interpreter-profile.page';

const routes: Routes = [
  {
    path: '',
    component: InterpreterProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterpreterProfilePageRoutingModule {}
