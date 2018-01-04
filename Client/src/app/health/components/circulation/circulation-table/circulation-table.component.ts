import { Component, OnInit } from '@angular/core';
import { HealthService } from '../../../services/health.service';
import { BodyWeight } from '../../../../shared/models/body-weight';
import { DialogService } from '../../../../core/services/dialog.service';
import { DialogInput } from '../../../../shared/models/dialog-input';
import { NotifyService } from '../../../services/notify.service';
import { Circulation } from '../../../../shared/models/circulation';

@Component({
   selector: 'app-circulation-table',
   templateUrl: './circulation-table.component.html',
   styleUrls: ['./circulation-table.component.css']
})
export class CirculationTableComponent implements OnInit {
   data$;

   constructor(
      private healthService: HealthService,
      private dialogService: DialogService,
      private notifyService: NotifyService
   ) { }

   ngOnInit() {
      this.loadData();
      this.notifyService.notification$.subscribe(() => this.loadData());
   }

   private loadData() {
      this.data$ = this.healthService.getCirculations();
   }

   async delete(circulation: Circulation) {
      let inputData = new DialogInput();
      inputData.title = 'Delete this entry?';
      inputData.message = `Do you really want to delete this data entry?`;

      let dialogResult = await this.dialogService.showConfirmDialog(inputData);
      if (dialogResult.data)
         this.healthService.deleteCirculation(circulation.id).subscribe(() => this.loadData());
   }

}