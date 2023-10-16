import { Component, Input, OnInit } from '@angular/core';
import { userModel } from '../userModel.model';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {
  @Input() Data:userModel=new userModel("","","");
  ngOnInit(): void {
      
  }

  constructor() { 
  }


}
