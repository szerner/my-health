import { Component } from '@angular/core';
import { DialogService } from 'services/dialog.service';
import { AuthService } from 'services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent  {

  constructor(private dialogService: DialogService, public auth: AuthService) { }

  login() {
    this.dialogService.showLoginDialog();
  }

}
