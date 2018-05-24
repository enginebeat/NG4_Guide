import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', //selection by attribute
  // selector:'.app-servers', //selection by class. id will not work
  selector: 'app-servers',
  //templateUrl: './servers.component.html',
  // inline template
  //template: '<app-server></app-server><app-server></app-server>',
  template:   `<app-server></app-server>
              <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
