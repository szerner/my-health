import { Component, Input, OnInit } from '@angular/core';
import { HealthService } from '../../../services/health.service';
import { User } from 'models';
import { Observable } from 'rxjs/Observable';
import { HealthTableComponent } from '../../health-table/health-table.component';

@Component({
   selector: 'weight-table',
   templateUrl: './weight-table.component.html',
   styleUrls: ['./weight-table.component.css']
})
export class WeightTableComponent extends HealthTableComponent implements OnInit {
   @Input() user$: Observable<User>;
   user: User;

   ngOnInit() {
      this.user$.subscribe(user => this.user = user);
   }

   getBMI(weight: number): string {
      if (!this.user) return '';
      let BMI = this.healthService.getBMI(weight, this.user.height);
      return BMI.index ? BMI.index.toFixed(1) + " (" + BMI.abbr + ")" : 'n.A.';
   }

}
