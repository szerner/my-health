import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from '@shared/shared.module';

import { AppComponent } from './app.component';
import { HealthModule } from './health/health.module';
import { AdminModule } from './admin/admin.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      CoreModule,
      NgbModule.forRoot(),
      SharedModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      // HealthModule, // workaround: not actually lazy loading
      // AdminModule // workaround: not actually lazy loading
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
