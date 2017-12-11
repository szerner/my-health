import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';

@Component({
  templateUrl: './weight-form.component.html',
  styleUrls: ['./weight-form.component.css']
})
export class WeightFormComponent extends DialogComponent implements OnInit {
  data;

  ngOnInit() {
    this.data = {
      bodyWeight: 0,
      date: new Date().toISOString()
    }
  }

  save() {
    this.resultData = this.data;
    this.close();
  }

}
