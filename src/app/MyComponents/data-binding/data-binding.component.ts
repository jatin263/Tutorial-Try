import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  name:string='';
  show:boolean = false;
  countToggle:Array<Date> = [];

  checkUsername(){
    return this.name === '';
  }
  setEmptyUsername(){
    this.name = '';
  }
  btnToggle(){
    this.show=!this.show;
    this.countToggle.push(new Date());
  }
  getToggleState(){
    return this.show;
  }
}
