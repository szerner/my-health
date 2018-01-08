import { Component, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  template: `
    <div class="text-center text-primary"><i [ngClass]="sizeClass" class="fa fa-circle-o-notch fa-spin"></i></div>
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
