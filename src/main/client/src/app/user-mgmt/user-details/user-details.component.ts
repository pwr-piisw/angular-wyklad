import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../user.dto';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input() value: User;

  @Output() onSave = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit() {
  }

  saveClicked() {
    this.onSave.emit(this.value);
  }
}
