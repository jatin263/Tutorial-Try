import { Component, OnInit } from '@angular/core';
import { usersModel } from './usersModel.model';

@Component({
  selector: 'app-trying-data-binding',
  templateUrl: './trying-data-binding.component.html',
  styleUrls: ['./trying-data-binding.component.css']
})
export class TryingDataBindingComponent implements OnInit {

  userListt:usersModel[]=[];
  ngOnInit(): void {
      
  }
  addUser(u:usersModel){
    this.userListt.push(u);
    console.log(this.userListt);
  }
}
