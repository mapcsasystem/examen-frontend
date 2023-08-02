import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinner.show();
    const token = localStorage.getItem('token');
    let modifiedReq;
    if (!token) {
      modifiedReq = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Content-Encoding': 'gzip',
          'Access-Control-Allow-Origin': '*',
        },
      });
    } else {
      modifiedReq = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Content-Encoding': 'gzip',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${token}`,
        },
      });
    }
    // Clone the request and set the modified headers

    // Pass the modified request to the next interceptor or the backend
    return next.handle(modifiedReq).pipe(
      finalize(() => {
        this.spinner.hide();
      })
    );
  }
}
