import { Component, Input, Injector } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogResult } from '../../../shared/models/dialog-result';
import { UserService } from '../../../core/services/user.service';
import { DialogInput } from '../../models/dialog-input';

@Component({
  template: ''
})
export class DialogComponent {
  @Input() dialogInput: DialogInput;

  constructor(public activeModal: NgbActiveModal, injector?: Injector) { }

  cancel() {
    this.activeModal.close(null);
  }

  close(data?: any) {
    let dialogResult = new DialogResult();
    dialogResult.data = (data != null) ? data : this.dialogInput.data;
    this.activeModal.close(dialogResult);
  }

  save(data?: any) {
    this.close(data);
  }
}
