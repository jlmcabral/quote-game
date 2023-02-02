import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }

    getQuote(): Observable<unknown> {
        return this.getQuotes();
    }

    getQuotes(numberOfQuotes = 1): Observable<unknown> {
        return this.http.get(`https://api.api-ninjas.com/v1/quotes?limit=${numberOfQuotes}`, {
            headers: {
                'X-Api-Key': 'q0VLi3L8lHcD+/TFhoFpaw==hNuB1mjaoH6tEUkT'
            }
        });
    }
}
