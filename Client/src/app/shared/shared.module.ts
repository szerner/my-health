import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { BootstrapModule } from './modules/bootstrap.module';
import { SortableTableComponent } from './components/sortable-table/sortable-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    BootstrapModule,
    HttpClientModule,
    SpinnerComponent,
    ConfirmDialogComponent
  ],
  declarations: [
    SpinnerComponent,
    ConfirmDialogComponent,
    SortableTableComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
