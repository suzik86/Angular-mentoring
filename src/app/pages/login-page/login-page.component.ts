import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  login: string;
  password: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {}

  onLogin(): void {
    this.authenticationService.login(this.login, this.password);
    if (this.authenticationService.isAuthenticated) {
      this.router.navigate(['/courses']);
    }
    if (!this.authenticationService.isAuthenticated) {
      this.login = '';
      this.password = '';
    }
  }
}
