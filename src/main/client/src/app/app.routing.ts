import {Routes} from '@angular/router';
import {BookOverviewComponent} from './book-mgmt/book-overview/book-overview.component';
import {BookDetailsComponent} from './book-mgmt/book-details/book-details.component';
import {UserListComponent} from './user-mgmt/user-list/user-list.component';

export const APP_ROUTES: Routes = [
  {
    path: 'app',
    children: [
      {
        path: 'books',
        component: BookOverviewComponent
      },
      {
        path: 'book',
        component: BookDetailsComponent
      },
      {
        path: 'book/:bookId',
        component: BookDetailsComponent
      },
      {
        path: 'users',
        component: UserListComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/books',
    pathMatch: 'full'
  }
];
