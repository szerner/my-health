import { Component } from '@angular/core';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { BloodPressure } from '../../../../shared/models/blood-pressure';

@Component({
  templateUrl: './circulation-form.component.html',
  styleUrls: ['./circulation-form.component.css']
})
export class CirculationFormComponent extends DialogComponent { }
