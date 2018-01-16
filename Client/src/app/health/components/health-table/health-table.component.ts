import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { HealthService } from '../../services/health.service';

@Injectable()
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
