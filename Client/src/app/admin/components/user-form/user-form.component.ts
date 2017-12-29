import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../core/services/user.service';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

@Component({
  templateUrl: './user-form.component.html',
})
export class UserFormComponent extends DialogComponent implements OnInit {

   ngOnInit() {

  }

  submit() {
   //  let action$ = this.user.id == 0 ? this.userService.createUser(this.user) : this.userService.updateUser(this.user);
   //  action$.subscribe(() => {
   //    // this.toastrService.success('The vehicle was sucessfully saved.', 'Success');
   //    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
   //  });
  }

}
