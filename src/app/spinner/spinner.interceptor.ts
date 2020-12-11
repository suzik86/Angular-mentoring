import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';


@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(
    public spinnerService: SpinnerService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.changeLoadingStatus(true);

    return next.handle(request).pipe(tap((evt) => {
      if (evt instanceof HttpResponse) {
        this.spinnerService.changeLoadingStatus(false);
      }
    }));
  }
}
