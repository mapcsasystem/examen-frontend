import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IBreadCrum } from '../../interfaces/breadcrum.interfaces';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.scss'],
})
export class BreadcrumComponent implements OnInit {
  @Input({ required: true }) breadCrums: IBreadCrum[] = [];
  fontStyleControl = new FormControl('');
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {
    this.fontStyleControl.setValue(this.breadCrums[0].url);
  }

  navigate(url: string) {
    this._router.navigateByUrl(`${url}`, { replaceUrl: true });
  }
}
