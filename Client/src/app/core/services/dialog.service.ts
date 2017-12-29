import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { Component } from '@angular/compiler/src/core';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';
import { WeightFormComponent } from '../../health/components/weight/weight-form/weight-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { DialogResult } from '../../shared/models/dialog-result';
import { DialogInput } from '../../shared/models/dialog-input';
import { LoginFormComponent } from '../components/login-form/login-form.component';

@Injectable()
export class DialogService {

   constructor(private modalService: NgbModal) { }

   private showDialog(dialog: any, dialogInput?: DialogInput, config?: NgbModalOptions): Promise<DialogResult> {
      let defaultConfig: NgbModalOptions = {
         backdrop: "static",
         keyboard: false,
         windowClass: "fade",
         size: "sm"
      };

      config = config? Object.assign(defaultConfig, config) : defaultConfig;
      const modalRef = this.modalService.open(dialog, config);
      if (dialogInput) modalRef.componentInstance.dialogInput = dialogInput;
      return modalRef.result;
   }

   showConfirmDialog(dialogInput: DialogInput, config?: NgbModalOptions): Promise<DialogResult> {
      // config = config ? config : { size: "sm" };
      return this.showDialog(ConfirmDialogComponent, dialogInput, config);
   }

   showFormDialog(formDialog: any, dialogInput?: DialogInput, config?: NgbModalOptions): Promise<DialogResult> {
      // config = config ? config : { size: "sm" };
      return this.showDialog(formDialog, dialogInput, config);
   }

   showLoginDialog(): Promise<boolean> {
      return this.showFormDialog(LoginFormComponent)
         .then(result => {
            if (result) return true;
            return false;
         });
   }
}
