import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible = 'false';

  btnClicksCount:number[] = [0];
  valuesString = "";
  //count = 0;

  onToogleVisibility(){
    //if(this.visible === 'true'){
      //this.visible = 'false';
    //}else{
      //this.visible = 'true';
    //}
    this.visible == 'true' ? this.visible ='false': this.visible='true';
    console.log(this.visible);
    this.btnClicksCount.push((this.btnClicksCount[this.btnClicksCount.length-1]) + 1);
    this.valuesString = "";
    this.btnClicksCount.forEach((value)=>{

      this.valuesString = this.valuesString + value.toString();
      
    });
  }

  getBackgroundColour(){
    return this.btnClicksCount.length > 5 ? 'blue' : 'white';
  }

  getFontColour(){
    return this.btnClicksCount.length > 5 ? 'true' : 'false';
  }
}


