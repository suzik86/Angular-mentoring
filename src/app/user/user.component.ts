import { Component } from '@angular/core';
import IUser from './user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})
export class UserComponent implements IUser {
  id: number;
  firstName: string;
  lastName: string;

  constructor( ) {

   }

}
