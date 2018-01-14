import { Component, OnInit } from '@angular/core';
import { DialogService } from 'services/dialog.service';
import { AuthService } from 'services/auth.service';
import { HealthService } from '../../services/health.service';
import { WeightFormComponent } from '../weight/weight-form/weight-form.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CirculationFormComponent } from '../circulation/circulation-form/circulation-form.component';
import { DialogInput, User, BodyWeight, Circulation } from 'models';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

@Component({
   templateUrl: './health-data-view.component.html'
})
export class HealthDataViewComponent {
   data$: Observable<(BodyWeight | Circulation)[]>;
   user$: Observable<User>;
   weightMode: boolean;
   tableMode = true;

   constructor(
      private route: ActivatedRoute,
      private auth: AuthService,
      private dialogService: DialogService,
		private healthService: HealthService,
		private translate: TranslateService
   ) {
      this.user$ = auth.currentUser$;
      route.url.subscribe(urlSegments => {
         this.weightMode = urlSegments.findIndex(s => s.path == 'weight') > -1;
         this.loadData();
      });
      route.paramMap.subscribe(
         (params: ParamMap) => {
            this.tableMode = params.has('view') ? params.get('view') == 'table' : true;
         });
   }

   loadData() {
      this.data$ = this.weightMode ? this.healthService.getBodyWeights() : this.healthService.getCirculations();
   }
   get title() {
		return this.weightMode ? this.translate.instant('body-weight-title') : this.translate.instant('circulation.title');
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
		inputData.title = this.translate.instant('dialog.delete.title');
		inputData.message = this.translate.instant('dialog.delete.text');;

      let dialogResult = await this.dialogService.showConfirmDialog(inputData);
      if (dialogResult.data) {
         let action$ = this.weightMode ? this.healthService.deleteBodyWeight(dataId) : this.healthService.deleteCirculation(dataId);
         action$.subscribe(() => this.loadData());
      }
   }

}
