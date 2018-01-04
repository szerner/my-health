import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'angular2-chartjs';
import { HealthService } from '../../services/health.service';
import { NotifyService } from '../../services/notify.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
   templateUrl: './health-chart.component.html'
})

export class HealthChartComponent implements OnInit {
   @ViewChild(ChartComponent) chart: ChartComponent;
   chartData;
   chartOptions;

   constructor(
      protected healthService: HealthService,
      protected notifyService: NotifyService
   ) { }

   ngOnInit() {
      this.chartOptions = {
         responsive: true,
         maintainAspectRatio: true,

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
               fill : false,
               borderWidth : 2,
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

      this.notifyService.notification$.subscribe(() => this.loadData());
      this.loadData();
   }

   loadData() {
   }

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