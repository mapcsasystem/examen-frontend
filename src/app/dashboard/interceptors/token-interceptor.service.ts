import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    // Clone the request and set the modified headers
    const modifiedReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Content-Encoding': 'gzip',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`,
      },
    });

    // Pass the modified request to the next interceptor or the backend
    return next.handle(modifiedReq);
  }
}
