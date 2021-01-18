import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  form: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private _fb: FormBuilder,
  ) {
    this.form = _fb.group(
      {
        email: ['flastname', Validators.required],
        password: ['flastname', Validators.required],
      });
  }

  async onLogin(): Promise<void> {
    const logined = await this.authenticationService.login(this.form.value.email, this.form.value.password);
    if (logined) {
      this.router.navigate(['/courses']);
    } else {
      this.form.patchValue({email: '', password: ''});
    }
  }
}
