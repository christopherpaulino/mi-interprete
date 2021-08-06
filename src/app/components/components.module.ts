import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeToolbarComponent } from './home-toolbar/home-toolbar.component';
import { InterpreterListItemComponent } from './interpreter-list-item/interpreter-list-item.component';
import { LogoHeaderComponent } from './logo-header/logo-header.component';
import { ProfileComponent } from './profile/profile.component';
import { BookingListItemComponent } from './booking-list-item/booking-list-item.component';
import { RatePipe } from '../shared/pipe/rate.pipe';
import { PipeModule } from '../shared/pipe/pipe.module';

const components = [
  HomeToolbarComponent,
  InterpreterListItemComponent,
  LogoHeaderComponent,
  ProfileComponent,
  BookingListItemComponent
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    IonicModule, PipeModule
  ]
})
export class ComponentsModule { }
