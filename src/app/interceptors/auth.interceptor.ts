import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const params = request.params.set('key', 'ed1305eea012482da8d124038240211')
    const clonedRequest = request.clone({params:params});
    console.log(clonedRequest, 'req')
    return next.handle(clonedRequest).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log(event, 'response event')
      }
      if (event instanceof HttpRequest) {
        console.log(event, 'request event')
      }
    }));
  }
}
