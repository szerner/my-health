import { Component, Input } from '@angular/core';
import { HealthChartComponent } from '../../health-chart/health-chart.component';
import { Observable } from 'rxjs/Observable';
import { User } from 'models';

@Component({
   selector: 'weight-chart',
   templateUrl: '../../health-chart/health-chart.component.html',
   styles: ['chart { background-color: #f5f5f5; }']
})

export class WeightChartComponent extends HealthChartComponent {
   @Input() user$: Observable<User>;
   user: User;

   ngOnInit() {
      // this.user$.subscribe(user => {
      //    this.user = user;
      //    this.initChart();
      // });
   }
   
   initChart() {
      this.resetDatasets();
      this.addDataset({
         label: 'Body Weight [kg]', borderColor: 'rgb(0, 123, 255)',
         data: this.data.map(bodyWeight => { return { x: bodyWeight.time, y: bodyWeight.weight } })
      });
      // if (this.user && this.user.height) {
      //    this.addDataset({
      //       label: 'BMI', borderColor: 'rgb(220, 53, 69)',
      //       yAxisID: 'y-bmi',
      //       data: this.data.map(bodyWeight => {
      //          return { x: bodyWeight.time, y: this.healthService.getBMI(bodyWeight.weight, this.user.height).index }
      //       })
      //    });   
      // }
      this.refresh();
   }

}
