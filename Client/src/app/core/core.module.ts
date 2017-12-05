import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { DialogService } from './services/dialog.service';

@NgModule({
  imports: [
    RouterModule
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
  ],
  providers: [
    DialogService
  ]

})
export class CoreModule { }
