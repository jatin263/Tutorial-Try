import { Component } from '@angular/core';
import { usersModel } from './MyComponents/trying-data-binding/usersModel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tutorial-Try';
  oddNumber:Array<number>=[];
  evenNumber:Array<number>=[];
  onIntervalFired(firedNumber:number){
    if(firedNumber%2==0){
      this.evenNumber.push(firedNumber);
    }
    else{
      this.oddNumber.push(firedNumber);
    }
  }
}
