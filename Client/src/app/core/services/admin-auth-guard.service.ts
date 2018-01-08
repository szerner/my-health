import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AdminAuthGuard {

   constructor(private router: Router, private auth: AuthService) { }

   canActivate(): boolean {
      if (!this.auth.isAdmin)
         this.router.navigate(["/access-denied"]);
      return this.auth.isAdmin;
   }
}
