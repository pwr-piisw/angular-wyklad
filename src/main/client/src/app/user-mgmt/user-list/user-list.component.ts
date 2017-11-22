import { Component, OnInit } from '@angular/core';
import {User} from '../user.dto';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit() {
    this.users = [
      { id: 1, name: 'John Doe', email: 'john.doe@email.com'},
      { id: 2, name: 'Max Rockatansky', email: 'mad.max@email.com'},
      { id: 3, name: 'Chuck Peddle', email: 'chuck@mos.com'}
    ];
  }

}
