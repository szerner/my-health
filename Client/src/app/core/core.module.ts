import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'shared/shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { DialogService } from 'services/dialog.service';
import { UserService } from 'services/user.service';
import { AuthService } from 'services/auth.service';
import { AuthInterceptor } from 'services/auth.interceptor';
import { AuthGuard } from 'services/auth-guard.service';
import { AdminAuthGuard } from 'services/admin-auth-guard.service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
   imports: [
      RouterModule,
      HttpClientModule,
      SharedModule
   ],
   declarations: [
      NavbarComponent,
      HomeComponent,
      NotFoundComponent,
      LoginFormComponent,
      AccessDeniedComponent,
      UserProfileComponent
   ],
   exports: [
      NavbarComponent,
      HomeComponent,
      NotFoundComponent,
   ],
   entryComponents: [
      LoginFormComponent,
      UserProfileComponent
   ],
   providers: [
      DialogService,
      UserService,
      AuthService,
      AuthGuard,
      AdminAuthGuard,
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthInterceptor,
         multi: true
      }
   ]

})
export class CoreModule { }
