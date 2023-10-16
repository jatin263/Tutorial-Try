import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-comp',
  templateUrl: './even-comp.component.html',
  styleUrls: ['./even-comp.component.css']
})
export class EvenCompComponent implements OnInit{
  @Input() number:number = 0;

  ngOnInit(): void {
      
  }
}
