import { Component, OnInit } from '@angular/core';
import { HealthService } from '../../../services/health.service';
import { BodyWeight } from '../../../../shared/models/body-weight';
import { DialogService } from '../../../../core/services/dialog.service';
import { DialogInput } from '../../../../shared/models/dialog-input';
import { NotifyService } from '../../../services/notify.service';
import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../core/services/user.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
   selector: 'app-weight-table',
   templateUrl: './weight-table.component.html',
   styleUrls: ['./weight-table.component.css']
})
export class WeightTableComponent implements OnInit, OnDestroy {
   data$;
   userHeight: number;

   private userSubscription: Subscription;
   private notifySubscription: Subscription;

   constructor(
      private healthService: HealthService,
      private dialogService: DialogService,
      private notifyService: NotifyService,
      private userService: UserService,
      private auth: AuthService
   ) { }

   ngOnInit() {
      this.loadData();
      this.userSubscription = this.auth.currentUser$.subscribe(user => this.userHeight = user.height);
      this.notifySubscription = this.notifyService.notification$.subscribe(() => this.loadData());
   }

   ngOnDestroy() {
      if (this.userSubscription) this.userSubscription.unsubscribe();
      if (this.notifySubscription) this.notifySubscription.unsubscribe();
   }

   private loadData() {
      this.data$ = this.healthService.getBodyWeights();
   }

   async delete(weight: BodyWeight) {
      let inputData = new DialogInput();
      inputData.title = 'Delete this entry?';
      inputData.message = `Do you really want to delete this data entry?`;

      let dialogResult = await this.dialogService.showConfirmDialog(inputData);
      if (dialogResult.data)
         this.healthService.deleteBodyWeight(weight.id).subscribe(() => this.loadData());
   }

   getBMI(weight: number): string {
      let BMI = this.healthService.getBMI(weight, this.userHeight);
      return BMI.index ? BMI.index.toFixed(1) + " (" + BMI.abbr + ")" : 'n.A.';
   }

}
