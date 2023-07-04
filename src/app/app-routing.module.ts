import { RouterModule, Routes } from "@angular/router";
import { BookDetailsComponent } from "./component/book-details/book-details.component";
import { NgModule } from "@angular/core";
import { AddBookComponent } from "./component/add-book/add-book.component";

const routes : Routes = [
    {path: '', redirectTo: 'book-page', pathMatch: 'full'},
    {path: 'book-page' , component: BookDetailsComponent},
    {path: 'book-page/:title' , component:BookDetailsComponent},
    {path: 'addBook', component: AddBookComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    
})

export class AppRoutingModule{}