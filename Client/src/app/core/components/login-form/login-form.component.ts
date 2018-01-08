import { Component, OnInit, Injector } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog/dialog.component';
import { AuthService } from '@services/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent extends DialogComponent {
  invalidLogin;
  checkingCredentials = false;

  constructor(
    public activeModal: NgbActiveModal,
    injector: Injector,
    private authService: AuthService
  ) { super(activeModal, injector); }

  login(credentials) {
    this.checkingCredentials = true;
    this.authService.login(credentials)
      .subscribe(
      result => this.close(true),
      error => {
        this.invalidLogin = true;
        this.checkingCredentials = false;
      }

    )

  }
}
