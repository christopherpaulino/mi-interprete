import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MessagesPageModule } from '../messages/messages.module';
import { FavsPageModule } from '../favs/favs.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'interpreters',
        loadChildren: () => import('../interpreter-list/interpreter-list.module').then(m => m.InterpreterListPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../messages/messages.module').then(m => m.MessagesPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../events/events.module').then(m => m.EventsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../my-profile/my-profile.module').then(m => m.MyProfilePageModule)
      },
      {
        path: 'interpreter/profile/:id',
        loadChildren: () => import("../interpreter-profile/interpreter-profile.module").then(m => m.InterpreterProfilePageModule)
      },

      {
        path: '',
        redirectTo: '/home/interpreters',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
