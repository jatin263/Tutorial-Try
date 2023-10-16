import { Component, Input } from '@angular/core';
import { usersModel } from '../usersModel.model';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent {
  @Input()user: usersModel | undefined;
  @Input() usersList!: usersModel[];
}
