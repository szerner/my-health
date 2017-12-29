import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../shared/models/user';
import { AuthService } from './auth.service';
import { DialogInput } from '../../shared/models/dialog-input';
import { DialogService } from './dialog.service';

@Injectable()
export class UserService {
   private readonly usersEndpoint = '/api/users';

   constructor(private http: HttpClient, private auth: AuthService) { }

   getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.usersEndpoint);
   }

   getUser(id: number): Observable<User> {
      return this.http.get<User>(this.usersEndpoint + '/' + id);
   }

   createUser(user: User): Observable<User> {
      return this.http.post<User>(this.usersEndpoint, user);
   }

   updateUser(user: User): Observable<User> {
      return this.http.put<User>(this.usersEndpoint + '/' + user.id, user);
   }

   deleteUser(id: number) {
      return this.http.delete(this.usersEndpoint + '/' + id);
   }

   get currentUser$(): Observable<User> {
      let tokenUser = this.auth.tokenUser;
      return tokenUser ? this.getUser(tokenUser.userId) : Observable.of(null);
   }

}
