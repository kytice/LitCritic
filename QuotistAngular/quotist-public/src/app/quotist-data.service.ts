import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './home-list/home-list.component';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class QuotistDataService {
  private apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  public async getBooks(): Promise<Book[]> {
    const url: string = `${this.apiBaseUrl}/books`;
    try {
      return await firstValueFrom(this.http.get<Book[]>(url));
    } catch (error) {
      console.error('Something has gone wrong', error);
      throw error;
    }
  }
}
