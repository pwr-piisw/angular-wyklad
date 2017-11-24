import {Component, OnInit} from '@angular/core';
import {User} from '../user.dto';
import {max} from 'rxjs/operator/max';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  selectedUser: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.reloadUsers();
  }

  selectUser(id: number) {
    if (this.selectedUser && this.selectedUser.id === id) {
      this.selectedUser = null;
    } else {
      const userFound = this.userService.findUser(id);
      if (userFound) {
        this.selectedUser = Object.assign({}, userFound);
      } else {
        this.selectedUser = null;
      }
    }
  }

  save(user: User) {
    this.userService.saveUser(user);
    this.reloadUsers();
  }

  createNew() {
    this.selectedUser = {id: this.userService.getNextId(), name: '', email: ''};
  }

  private reloadUsers() {
    this.users = this.userService.getAllUsers();
  }

}
