import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DialogService } from '../../services/dialog.service';
import { Router } from '@angular/router';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { DialogInput } from '../../../shared/models/dialog-input';
import { UserService } from '../../services/user.service';
import { User } from '../../../shared/models/user';

@Component({
   selector: 'main-nav',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
   constructor(private router: Router, public auth: AuthService, private dialogService: DialogService, private userService: UserService) { }

   async login() {
      let isAuthenticated = await this.dialogService.showLoginDialog();
      if (isAuthenticated) 
         this.router.navigate([this.auth.isAdmin ? "/admin" : "/health"]);
   }

   logout() {
      this.auth.logout();
      this.router.navigate(["/"]);
   }

   async editProfile() {
      let user$ = this.auth.currentUser$;
      let dialogInput = new DialogInput();
      dialogInput.title = "Edit Profile";
      dialogInput.data = user$;
      let dialogResult = await this.dialogService.showFormDialog(UserProfileComponent, dialogInput, { size: "lg" });
      if (dialogResult) {
         user$.subscribe(user => {
            let updateUser = <User>Object.assign(user, dialogResult.data);
            this.userService.updateUser(updateUser).subscribe();
         });
      }
  }
}
