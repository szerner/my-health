import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm-dialog.component.html'
})
export class ConfirmDialogComponent {
  title: string;
  message: string = '';
  confirmed: boolean;

  constructor(public bsModalRef: BsModalRef) {  }

  confirm() {
    this.confirmed = true;
    this.bsModalRef.hide();
  }
  decline() {
    this.confirmed = false;
    this.bsModalRef.hide();
  }

  get paragraphs(): string[] {
    return this.message.split("#");
  }
}

