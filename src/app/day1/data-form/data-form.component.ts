import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { userModel } from '../userModel.model';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  name: string = '';
  u:userModel=new userModel("","","");
  @Output() addUSerEvent = new EventEmitter<userModel>();

  ngOnInit(): void {
    
  }

  addUser(name:any,username:any,password:any){
    this.u= new userModel(name.value,username.value,password.value);
    this.addUSerEvent.emit(this.u);
  }
}
