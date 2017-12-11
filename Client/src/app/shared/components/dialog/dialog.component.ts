import { Component, OnInit } from '@angular/core';
import { DialogResult } from '../../models/dialog-result';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  template: ''
})
export class DialogComponent  {
  title: string;
  private _result: DialogResult;

  constructor(public bsModalRef: BsModalRef) {
    this._result = new DialogResult();
  }

  get result(): DialogResult {
    return this._result;
  }

  set resultData(data: any) {
    this._result.data = data;
    this._result.canceled = false;
  }

  cancel() {
    this._result.canceled = true;
    this.close();
  }

  close() {
    this.bsModalRef.hide();
  }
}
