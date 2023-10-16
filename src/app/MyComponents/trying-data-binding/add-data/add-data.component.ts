import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {usersModel} from '../usersModel.model';
@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  usersModel:usersModel=new usersModel("","");
  @Output() newUser = new EventEmitter<usersModel>();

  ngOnInit(): void {
      
  }

  addUser(){
    console.log(this.usersModel);
    this.newUser.emit(this.usersModel);
  }
}
