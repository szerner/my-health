import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { DialogComponent } from '../../../shared/components/dialog/dialog.component';

@Component({
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent extends DialogComponent {


}
