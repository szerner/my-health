import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
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
