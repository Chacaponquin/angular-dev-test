import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() {}

  intercept<T>(
    req: HttpRequest<T>,
    next: HttpHandler
  ): Observable<HttpEvent<T>> {
    let requestUrl = req.url;

    req = req.clone({
      url: environment.API_URL + requestUrl,
    });

    return next.handle(req);
  }
}
