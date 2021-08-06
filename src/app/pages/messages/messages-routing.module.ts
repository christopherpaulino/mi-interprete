import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesPage } from './messages.page';
import { BookingDetailsPage } from './booking-details/booking-details.page';

const routes: Routes = [
  {
    path: '',
    component: MessagesPage,
  },
  {
    path: 'details/:id',
    loadChildren: () => import("./booking-details/booking-details.module").then(m => m.BookingDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagesPageRoutingModule { }
