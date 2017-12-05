import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../../shared/models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { DialogService } from '../../../core/services/dialog.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  // users: User[]=[];
  constructor(private userService: UserService, private dialogService: DialogService) { }

  ngOnInit() {
    // this.userService.getUsers().take(1).subscribe(users => this.users = users);
    this.loadUsers();
  }

  deleteUser(user: User) {
    if (this.dialogService.showingDialog) return; //already showing any dialog
    let title = 'Delete user \'' + user.firstName + "\'?"
    let message = `Do you really want to delete this user and all related data?#
      This operation cannot be undone!`;

    this.dialogService.showConfirmDialog(title, message)
      .then(confirmed => {
        if (confirmed)
          this.userService.deleteUser(user.id).subscribe(() => this.loadUsers());
      });
   // this.userService.deleteUser(id).subscribe(() => this.loadUsers());
  }

  loadUsers() {
    this.userService.getUsers().take(1).subscribe(users => this.users = this.sortUsers(users, 'firstName'));
  }

  sortUsers(users: User[], key: string): User[] {
    return users.sort((o1, o2) => (o1[key] > o2[key]) ? 1 : -1);
  }

}
