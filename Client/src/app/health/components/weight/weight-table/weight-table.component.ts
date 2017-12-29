import { Component, OnInit } from '@angular/core';
import { HealthService } from '../../../services/health.service';
import { BodyWeight } from '../../../../shared/models/body-weight';
import { DialogService } from '../../../../core/services/dialog.service';
import { DialogInput } from '../../../../shared/models/dialog-input';
import { NotifyService } from '../../../services/notify.service';

@Component({
   selector: 'app-weight-table',
   templateUrl: './weight-table.component.html',
   styleUrls: ['./weight-table.component.css']
})
export class WeightTableComponent implements OnInit {
   data$;

   constructor(
      private healthService: HealthService,
      private dialogService: DialogService,
      private notifyService: NotifyService
   ) { }

   ngOnInit() {
      this.loadData();
      this.notifyService.notification$.subscribe(() => this.loadData());
      // this.healthService.getBodyWeights().subscribe(data => console.log(data));
   }

   private loadData() {
      this.data$ = this.healthService.getBodyWeights();
   }

   async delete(weight: BodyWeight) {
      let inputData = new DialogInput();
      inputData.title = 'Delete this entry?';
      inputData.message = `Do you really want to delete body weight entry?`;

      let dialogResult = await this.dialogService.showConfirmDialog(inputData);
      if (dialogResult.data)
         this.healthService.deleteBodyWeight(weight.id).subscribe(() => this.loadData());
   }

}
