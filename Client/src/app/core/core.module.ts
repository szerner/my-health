import { NgModule, LOCALE_ID } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { DialogService } from './services/dialog.service';
import { UserService } from './services/user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http);
}

@NgModule({
   imports: [
      RouterModule,
      HttpClientModule,
      SharedModule,
      TranslateModule.forRoot({
         loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
         }
      })
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
      },
      // { provide: LOCALE_ID, useValue: 'de' }
   ]

})
export class CoreModule { }
