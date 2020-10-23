import { Component } from '@angular/core';
import User from './user.types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})
export class UserComponent implements User {
  id: number;
  firstName: string;
  lastName: string;

  constructor() {}

}
