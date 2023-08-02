import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  logout(): void {
    this._authService.logout('admin').subscribe((resp) => {
      console.log(resp);
      localStorage.removeItem('token');
      this._router.navigateByUrl('auth/login');
    });
  }

  navigate(url: string): void {
    this._router.navigateByUrl(`dashboard/${url}`, { replaceUrl: true });
  }
}
