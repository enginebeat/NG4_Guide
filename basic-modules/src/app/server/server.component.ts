import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverID = 10;
  serverStatus = 'Offline';
  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  
   }

  ngOnInit() {
  }
  getServerStatus(){
    return this.serverStatus;
  }

  getColourStatus(){
    return this.getServerStatus() === 'online' ? 'green' : 'red';
  }

}
