import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HealthModule } from './health/health.module';
import { AdminModule } from './admin/admin.module';
// import { registerLocaleData } from '@angular/common';
// import localeDe from '@angular/common/locales/de';

// registerLocaleData(localeDe);

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      CoreModule,
      SharedModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HealthModule,
      AdminModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
