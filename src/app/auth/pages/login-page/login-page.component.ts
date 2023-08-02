import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  formLogin = this._fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });

  eye: boolean = false;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _snackBarService: SnackBarService,
    private readonly _router: Router
  ) {}

  login(): void {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      return;
    }
    const { username, password } = this.formLogin.value;
    this._authService.login(username!, password!).subscribe(
      (resp) => {
        this._router.navigateByUrl('dashboard/groups', { replaceUrl: true });
        localStorage.setItem('token', resp.jwttoken);
      },
      (e) => {
        this._snackBarService.openSnackBar('Hubo un Error');
        this._router.navigateByUrl('auth/login', { replaceUrl: true });
        localStorage.removeItem('token');
      }
    );
  }

  getField(field: string): AbstractControl<any, any> | null {
    return this.formLogin.get(field);
  }
}
