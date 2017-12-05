import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HealthDataComponent } from './components/health-data/health-data.component';
import { HealthDataViewComponent } from './components/health-data-view/health-data-view.component';
import { CirculationTableComponent } from './components/circulation/circulation-table/circulation-table.component';
import { CirculationChartComponent } from './components/circulation/circulation-chart/circulation-chart.component';
import { WeightTableComponent } from './components/weight/weight-table/weight-table.component';
import { WeightChartComponent } from './components/weight/weight-chart/weight-chart.component';

const routes: Routes = [
  {
    path: '', component: HealthDataComponent,
    children: [
      { path: '', redirectTo: 'circulation', pathMatch: 'full'},
      {
        path: 'circulation', component: HealthDataViewComponent,
        children: [
          { path: '', redirectTo: 'table', pathMatch: 'full'},
          { path: 'table', component: CirculationTableComponent},
          { path: 'chart', component: CirculationChartComponent},
        ]
      },
      {
        path: 'weight', component: HealthDataViewComponent,
        children: [
          { path: '', redirectTo: 'table', pathMatch: 'full' },
          { path: 'table', component: WeightTableComponent },
          { path: 'chart', component: WeightChartComponent },
        ]
      },

    ]
  }
];
// const routes: Routes = [
//   { path: '', redirectTo: 'health-data', pathMatch: 'full' },
//   { path: 'health-data', component: HealthDataComponent }
// ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HealthRoutingModule { }
