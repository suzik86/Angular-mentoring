import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorage } from 'ngx-store';
import User from '../components/user/user.types';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationImplementationService implements AuthenticationService{
  @LocalStorage() user: User;
  @LocalStorage() token: string;
  private userInfo$: BehaviorSubject<any>;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    this.userInfo$ = new BehaviorSubject(this.user);
  }

  get userData$(): Observable<User> {

    return this.userInfo$.asObservable();
  }

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
      this.userInfo$.next(this.user);

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
    const user = await this.http.post<User>('http://localhost:3004/auth/userinfo', {token: this.token}).toPromise();

    return user;
  }
}
