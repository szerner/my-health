import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
   imports: [
      CommonModule,
      NgbModule
   ],
   exports: [
      CommonModule,
      TranslateModule,
      FormsModule,
      NgbModule,
      SpinnerComponent,
      ConfirmDialogComponent
   ],
   declarations: [
      SpinnerComponent,
      ConfirmDialogComponent
   ],
   entryComponents: [
      ConfirmDialogComponent
   ]
})
export class SharedModule { }
