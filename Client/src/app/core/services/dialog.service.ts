import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { Component } from '@angular/compiler/src/core';
import { DialogResult } from '../../shared/models/dialog-result';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { WeightFormComponent } from '../../health/components/weight/weight-form/weight-form.component';

@Injectable()
export class DialogService {
  bsModalRef: BsModalRef;
  showingDialog = false;

  config = {
    ignoreBackdropClick: true,
    keyboard: true,
    class: ''
  }

  constructor(
    private modalService: BsModalService) { }

  showConfirmDialog(title: string, message: string): Promise<DialogResult> {
    this.showingDialog = true;
    this.config.class = '';
    this.bsModalRef = this.modalService.show(ConfirmDialogComponent, this.config);
    this.bsModalRef.content.title = title;
    this.bsModalRef.content.message = message;
    return this.modalService.onHide.take(1).map(() => {
      this.showingDialog = false;
      return <DialogResult>this.bsModalRef.content.result;
    }).toPromise();
  }

  showFormDialog(formDialog: any, title: string): Promise<DialogResult> {
    this.showingDialog = true;
    this.config.class = 'modal-sm';
    this.bsModalRef = this.modalService.show(formDialog, this.config);
    this.bsModalRef.content.title = title;
    return this.modalService.onHide.take(1).map(() => {
      this.showingDialog = false;
      return <DialogResult>this.bsModalRef.content.result;
    }).toPromise();
  }
}
