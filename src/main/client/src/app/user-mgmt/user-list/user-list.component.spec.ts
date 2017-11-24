import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserListComponent} from './user-list.component';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {UserDetailsComponent} from '../user-details/user-details.component';
import {FormsModule} from '@angular/forms';
import {UserService} from '../user.service';
import {HttpModule} from '@angular/http';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent, UserDetailsComponent],
      imports: [RouterTestingModule, FormsModule, HttpModule],
      providers: [UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
