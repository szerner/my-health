import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { DialogService } from './dialog.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService, private dialogService: DialogService) { }

  canActivate(): Promise<boolean> {
    if (this.auth.isAuthenticated)
      return Promise.resolve(true);

    return this.dialogService.showLoginDialog().then(isAuthenticated => {
      if (!isAuthenticated)
        this.router.navigate(['/access-denied']);
      return isAuthenticated;
    });
  }
}
