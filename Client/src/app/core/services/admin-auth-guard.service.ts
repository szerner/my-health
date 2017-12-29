import { AuthGuard } from './auth-guard.service';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { DialogService } from './dialog.service';

@Injectable()
export class AdminAuthGuard {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(): boolean {
    if (!this.auth.isAdmin)
      this.router.navigate(["/access-denied"]);
    return this.auth.isAdmin;
  }
}
