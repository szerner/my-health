import { Injectable } from '@angular/core';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { DialogResult } from '@models/dialog-result';
import { DialogInput } from '@models/dialog-input';
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
