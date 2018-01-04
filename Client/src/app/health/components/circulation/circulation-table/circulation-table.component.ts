import { Component } from '@angular/core';
import { HealthTableComponent } from '../../health-table/health-table.component';

@Component({
   selector: 'circulation-table',
   templateUrl: './circulation-table.component.html',
   styleUrls: ['./circulation-table.component.css']
})
export class CirculationTableComponent extends HealthTableComponent {
}