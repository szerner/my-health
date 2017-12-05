import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Injectable()
export class DialogService {
  bsModalRef: BsModalRef;
  showingDialog = false;

  config = {
    ignoreBackdropClick: true,
    keyboard: true
  }

  constructor(
    private modalService: BsModalService) { }

  showConfirmDialog(title: string, message: string): Promise<boolean> {
    this.showingDialog = true;
    this.bsModalRef = this.modalService.show(ConfirmDialogComponent, this.config);
    this.bsModalRef.content.title = title;
    this.bsModalRef.content.message = message;
    return this.modalService.onHide.take(1).map(() => {
      this.showingDialog = false;
      return <boolean>this.bsModalRef.content.confirmed;
    }).toPromise();
  }
}
