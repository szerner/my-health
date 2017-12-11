import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full' },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'health', loadChildren: 'app/health/health.module#HealthModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
