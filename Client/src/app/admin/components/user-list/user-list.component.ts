import { Component, OnInit } from '@angular/core';
import { User } from '@models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { DialogService } from '@services/dialog.service';
import { DialogResult } from '@models/dialog-result';
import { UserService } from '@services/user.service';
import { DialogInput } from '@models/dialog-input';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
   templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
   users: User[];
   constructor(private userService: UserService, private dialogService: DialogService) { }

   ngOnInit() {
      this.loadUsers();
   }

   async addUser() {
      let inputData = new DialogInput();
      inputData.title = 'Add user';
      inputData.data = new User();
      let dialogResult = await this.dialogService.showFormDialog(UserFormComponent, inputData);
      if (dialogResult)
         this.userService.createUser(dialogResult.data).subscribe(() => this.loadUsers());
   }

   async editUser(user: User) {
      let inputData = new DialogInput();
      inputData.title = 'Edit user';
      inputData.data = Object.assign({}, user);
      let dialogResult = await this.dialogService.showFormDialog(UserFormComponent, inputData);
      if (dialogResult) {
         let updateUser = Object.assign(user, dialogResult.data);
         this.userService.updateUser(updateUser).subscribe(() => this.loadUsers());
      }
   }

   deleteUser(user: User) {
      let inputData = new DialogInput();
      inputData.title = 'Delete user \'' + user.firstName + "\'?";
      inputData.message = `Do you really want to delete this user and all related data?#
      This operation cannot be undone!`;

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
