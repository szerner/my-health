import { Component, Input, Injector } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogInput, DialogResult } from 'models';

@Component({
  template: ''
})
export abstract class DialogComponent {
  @Input() dialogInput: DialogInput;

  constructor(public activeModal: NgbActiveModal, injector: Injector) { }

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
