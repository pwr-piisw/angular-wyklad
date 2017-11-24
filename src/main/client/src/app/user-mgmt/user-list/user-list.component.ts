import {Component, OnInit} from '@angular/core';
import {User} from '../user.dto';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  selectedUser: User;

  constructor() {
  }

  ngOnInit() {
    this.users = [
      {id: 1, name: 'John Doe', email: 'john.doe@email.com'},
      {id: 2, name: 'Max Rockatansky', email: 'mad.max@email.com'},
      {id: 3, name: 'Chuck Peddle', email: 'chuck@mos.com'}
    ];
  }

  selectUser(id: number) {
    if (this.selectedUser && this.selectedUser.id === id) {
      this.selectedUser = null;
    } else {
      const userFound = this.users.find((user: User) => user.id === id);
      if (userFound) {
        this.selectedUser = Object.assign({}, userFound);
      } else {
        this.selectedUser = null;
      }
    }
  }

  save(user: User) {
    const userFound = this.users.find((elem: User) => elem.id === user.id);
    if (userFound) {
      Object.assign(userFound, user);
    } else {
      this.users.push(Object.assign({}, user));
    }
  }

}
