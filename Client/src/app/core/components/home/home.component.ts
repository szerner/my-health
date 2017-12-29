import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../services/dialog.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService, private dialogService: DialogService) { }

  ngOnInit() {
  }

  login() {
    // this.dialogService.showFormDialog(LoginFormComponent, { services: { 'AuthService': this.authService } })
    //   .then(result => this.authenticated = result);
    this.dialogService.showLoginDialog();
  }

}
