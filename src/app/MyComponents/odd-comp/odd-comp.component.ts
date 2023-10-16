import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-comp',
  templateUrl: './odd-comp.component.html',
  styleUrls: ['./odd-comp.component.css']
})
export class OddCompComponent implements OnInit {
  @Input() number:number = 0;

  ngOnInit(): void {
      
  }
}
