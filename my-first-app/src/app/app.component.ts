import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'] // not that this is an array as multiple css templates can be referenced
  // using inline styling. note that you can only have one or the other
  styles:[`
    h3{
      color: dodgerblue;
    }
  `]

})
export class AppComponent {
  title = ' my app';
}
