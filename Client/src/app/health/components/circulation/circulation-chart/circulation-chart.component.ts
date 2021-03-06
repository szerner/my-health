import { Component } from '@angular/core';
import { HealthChartComponent } from '../../health-chart/health-chart.component';

@Component({
   selector: 'circulation-chart',
   templateUrl: '../../health-chart/health-chart.component.html',
   styles: ['chart { background-color: #f5f5f5; }']
})

export class CirculationChartComponent extends HealthChartComponent {

   initChart() {
      this.resetDatasets();
      this.addDataset({
         label: this.translate.instant('systolic') + ' [mmHg]', borderColor: 'rgb(0, 123, 255)',
         yAxisID: 'y-default',
         data: this.data
            .filter(circulation => circulation.pressureSystolic != null)   
            .map(circulation => { return { x: circulation.time, y: circulation.pressureSystolic } })
      });
      this.addDataset({
			label: this.translate.instant('diastolic') + ' [mmHg]', borderColor: 'rgba(0, 123, 255, 0.4)',
         yAxisID: 'y-default',
         data: this.data
            .filter(circulation => circulation.pressureDiastolic != null)    
            .map(circulation => { return { x: circulation.time, y: circulation.pressureDiastolic } })
      });
      this.addDataset({
			label: this.translate.instant('heart-rate') + ' [BpM]', borderColor: 'rgb(220, 53, 69)',
         yAxisID : 'y-default',
         data: this.data
            .filter(circulation => circulation.heartRate != null)    
            .map(circulation => { return { x: circulation.time, y: circulation.heartRate } })
      });
      this.refresh();
   }

}
