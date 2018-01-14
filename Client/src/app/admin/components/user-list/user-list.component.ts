import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { DialogService } from 'services/dialog.service';
import { UserService } from 'services/user.service';
import { User, DialogInput, DialogResult } from 'models';
import { UserFormComponent } from '../user-form/user-form.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
   templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
   users: User[];
   constructor(private userService: UserService, private dialogService: DialogService, private translate: TranslateService) { }

   ngOnInit() {
      this.loadUsers();
   }

   async addUser() {
      let inputData = new DialogInput();
		inputData.title = this.translate.instant('add-user');
      inputData.data = new User();
      let dialogResult = await this.dialogService.showFormDialog(UserFormComponent, inputData);
      if (dialogResult)
         this.userService.createUser(dialogResult.data).subscribe(() => this.loadUsers());
   }

   async editUser(user: User) {
      let inputData = new DialogInput();
      inputData.title = this.translate.instant('edit-user');
      inputData.data = Object.assign({}, user);
      let dialogResult = await this.dialogService.showFormDialog(UserFormComponent, inputData);
      if (dialogResult) {
         let updateUser = Object.assign(user, dialogResult.data);
         this.userService.updateUser(updateUser).subscribe(() => this.loadUsers());
      }
   }

   deleteUser(user: User) {
      let inputData = new DialogInput();
		inputData.title = this.translate.instant('delete-user');
      inputData.message = this.translate.instant('delete-user-msg');

      this.dialogService.showConfirmDialog(inputData)
         .then(result => {
            if (result.data)
               this.userService.deleteUser(user.id).subscribe(() => this.loadUsers());
         });
   }

   loadUsers() {
      this.userService.getUsers().take(1).subscribe(users => this.users = this.sortUsers(users, 'firstName'));
   }

   sortUsers(users: User[], key: string): User[] {
      return users.sort((o1, o2) => (o1[key] > o2[key]) ? 1 : -1);
   }

}
