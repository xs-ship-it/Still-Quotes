import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quotes:Quote[]=[
    new Quote(1,'Eliud KIpchoge','felix','Only the disciplined ones are free in life',new Date(10/2/2020)),
    new Quote(2,'Thanos','john','The hardest choices require the strongest will',new Date(10/2/2020)),
    new Quote(3,'Lupita','wayne','No matter where you come from dreams are valid',new Date(10/2/2020)),
    new Quote(4,'Vision','bruce','A thing isnt beautiful cause it lasts, its the privillage to be among them' ,new Date(10/2/2020)),
  ];
  
  showDetails(index){
    this.quotes[index].showQuoteDetails = ! this.quotes[index].showQuoteDetails ;
  }
  completeQuote(isComplete, index){
    if(isComplete){
      this.quotes.splice(index,1);
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }
 
}
