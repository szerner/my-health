import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HealthService } from '../../services/health.service';

@Component({
  template: ''
})
export abstract class HealthTableComponent {
   @Input() data: any[];
   @Output() onDelete = new EventEmitter<number>();

   constructor(
      protected healthService: HealthService
   ) { }

   delete(d: number) {
      this.onDelete.emit(d);
   }

}
