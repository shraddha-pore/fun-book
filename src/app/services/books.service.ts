import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Data, DetailedData } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private api_url ="https://s3.amazonaws.com/api-fun/books.json";
  private data = new BehaviorSubject("")
  book_Added = this.data.asObservable();

  constructor(private http: HttpClient) { }

  getBooks(): Observable<DetailedData>{
    return this.http.get(this.api_url);
   }

   addBook(data : any){
    console.log("service");
    this.data.next(data);
   }
}
