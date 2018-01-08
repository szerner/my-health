import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { TokenUser } from '@models/tokenUser';
import { UserService } from './user.service';
import { User } from '@models/user';


@Injectable()
export class AuthService {
   private currentUser: User;
   private userSubscription: Subscription;

   constructor(
      private http: HttpClient,
      private userService: UserService) { }

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
   }

   get currentUserId(): number {
      let tokenUser = this.tokenUser;
      return  tokenUser ? tokenUser.userId : null;
   }

   get currentUser$(): Observable<User> {
      if (!this.currentUserId) return Observable.of(null);
      if (this.currentUser != null && this.currentUserId == this.currentUser.id) return Observable.of(this.currentUser);

      return this.userService.getUser(this.currentUserId);
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
      };
   }


   login(credentials): Observable<boolean> {

      return this.http.post('/api/auth', credentials)
         .map(result => {
            if (result && result['token']) {
               localStorage.setItem('token', result['token']);
               this.userSubscription = this.currentUser$.subscribe(user => this.currentUser = user);
               return true;
            }
            else return false;
         });
   }

   logout() {
      localStorage.removeItem('token');
      if (this.userSubscription) this.userSubscription.unsubscribe();
   }

}
