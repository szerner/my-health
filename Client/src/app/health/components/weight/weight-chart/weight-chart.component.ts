import { Component } from '@angular/core';
import { HealthChartComponent } from '../../health-chart/health-chart.component';

@Component({
   selector: 'weight-chart',
   templateUrl: '../../health-chart/health-chart.component.html',
   styles: ['chart { background-color: #f5f5f5; }']
})

export class WeightChartComponent extends HealthChartComponent {

   initChart() {
      this.resetDatasets();
      this.addDataset({
         label: 'Body Weight [kg]', borderColor: 'rgb(0, 123, 255)',
         data: this.data.map(bodyWeight => { return { x: bodyWeight.time, y: bodyWeight.weight } })
      });
      this.refresh();
   }

}
