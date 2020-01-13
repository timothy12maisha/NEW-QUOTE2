import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  upvote = 0;
  downvote = 0;
  quotes: Quote[] = [
    new Quote('', '', '',0,0,new Date()),
    // new Quote('','','','',),
    // new Quote('','','','',),
    // new Quote('','','','',),
    // new Quote('','','','',),
    // new Quote('','','','',),
  ];
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].Quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  
  constructor() { }

  ngOnInit() {
}
toggleDetails=(index)=>{
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

}
 
 
