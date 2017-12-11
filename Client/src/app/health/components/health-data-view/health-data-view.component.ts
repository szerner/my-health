import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../core/services/dialog.service';
import { WeightFormComponent } from '../weight/weight-form/weight-form.component';
import { HealthService } from '../../services/health.service';
import { BodyWeight } from '../../../shared/models/body-weight';

@Component({
  selector: 'app-health-data-view',
  templateUrl: './health-data-view.component.html',
  styleUrls: ['./health-data-view.component.css']
})
export class HealthDataViewComponent {

  constructor(private dialogService: DialogService, private healthService: HealthService) { }

  addHealthData() {
    this.dialogService.showFormDialog(WeightFormComponent, "Enter your body weight")
      .then(result => {
        if (!result.canceled) {
          console.log(result.data);
          this.healthService.addMeasurement<BodyWeight>(result.data);
        }

      });
  }

}
