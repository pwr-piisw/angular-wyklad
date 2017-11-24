import {Injectable} from '@angular/core';
import {User} from './user.dto';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getAllUsers(): Observable<Array<User>> {
    return this.http.get('services/rest/users')
      .map(res =>  res.json());
  }

  findUser(id: number): Observable<User> {
    return this.http.get(`services/rest/users/${id}`)
      .map(res => res.json());
  }

  saveUser(user: User) {
    return this.http.post('services/rest/users', user);
  }
}
