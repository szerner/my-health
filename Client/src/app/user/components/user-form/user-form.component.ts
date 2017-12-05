import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UserService } from '../../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User;
  title: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.user = new User();
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let userId = +params.get('id');
      if (userId)
        this.userService.getUser(userId).subscribe(user => this.user = user);

      this.title = userId ? "Edit User" : "New User";
    });
  }

  submit() {
    let action$ = this.user.id == 0 ? this.userService.createUser(this.user) : this.userService.updateUser(this.user);
    action$.subscribe(() => {
      // this.toastrService.success('The vehicle was sucessfully saved.', 'Success');
      this.router.navigate(['/users']);
    });
  }

}
