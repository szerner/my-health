import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.injector.get(AuthService); // DI via contructor gives loop error
    const authHeader = authService.getToken();

    if (!authHeader) return next.handle(req);

    const authReq = req.clone({ setHeaders: { Authorization: 'Bearer ' + authHeader } })
    return next.handle(authReq);
  }
}
