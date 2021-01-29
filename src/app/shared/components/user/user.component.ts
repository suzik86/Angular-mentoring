import { Component } from '@angular/core';
import User from '../../../state/user/user.types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements User {
  id: number;
  name: {
    first: string;
    last: string;
  };
  login: string;
  fakeToken: string;
}
