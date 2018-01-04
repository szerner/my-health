import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HealthDataComponent } from './components/health-data/health-data.component';
import { HealthDataViewComponent } from './components/health-data-view/health-data-view.component';
import { CirculationTableComponent } from './components/circulation/circulation-table/circulation-table.component';
import { CirculationChartComponent } from './components/circulation/circulation-chart/circulation-chart.component';
import { WeightTableComponent } from './components/weight/weight-table/weight-table.component';
import { WeightChartComponent } from './components/weight/weight-chart/weight-chart.component';
import { AuthGuard } from '../core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: HealthDataComponent,
    children: [
      { path: '', redirectTo: 'circulation', pathMatch: 'full'},
      { path: 'circulation', component: HealthDataViewComponent, canActivate: [AuthGuard] },
      { path: 'weight', component: HealthDataViewComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HealthRoutingModule { }
