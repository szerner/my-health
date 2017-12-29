import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../core/services/dialog.service';
import { WeightFormComponent } from '../weight/weight-form/weight-form.component';
import { HealthService } from '../../services/health.service';
import { ActivatedRoute } from '@angular/router';
import { CirculationFormComponent } from '../circulation/circulation-form/circulation-form.component';
import { Measurement } from '../../../shared/models/measurement';
import { DialogInput } from '../../../shared/models/dialog-input';
import { BodyWeight } from '../../../shared/models/body-weight';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { NotifyService } from '../../services/notify.service';

@Component({
   selector: 'app-health-data-view',
   templateUrl: './health-data-view.component.html',
   styleUrls: ['./health-data-view.component.css']
})
export class HealthDataViewComponent implements OnInit {
   weightMode: boolean;

   constructor(
      private route: ActivatedRoute,
      private auth: AuthService,
      private dialogService: DialogService,
      private healthService: HealthService,
      private notifyService: NotifyService
   ) { }

   ngOnInit() {
      this.route.url.subscribe(urlSegments => this.weightMode = urlSegments.findIndex(s => s.path == 'weight') > -1);
   }

   addHealthData() {
      if (this.weightMode)
         this.addWeightData();
      else
         this.addCirculationData();
   }

   // addHealthData() {
   //   let formComponent = this.weightMode ? WeightFormComponent : CirculationFormComponent;
   //   let formTitle = this.weightMode ? "Your Body Weight" : "Your Blood Pressure & Pulse Rate";
   //   this.dialogService.showFormDialog(formComponent, formTitle)
   //     .then(
   //     result => {
   //       if (result) this.healthService.addMeasurement<Measurement>(result.data);
   //     });
   // }
   async addWeightData() {
      let dialogInput = new DialogInput();
      dialogInput.title = "Your Body Weight";
      dialogInput.data = this.healthService.getLastBodyWeight();
      let dialogResult = await this.dialogService.showFormDialog(WeightFormComponent, dialogInput);
      if (dialogResult) {
         let bodyweight = <BodyWeight>dialogResult.data;
         bodyweight.userId = this.auth.currentUserId;
         this.healthService.addBodyWeight(bodyweight).subscribe(() => this.notifyService.notify());
      }
   }

   async addCirculationData() {
      let dialogInput = new DialogInput();
      dialogInput.title = "Your Blood Pressure and Heart Rate";
      dialogInput.data = {
         bloodPressure$: this.healthService.getLastBloodPressure(),
         heartRate$: this.healthService.getLastPulseRate()
      }
      let dialogResult = await this.dialogService.showFormDialog(CirculationFormComponent, dialogInput);
      if (dialogResult) {
         // let bodyweight = <BodyWeight>dialogResult.data;
         // bodyweight.userId = this.auth.currentUserId;
         // this.healthService.addBodyWeight(bodyweight).subscribe(() => this.notifyService.notify());
      }
   }

}
