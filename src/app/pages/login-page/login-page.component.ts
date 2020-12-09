import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  login = 'flastname';
  password = 'flastname';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {}

  async onLogin(): Promise<void> {
    const logined = await this.authenticationService.login(this.login, this.password);
    if (logined) {
      this.router.navigate(['/courses']);
    } else {
      this.login = '';
      this.password = '';
    }
  }
}
