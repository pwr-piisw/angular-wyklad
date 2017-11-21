import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Book, fromBook} from './book.dto';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
    private books: Book[] = [];
    private sequencer = 1;
    private booksFromBackend = false;

    constructor(private http: Http) {
    }

    findOne(id: number): Book {
        const originalBook = this.findById(id);
        if (originalBook) {
            return fromBook(originalBook);
        }
    }

    save(bookToSave: Book): void {
        if (bookToSave.id) {
            const originalBook: Book = this.findById(bookToSave.id);
            if (originalBook) {
                originalBook.author = bookToSave.author;
                originalBook.title = bookToSave.title;
            }
        } else {
            bookToSave.id = this.sequencer++;
            this.books.push(bookToSave);
        }
    }

    findAll(): Observable<Book[]> {
        return this.fetchBooksFromBackend();
    }

    private findById(id: number): Book {
        for (const book of this.books) {
            if (book.id === id) {
                return book;
            }
        }
    };

    private fetchBooksFromBackend(): Observable<Book[]> {
        if (!this.booksFromBackend) {
            return this.http.get('services/rest/books').map((response) => {
                const json: any = response.json();
                if (json) {
                    json.forEach(((book: Book) => this.books.push(book)));
                    this.sequencer = Math.max.apply(null, (this.books.map((book => book.id)))) + 1;
                }
                this.booksFromBackend = true;
                return this.books;
            });
        }

        return new Observable<Book[]>((observer: Observer<Book[]>) => {
            observer.next(this.books);
            observer.complete();
        })
    }
}
