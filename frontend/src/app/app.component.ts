import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';
import { DataReceived } from './models/dataReceived.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Quote Game';

  quotes: DataReceived[] = [];
  quoteIndex: number = 0;
  error: boolean = false;
  buttonClicked: number = -1;

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.generateQuotes();
  }

  checkAnswer(answerIndex: number): void {
    this.buttonClicked = answerIndex;
    this.error = answerIndex === this.quoteIndex ? false : true;

    setTimeout(() => {
      this.buttonClicked = -1;
      this.error = false;
      this.generateQuotes();
    }, 1 * 1000);
  }

  private generateIndex(): number {
    this.error = false;
    return Math.floor(Math.random() * 3);
  }

  private generateQuotes() {
    this.quoteService
      .getQuotes(3)
      .pipe(take(1))
      .subscribe((data: DataReceived[]) => {
        this.quotes = data;
        this.quoteIndex = this.generateIndex();
        console.log('Correct Result: ' + this.quoteIndex);
      });
  }
}
