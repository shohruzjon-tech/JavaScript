import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, LOGIN_URL } from './services/Url.model';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.startsWith(API_BASE_URL) && !request.url.startsWith(LOGIN_URL)){
      let clone: HttpRequest<any> = request.clone();
      clone.headers.set('Authentication',localStorage.getItem('Access-token')||'');
      console.log(clone);
      return next.handle(clone);
    }
    return next.handle(request);
  }
}
