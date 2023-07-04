import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

    
  constructor(
    private router: Router, 
    private bookInstance: BooksService,
    private formBuilder: FormBuilder){
    
  }

  addBookForm! : FormGroup;

  ngOnInit(){
    this.addBookForm = this.formBuilder.group({
      imageUrl: new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required]),
      purchaseLink: new FormControl('',[Validators.required]),
      Publishdate: new FormControl('',[Validators.required, Validators.pattern('^(2|1){1}[0-9]{3}.*$'), Validators.minLength(4), Validators.maxLength(4)]),   
    })
  }

  get f(){
    return this.addBookForm.controls;
  }

  addBook(){
    this.bookInstance.addBook(this.addBookForm.value);
    this.router.navigate(['/book-page'])
  }

}
