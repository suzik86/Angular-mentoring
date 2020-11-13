import { Component } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  login: string;
  password: string;

  constructor(
    private authenticationService: AuthenticationService,
    ) {}

  onLogin() {
    this.authenticationService.login(this.login, this.password);
  }

}
