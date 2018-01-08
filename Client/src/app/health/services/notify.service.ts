import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//actually not beeing used!
@Injectable()
export class NotifyService {
   private _notification$ = new Subject();
   private viewMode = new Subject<string>();
   viewMode$ = this.viewMode.asObservable();

   get notification$() {
      return this._notification$;
   }
   notify() {
      this.notification$.next();
   }
   // get viewMode$() {
   //    return this.viewMode.asObservable();
   // } 
   changedViewMode(viewMode: string) {
      this.viewMode.next(viewMode);
   }
  
}
