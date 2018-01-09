import { Component, ViewChild, Input, OnChanges } from '@angular/core';
import { ChartComponent } from 'angular2-chartjs';
import { HealthService } from '../../services/health.service';

@Component({
   templateUrl: './health-chart.component.html'
})

export abstract class HealthChartComponent implements OnChanges {
   @Input() data;
   @ViewChild(ChartComponent) chart: ChartComponent;
   chartData;
   chartOptions;

   constructor(protected healthService: HealthService) {
      this.chartOptions = {
         responsive: true,
         maintainAspectRatio: true,
         layout: {
            padding: {
               left: 10,
               right: 10,
               top: 20,
               bottom: 10
            }
         },

         tooltips: {
            displayColors: false
         },

         scales: {
            xAxes: [
               {
                  type: 'time',
                  time: {
                     unit: 'day',
                     tooltipFormat: 'l'
                  }
               }
            ],
            yAxes: [
               {
                  id: 'y-default',
                  type: 'linear',
                  position: 'left'
               },
               {
                  id: 'y-bmi',
                  type: 'linear',
                  position: 'right',
                  color: 'rgba(220, 53, 69, 0.1)',
                  display: false,
                  ticks: {
                     min: 16,
                     max: 30,
                     fontColor: 'rgb(220, 53, 69)'
                  }
               }
            ]
         },

         elements: {
            line: {
               fill: false,
               borderWidth: 2,
               tension: 0.2
            }
         },
         legend: {
            position: 'bottom'
         }
      };

      this.chartData = {
         datasets: [
         ]
      };
   }

   ngOnChanges() {
      this.initChart();
   }

   abstract initChart();

   hasData(): boolean {
      return this.chartData.datasets.reduce((total, ds) => total + ds.data.length, 0) > 0;
   }

   addDataset(ds: any) {
      this.chartData.datasets.push(ds);
   }

   resetDatasets() {
      this.chartData.datasets = [];
   }

   refresh() {
      if (this.hasData() && this.chart) this.chart.chart.update();
   }

}