import { Component } from '@angular/core';
import { HealthService } from '../../../services/health.service';
import { HealthChartComponent } from '../../health-chart/health-chart.component';

@Component({
   templateUrl: '../../health-chart/health-chart.component.html'
})

export class WeightChartComponent extends HealthChartComponent {

   loadData() {
      this.healthService.getBodyWeights()
         .subscribe(weightData => {
            this.resetDatasets();
            this.addDataset({
               label: 'Body Weight [kg]', borderColor: 'rgb(0, 123, 255)',
               data: weightData.map(bodyWeight => { return { x: bodyWeight.time, y: bodyWeight.weight } })
            });
            this.refresh();
         });
   }


}
