import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingInterpreterPage } from './booking-interpreter.page';

const routes: Routes = [
  {
    path: '',
    component: BookingInterpreterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingInterpreterPageRoutingModule {}
