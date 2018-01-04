import { Component } from '@angular/core';
import { HealthService } from '../../../services/health.service';
import { HealthChartComponent } from '../../health-chart/health-chart.component';

@Component({
   templateUrl: '../../health-chart/health-chart.component.html'
})

export class CirculationChartComponent extends HealthChartComponent {

   loadData() {
      this.healthService.getCirculations()
         .subscribe(circulationData => {
            this.resetDatasets();
            this.addDataset({
               label: 'Systolic [mmHg]', borderColor: 'rgb(0, 123, 255)',
               data: circulationData.map(circulation => { return { x: circulation.time, y: circulation.pressureSystolic } })
            });
            this.addDataset({
               label: 'Diastolic [mmHg]', borderColor: 'rgba(0, 123, 255, 0.4)',
               data: circulationData.map(circulation => { return { x: circulation.time, y: circulation.pressureDiastolic } })
            });
            this.addDataset({
               label: 'Heart Rate [BpM]', borderColor: 'rgb(220, 53, 69)',
               data: circulationData.map(circulation => { return { x: circulation.time, y: circulation.heartRate } })
            });
            this.refresh();
         });
   }

}
