import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthGuard } from '@services/auth-guard.service';
import { AdminAuthGuard } from '@services/admin-auth-guard.service';
import { AccessDeniedComponent } from './core/components/access-denied/access-denied.component';
import { HealthDataComponent } from './health/components/health-data/health-data.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full' },
  { path: 'admin', loadChildren: 'src/app/admin/admin.module#AdminModule', canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'health', loadChildren: 'src/app/health/health.module#HealthModule', canActivate: [AuthGuard] },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
