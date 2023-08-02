import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.scss'],
})
export class BreadcrumComponent {
  fontStyleControl = new FormControl('grupos');
  constructor(private readonly _router: Router) {}

  navigate(url?: string) {
    this._router.navigateByUrl('dashboard/usuarios', { replaceUrl: true });
  }
}
