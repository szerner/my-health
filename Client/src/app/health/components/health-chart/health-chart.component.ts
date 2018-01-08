import { Component, ViewChild, Input, OnChanges } from '@angular/core';
import { ChartComponent } from 'angular2-chartjs';

@Component({
   templateUrl: './health-chart.component.html'
})

export abstract class HealthChartComponent implements OnChanges {
   @Input() data;
   @ViewChild(ChartComponent) chart: ChartComponent;
   chartData;
   chartOptions;

   constructor() {
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