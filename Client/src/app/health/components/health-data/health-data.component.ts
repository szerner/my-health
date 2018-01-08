import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';

@Component({
   templateUrl: './health-data.component.html'
})
export class HealthDataComponent {
   viewMode: string;
   routerSubscription: Subscription;

   constructor(private router: Router) {
      // using Router.url as workaround: ActivatedRoute not having params of child routes!!
      this.routerSubscription = router.events
         .filter((event) => event instanceof NavigationEnd)
         .subscribe(() => {
            let url = router.url.toString();
            this.viewMode = url.includes('view=') ? url.split('view=')[1] : 'table';
         });
   }

   ngOnDestroy() {
      this.routerSubscription.unsubscribe();
   }

}
