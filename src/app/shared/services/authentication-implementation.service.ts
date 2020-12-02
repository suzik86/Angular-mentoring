import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'ngx-store';
import User from '../components/user/user.types';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationImplementationService implements AuthenticationService{
  @LocalStorage() user: User;
  @LocalStorage() token: string;
  private users: Array<User> = [
    {
      id: 1,
      firstName: 'Den',
      lastName: 'Street',
      login: 'star',
      password: '123rhj',
    },
    {
      id: 2,
      firstName: 'Vera',
      lastName: 'White',
      login: 'kitty',
      password: '2608',
    },
  ];

  constructor(
    private router: Router,
  ) {}

  get currentUser(): User {
    return this.user;
  }

  get isAuthenticated(): boolean {
    return !!this.token;
  }

  login(login, password): void {
    if (this.users.find(item => item.login === login) && this.users.find(item => item.password === password)) {
      this.token = 'asdasdasdasda';
      const index = this.users.findIndex(item => item.login === login);
      this.user = this.users[index];
      console.log('Succesfully logined user with password', this.user);
    } else {
      console.log('Login failed!');
    }
  }

  logout(): void {
    this.token = '';
    this.user = null;
    this.router.navigate(['/login']);
  }

  getUsersInfo(): User {
    return this.user;
  }
}
