import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { DialogService } from './services/dialog.service';
import { BootstrapModule } from '../shared/modules/bootstrap.module';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    RouterModule,
    BootstrapModule
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
    DialogService,
    UserService
  ]

})
export class CoreModule { }
