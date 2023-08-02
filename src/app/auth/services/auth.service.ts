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
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrlApi;
  constructor(
    private readonly http: HttpClient,
    private readonly jwtHelper: JwtHelperService
  ) {}

  login(username: string, password: string): Observable<ILoginResponse> {
    const body = {
      username,
      password,
    };
    return this.http.post<ILoginResponse>(
      `${this.baseUrl}/session/login`,
      body
    );
  }

  logout(username: string): Observable<Object> {
    const body = {
      username,
    };
    return this.http
      .post<ILogoutResponse>(`${this.baseUrl}/session/logout`, body)
      .pipe(tap((value) => {}));
  }

  isAuth(): boolean {
    const token = localStorage.getItem('token');
    if (
      this.jwtHelper.isTokenExpired(token) ||
      !localStorage.getItem('token')
    ) {
      localStorage.removeItem('token');
      return false;
    }
    return true;
  }

  private parseJwt(token: string): IJWTResponse {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
}
