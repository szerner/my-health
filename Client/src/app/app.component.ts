import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(translate: TranslateService) {
      translate.setDefaultLang('en');
      let browserLang = translate.getBrowserLang();
      translate.use(browserLang ? browserLang : 'en');
   }
}
