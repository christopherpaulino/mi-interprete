import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailValidatorPage } from './email-validator.page';

const routes: Routes = [
  {
    path: '',
    component: EmailValidatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailValidatorPageRoutingModule {}
