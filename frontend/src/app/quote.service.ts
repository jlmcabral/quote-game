import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataReceived } from './structure/datareceive';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private http: HttpClient) {}

  getQuote(): Observable<any> {
    return this.getQuotes();
  }

  getQuotes(numberOfQuotes = 1): Observable<any> {
    return this.http.get(
      `https://api.api-ninjas.com/v1/quotes?limit=${numberOfQuotes}`,
      {
        headers: {
          'X-Api-Key': 'q0VLi3L8lHcD+/TFhoFpaw==hNuB1mjaoH6tEUkT',
        },
      }
    );
  }
}
