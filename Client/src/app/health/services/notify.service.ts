import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotifyService {
   private _notification$ = new Subject();

   get notification$() {
      return this._notification$;
   }
   
   notify() {
      this.notification$.next();
   }
  
}
