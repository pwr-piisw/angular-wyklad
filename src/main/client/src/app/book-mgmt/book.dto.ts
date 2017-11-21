export interface Book {
  id?: number;
  title: string;
  author: string;
}

export function fromBook(anotherBook: Book): Book {
  return {
    id: anotherBook.id,
    title: anotherBook.title,
    author: anotherBook.author
  }
}
