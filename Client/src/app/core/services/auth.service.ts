import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { TokenUser } from '../../shared/models/tokenUser';
import { UserService } from './user.service';
import { User } from '../../shared/models/user';


@Injectable()
export class AuthService {

   constructor(private http: HttpClient) { }

   public getToken(): string {
      return localStorage.getItem('token');
   }

   get isAuthenticated(): boolean {
      let token = this.getToken();
      return (token != null);
      // return token ? tokenNotExpired(null, token) : false;
   }

   get isAdmin(): boolean {
      return this.isAuthenticated ? this.tokenUser.admin : false;
      // return this.currentUser ? this.currentUser.admin : false;
   }

   get currentUserId(): number {
      return this.tokenUser.userId;
   }

   get tokenUser(): TokenUser {
      let token = this.getToken();
      if (!token) return null;
      
      let jwt = new JwtHelper();
      let decodeToken = jwt.decodeToken(token);
      return {
         userId: parseInt(decodeToken["userId"]),
         userName: decodeToken["userName"],
         admin: decodeToken["userRole"] == "Admin"
      }
   }


   login(credentials): Observable<boolean> {

      return this.http.post('/api/auth', credentials)
         .map(result => {
            if (result && result['token']) {
               localStorage.setItem('token', result['token']);
               return true;
            }
            else return false;
         });
   }

   logout() {
      localStorage.removeItem('token');
   }

}
