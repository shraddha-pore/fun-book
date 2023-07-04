import { Component } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { Books, Data } from 'src/app/model/data';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

  data!: any;
  bookList!: any;
  sortProperty: string = 'title';
  sortOrder = 1;

  constructor(private bookInstance: BooksService) {
    this.getBooks();
  }

  ngOnInit() { }

  //get data from server
  getBooks() {
    this.bookInstance.getBooks().pipe(map((x: any) => {
      this.bookList = x.data.books;
      this.data = x.data;
    })).subscribe();
  }

  //on hovering on book tab it will show delete icon and can delete the book through it
  deleteBook(bookId: number) {
    this.bookList.splice(bookId, 1);
  }

  //this is to add new book data
  addBook() {
    this.bookInstance.book_Added.subscribe(x => {
      if (x && this.bookList) {
        this.bookList.unshift(x);
        console.log(this.bookList);
        return this.bookList;
      }
    })
  }

  // This is Edit functionality
  editBook(booktitle: string) {
    this.bookList.map((x: any) => {
      if (booktitle == x.title) {

      }
    });
  }

  //This functionality sorts data alphabetically by title or chronological by publish date
  sortBy(sortId: any) {
    this.sortOrder = sortId === this.sortProperty ? (this.sortOrder * -1) : 1;
    this.sortProperty = sortId;
    this.bookList = [...this.bookList.sort((a: any, b: any) => {
      // sort comparison function
      let result = 0;
      result = sortId == 'title' ? (a[sortId] < b[sortId] ? 1 : -1) : (a[sortId] < b[sortId] ? -1 : 1);
      return result * this.sortOrder;
    })];
  }

  
  //This functionality is to add sort icon
  sortIcon(sortId: string) {
    if (sortId === this.sortProperty) {
        return this.sortOrder === 1 ? '☝️' : '👇';
    }
    return '';
}
}
