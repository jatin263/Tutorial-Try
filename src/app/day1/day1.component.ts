import { Component, OnInit} from '@angular/core';
import { userModel } from './userModel.model';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component implements OnInit {
  childStr:userModel[]=[];

  ngOnInit(): void {
      
  }

  addNewUser(d:userModel){
    this.childStr.push(d);
  }
}
