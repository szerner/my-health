import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../../core/services/dialog.service';
import { WeightFormComponent } from '../weight/weight-form/weight-form.component';
import { HealthService } from '../../services/health.service';
import { ActivatedRoute } from '@angular/router';
import { CirculationFormComponent } from '../circulation/circulation-form/circulation-form.component';
import { DialogInput } from '../../../shared/models/dialog-input';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../shared/models/user';
import { BodyWeight } from '../../../shared/models/body-weight';
import { Circulation } from '../../../shared/models/circulation';

@Component({
   templateUrl: './health-data-view.component.html',
   styleUrls: ['./health-data-view.component.css']
})
export class HealthDataViewComponent implements OnInit {
   data$: Observable<(BodyWeight | Circulation)[]>;
   user$: Observable<User>;
   weightMode: boolean;
   tableMode = true;

   constructor(
      private route: ActivatedRoute,
      private auth: AuthService,
      private dialogService: DialogService,
      private healthService: HealthService
   ) { }

   ngOnInit() {
      this.route.url.subscribe(urlSegments => {
         
         this.weightMode = urlSegments.findIndex(s => s.path == 'weight') > -1;
         this.user$ = this.auth.currentUser$;
         this.loadData();
      });
   }

   loadData() {
      this.data$ = this.weightMode ? this.healthService.getBodyWeights() : this.healthService.getCirculations();
   }
   get title() {
      return this.weightMode ? "Your Body Weight" : "Your Blood Pressure and Heart Rate";
   }

   addData() {
      if (this.weightMode)
         this.addWeightData();
      else
         this.addCirculationData();
   }

   async addWeightData() {
      let dialogInput = new DialogInput();
      dialogInput.title = this.title;
      dialogInput.data = this.healthService.getLastBodyWeight();
      let dialogResult = await this.dialogService.showFormDialog(WeightFormComponent, dialogInput);
      if (dialogResult) {
         let bodyWeight = this.healthService.getNewBodyweight(dialogResult.data);
         this.healthService.addBodyWeight(bodyWeight).subscribe(() => this.loadData());
      }
   }

   async addCirculationData() {
      let dialogInput = new DialogInput();
      dialogInput.title = this.title;
      dialogInput.data = this.healthService.getLastCirculation();
      let dialogResult = await this.dialogService.showFormDialog(CirculationFormComponent, dialogInput);
      if (dialogResult) {
         let circulation = this.healthService.getNewCirculation(dialogResult.data);
         this.healthService.addCirculation(circulation).subscribe(() => this.loadData());
      }
   }

   async deleteData(dataId: number) {
      let inputData = new DialogInput();
      inputData.title = 'Delete this entry?';
      inputData.message = `Do you really want to delete this data entry?`;

      let dialogResult = await this.dialogService.showConfirmDialog(inputData);
      if (dialogResult.data) {
         let action$ = this.weightMode ? this.healthService.deleteBodyWeight(dataId) : this.healthService.deleteCirculation(dataId);
         action$.subscribe(() => this.loadData());
      }
   }

}
