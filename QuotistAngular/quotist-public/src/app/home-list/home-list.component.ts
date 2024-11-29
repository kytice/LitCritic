import { Component, OnInit } from '@angular/core';
import { QuotistDataService } from '../quotist-data.service';

export class Book {
  _id!: string;
  name!: string;
  author!: string;
  rating!: number;
  genre!: string;
  themes!: string[];
  published!: number;
  description!: string;
  pages!: number;
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.css',
  providers: [QuotistDataService],
})
export class HomeListComponent implements OnInit {
  constructor(private quotistDataService: QuotistDataService) {}

  books: Book[] = [];

  private getBooks(): void {
    this.quotistDataService.getBooks().then((foundBooks: Book[]) => {
      this.books = foundBooks;
    });
  }

  ngOnInit() {
    this.getBooks();
  }
}
