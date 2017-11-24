import {Injectable} from '@angular/core';
import {User} from './user.dto';

@Injectable()
export class UserService {

  users: User[] = [];

  constructor() {
    this.users = [
      {id: 1, name: 'John Doe', email: 'john.doe@email.com'},
      {id: 2, name: 'Max Rockatansky', email: 'mad.max@email.com'},
      {id: 3, name: 'Chuck Peddle', email: 'chuck@mos.com'}
    ];
  }

  getAllUsers() {
    return this.users;
  }

  saveUser(user: User) {
    const found = this.findUser(user.id);
    if (found) {
      Object.assign(found, user);
    } else {
      this.users.push(user);
    }
  }

  findUser(id: number) {
    return this.users.find((user: User) => user.id === id);
  }

  getNextId() {
    return this.users
      .map((elem: User) => elem.id)
      .reduce((prev, curr) => prev > curr ? prev : curr, 0) + 1;
  }
}
