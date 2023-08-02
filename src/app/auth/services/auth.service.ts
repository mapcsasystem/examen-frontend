import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  IJWTResponse,
  ILoginResponse,
  ILogoutResponse,
} from '../interfaces/auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrlApi;
  constructor(private readonly http: HttpClient) {}

  login(username: string, password: string): Observable<ILoginResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Content-Encoding': 'gzip',
        'Access-Control-Allow-Origin': '*',
      }),
    };

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer your-token', // Cabecera de autorización personalizada
    //     'X-Custom-Header': 'valor-personalizado', // Otras cabeceras personalizadas
    //   }),
    // };

    const body = {
      username,
      password,
    };
    return this.http
      .post<ILoginResponse>(`${this.baseUrl}/session/login`, body, httpOptions)
      .pipe(
        tap((resp) => {
          console.log(this.parseJwt(resp.jwttoken));
        })
      );
  }

  logout(username: string): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Content-Encoding': 'gzip',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    const body = {
      username,
    };
    return this.http
      .post<ILogoutResponse>(
        `${this.baseUrl}/session/logout`,
        body,
        httpOptions
      )
      .pipe(tap((value) => {}));
  }

  private parseJwt(token: string): IJWTResponse {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
}
