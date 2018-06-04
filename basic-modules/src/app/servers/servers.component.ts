import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit { 
    allowNewServer = false;
    serverCreationStatus="No server was created!";
    serverCreated = false;
    hoveringButton = 'You are not on top of the button';
    serverName = 'TestServer';
    servers = ['Testserver', 'Testserver 2'];

    constructor(){
        setTimeout(()=>{
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit(){

    }
    
    onCreateServer(){
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = `${this.serverName} Server was created!`;
        
    }

    onHoverButton(){
        this.hoveringButton = 'You are on top of the button';
    }

    onUpdateServerName(event: any){
        console.log(event.target.value);
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}