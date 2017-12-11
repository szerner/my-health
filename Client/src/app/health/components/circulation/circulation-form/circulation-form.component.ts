import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';

@Component({
  templateUrl: './circulation-form.component.html',
  styleUrls: ['./circulation-form.component.css']
})
export class CirculationFormComponent extends DialogComponent implements OnInit {
  data;

  ngOnInit() {
    this.data = {
      systolic: 0,
      diastolic: 0,
      rate: 0,
      date: new Date().toISOString()
    }
  }

  save() {
    this.resultData = this.data;
    this.close();
  }
}
