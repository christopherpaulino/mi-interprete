import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpreterProfilePage } from './interpreter-profile.page';
import { BookingInterpreterPage } from '../booking-interpreter/booking-interpreter.page';

const routes: Routes = [
  {
    path: '',
    component: InterpreterProfilePage
  },
  {
    path: 'contact',
    loadChildren: () => import('../booking-interpreter/booking-interpreter.module').then(m => m.BookingInterpreterPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterpreterProfilePageRoutingModule { }
