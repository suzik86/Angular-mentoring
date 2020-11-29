import { Injectable } from '@angular/core';
import User from '../components/user/user.types';

@Injectable({
  providedIn: 'root',
})
export abstract class AuthenticationService {
  abstract get currentUser(): User;

  abstract get isAuthenticated(): boolean;

  abstract login(login: string, password: string): void;

  abstract logout(): void;

  abstract getUsersInfo(): User;
}
