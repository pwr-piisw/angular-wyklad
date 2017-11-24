import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user.dto';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() value: User;

  constructor() {
  }

  ngOnInit() {
  }
}
