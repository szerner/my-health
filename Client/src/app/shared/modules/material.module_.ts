import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class MaterialModule { }
