import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './shared/services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    public auth: AuthenticationService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.auth.isAuthenticated) {
      request = request.clone({
        setHeaders: {
          Authorization: JSON.stringify({token: this.auth.token}),
        },
      });
    }

    return next.handle(request);
  }
}
