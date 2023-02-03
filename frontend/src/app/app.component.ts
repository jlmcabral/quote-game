import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';
import { DataReceived } from './structure/datareceive';
import { Question } from './structure/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Quote Game';
  teste!: Question; 
 

  constructor(private quoteService: QuoteService) {
    this.teste = {
      quote: "",
      options: [] = []
    };
  }

  ngOnInit(): void {
    this.quoteService.getQuotes(3).subscribe((data: DataReceived[]) => {
      data.forEach((el, index) => {
        this.teste.quote = el.quote;
        this.teste.options.push({
            name: el.author,
            state: index == 0 ? true : false
        });
      });
    });
  }
}
