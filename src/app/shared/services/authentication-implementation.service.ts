import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from 'ngx-store';
import User from '../components/user/user.types';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationImplementationService implements AuthenticationService{
  @LocalStorage() user: User;
  @LocalStorage() token: string;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  get currentUser(): User {

    return this.user;
  }

  get isAuthenticated(): boolean {

    return !!this.token;
  }

  async login(login, password): Promise<boolean> {
    const {token} = await this.http.post<any>('http://localhost:3004/auth/login', {login, password}).toPromise();
    this.token = token;
    this.user = await this.getUser();

    if (this.user) {
      console.log('Succesfully logined user with password', this.user);

      return true;
    } else {
      console.log('Login failed!');

      return false;
    }
  }

  logout(): void {
    this.token = '';
    this.user = null;
    this.router.navigate(['/login']);
  }

  async getUser(): Promise<User> {
    return await this.http.post<User>('http://localhost:3004/auth/userinfo', {token: this.token}).toPromise();
  }
}
