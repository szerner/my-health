import { Component, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  template: `
    <i [ngClass]="sizeClass" class="fa fa-circle-o-notch fa-spin"></i>
  `
})
export class SpinnerComponent {
  @Input('size') size = 0;

  public get sizeClass() {
    if (this.size == 0 || this.size > 5)
      return '';
    else
      return 'fa-' + this.size + 'x';
  }

}
