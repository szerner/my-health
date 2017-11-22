import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    NotFoundComponent
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
