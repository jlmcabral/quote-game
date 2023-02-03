import { Component } from '@angular/core';
import { QuoteService } from './quote.service';
import { Question } from './structure/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Quote Game';
  teste: Question = {
    quote: 'Estar vivo é o contrário de estar morto',
    options: [
      {
        name: 'Lili Caneças',
        state: true,
      },
      {
        name: 'Ze camarinha',
        state: false,
      },
      {
        name: 'Tino de Rans',
        state: false,
      },
    ],
  };

  constructor(private quoteService: QuoteService) {
    this.quoteService.getQuotes(2).subscribe((data) => {
      console.log(data);
    });
  }
}
