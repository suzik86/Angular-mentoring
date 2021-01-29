import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../../state/user/user.types';

@Injectable({
  providedIn: 'root',
})
export abstract class AuthenticationService {
  token: string;

  abstract get userData$(): Observable<User>;

  abstract get currentUser(): User;

  abstract get isAuthenticated(): boolean;

  abstract async login(login: string, password: string): Promise<boolean>;

  abstract logout(): void;

  abstract async getUser(): Promise<User>;
}
