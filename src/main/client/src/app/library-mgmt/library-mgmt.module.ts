import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookMgmtModule} from '../book-mgmt/book-mgmt.module';
import {UserMgmtModule} from '../user-mgmt/user-mgmt.module';

@NgModule({
  imports: [
    CommonModule,
    BookMgmtModule,
    UserMgmtModule
  ],
  declarations: []
})
export class LibraryMgmtModule { }
