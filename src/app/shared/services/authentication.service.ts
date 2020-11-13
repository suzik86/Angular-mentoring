import { Injectable } from '@angular/core';
import { LocalStorage } from 'ngx-store';
import User from '../components/user/user.types';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  @LocalStorage() user: User;
  @LocalStorage() token: string;
  private users: Array<User> = [
    {
      id: 1,
      firstName: 'Den',
      lastName: 'Street',
      login: 'star',
      password: '123rhj'
    },
    {
      id: 2,
      firstName: 'Vera',
      lastName: 'White',
      login: 'kitty',
      password: '1644xdrd'
    }
  ];

  constructor() { }

  get isAuthenticated(): boolean {
    return !!this.token;
  }

  login(name, password) {
    console.log('Succesfully logined user with password', name, password);
    this.token = 'asdasdasdasda';
    this.user = this.users[0];
    console.log('Token: ', this.token);
  }

  logout() {
    this.token = '';
    this.user = null;
  }

  getUsersInfo(): User {
    return this.user;
  }
}
