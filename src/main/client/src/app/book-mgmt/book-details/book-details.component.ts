import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, AbstractControl} from '@angular/forms';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {BookService} from '../book.service';
import {Book} from '../book.dto';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  @ViewChild('bookForm') currentForm: NgForm;

  currentBook: Book;

  submitted: boolean;

  private static createErrorMessage(errorObject: { [key: string]: any }): string {
    if (errorObject) {
      for (const errorCode of Object.keys(errorObject)) {
        switch (errorCode) {
          case 'required':
            return 'Please provide a value';
          case 'maxlength':
            return 'The value is too long';
          default:
            return 'The value is wrong';
        }
      }
    }
  };

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {
    this.currentBook = {title: '', author: ''};
    this.submitted = false;
  }

  save(): void {
    this.submitted = true;
    if (this.currentForm && this.currentForm.form && this.currentForm.form.valid) {
      this.bookService.save(this.currentBook);
      this.router.navigate(['/books']);
    }
  }

  getErrorMessageOfField(fieldName: string): string {
    if (this.isFieldInvalid(fieldName)) {
      const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
      return BookDetailsComponent.createErrorMessage(fieldControl.errors);
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const fieldControl: AbstractControl = this.currentForm.form.get(fieldName);
    return fieldControl && fieldControl.invalid && (fieldControl.touched || this.submitted);
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['bookId']) {
        const bookId: number = +params['bookId'];
        const foundBook: Book = this.bookService.findOne(bookId);
        if (foundBook) {
          this.currentBook = foundBook;
        } else {
          this.router.navigate(['/book']);
        }
      }
    });
  }
}
