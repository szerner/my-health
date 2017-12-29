import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot().ngModule,
    SpinnerComponent,
    ConfirmDialogComponent,
  ],
  declarations: [
    SpinnerComponent,
    DialogComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ]
})
export class SharedModule { }
