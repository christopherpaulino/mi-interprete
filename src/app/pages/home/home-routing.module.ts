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
        path: 'favs',
        loadChildren: () => import('../favs/favs-routing.module').then(m => m.FavsPageRoutingModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../messages/messages-routing.module').then(m => m.MessagesPageRoutingModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../events/events-routing.module').then(m => m.EventsPageRoutingModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../my-profile/my-profile.module').then(m => m.MyProfilePageModule)
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
