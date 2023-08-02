import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';
import { IBreadCrum } from './interfaces/breadcrum.interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  breadCrums: IBreadCrum[] = [];
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.addBreadCrum('grupos');
    this._router.navigateByUrl('dashboard/grupos', { replaceUrl: true });
  }

  logout(): void {
    this._authService.logout('admin').subscribe((resp) => {
      localStorage.removeItem('token');
      this._router.navigateByUrl('auth/login');
    });
  }

  navigate(url: string): void {
    this.addBreadCrum(url);
    this._router.navigateByUrl(`dashboard/${url}`, { replaceUrl: true });
  }

  addBreadCrum(url: string): void {
    switch (url) {
      case 'grupos':
        this.breadCrums = [
          {
            title: 'Grupos',
            url: `dashboard/${url}`,
          },
          {
            title: 'Crear grupo',
            url: `dashboard/crear-grupo`,
          },
        ];
        break;

      case 'usuarios':
        this.breadCrums = [
          {
            title: 'Usuarios',
            url: `dashboard/${url}`,
          },
          {
            title: 'Crear usuario',
            url: `dashboard/crear-usuario`,
          },
        ];
        break;
    }
  }
}
