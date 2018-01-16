import { Component, Input } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent extends DialogComponent {
  confirm() {
    this.close(true);
  }
  decline() {
    this.close(false);
  }

  get paragraphs(): string[] {
    return this.dialogInput.message.split("#");
  }
}

