import { Component } from '@angular/core';
import { Quote } from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';

  // quotes:Quote[]=[
  //   new Quote(1,'Thanos','felix','I am Inevitable',new Date(10/2/2020)),
  //   new Quote(2,'Grout','john','I am Grout',new Date(10/2/2020)),
  //   new Quote(3,'Hulk','wayne','smash',new Date(10/2/2020)),
  //   new Quote(4,'Thor','bruce','I am the God of Thunder' ,new Date(10/2/2020)),
  // ];
}
