import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent extends DialogComponent {
  message: string = '';

  confirm() {
    this.resultData = true;
    this.close();
  }
  decline() {
    this.resultData = false;
    this.close();
  }

  get paragraphs(): string[] {
    return this.message.split("#");
  }
}

