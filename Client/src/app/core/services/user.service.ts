import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../shared/models/user';

@Injectable()
export class UserService {
  currentUser: number = 1;

  private readonly usersEndpoint = '/api/users';

  constructor(private http: HttpClient) { }

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

}
