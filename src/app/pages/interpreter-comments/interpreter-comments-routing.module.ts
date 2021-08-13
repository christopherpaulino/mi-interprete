import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpreterCommentsPage } from './interpreter-comments.page';

const routes: Routes = [
  {
    path: '',
    component: InterpreterCommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterpreterCommentsPageRoutingModule {}
