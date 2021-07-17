import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeToolbarComponent } from './home-toolbar/home-toolbar.component';
import { InterpreterListItemComponent } from './interpreter-list-item/interpreter-list-item.component';
import { LogoHeaderComponent } from './logo-header/logo-header.component';
import { ProfileComponent } from './profile/profile.component';

const components = [
  HomeToolbarComponent,
  InterpreterListItemComponent,
  LogoHeaderComponent,
  ProfileComponent
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
