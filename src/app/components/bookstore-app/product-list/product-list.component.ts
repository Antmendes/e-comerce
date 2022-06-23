import { Component, OnInit } from '@angular/core';
import { Bookservice } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  booksService: Bookservice
  livros: any;


  constructor(private bookService: Bookservice) {
    this.booksService = bookService;
  }

  ngOnInit(): void {
    this.livros = this.bookService.getBook().subscribe((data =>{
      this.livros = data;
    }))
  }

}
