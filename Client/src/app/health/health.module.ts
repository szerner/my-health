import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HealthDataComponent } from './components/health-data/health-data.component';
import { HealthRoutingModule } from './health-routing.module';
import { HealthDataViewComponent } from './components/health-data-view/health-data-view.component';
import { CirculationTableComponent } from './components/circulation/circulation-table/circulation-table.component';
import { CirculationChartComponent } from './components/circulation/circulation-chart/circulation-chart.component';
import { WeightChartComponent } from './components/weight/weight-chart/weight-chart.component';
import { WeightTableComponent } from './components/weight/weight-table/weight-table.component';
import { WeightFormComponent } from './components/weight/weight-form/weight-form.component';
import { CirculationFormComponent } from './components/circulation/circulation-form/circulation-form.component';
import { HealthService } from './services/health.service';
import { ChartModule } from 'angular2-chartjs';
import { DialogService } from '../core/services/dialog.service';

@NgModule({
   imports: [
      SharedModule,
      HealthRoutingModule,
      ChartModule
   ],
   declarations: [
      HealthDataComponent,
      HealthDataViewComponent,
      CirculationTableComponent,
      CirculationChartComponent,
      WeightChartComponent,
      WeightTableComponent,
      CirculationFormComponent,
      WeightFormComponent
   ],
   entryComponents: [
      WeightFormComponent,
      CirculationFormComponent
   ],
   providers: [
      HealthService,
      DialogService
   ]

})
export class HealthModule { }
