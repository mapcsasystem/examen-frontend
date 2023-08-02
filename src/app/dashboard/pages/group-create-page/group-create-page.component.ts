import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { GroupsService } from '../../services/groups.service';
import { ValidatorsService } from '../../../shared/validators/validators.service';

@Component({
  selector: 'app-group-create-page',
  templateUrl: './group-create-page.component.html',
  styleUrls: ['./group-create-page.component.scss'],
})
export class GroupCreatePageComponent {
  formGroup = this._fb.group({
    numero: [
      '',
      [
        Validators.required,
        Validators.pattern(this._validatorsService.onlyNumbersPattern),
      ],
    ],
    grupo: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
  });
  constructor(
    private readonly _fb: FormBuilder,
    private readonly _groupsService: GroupsService,
    private readonly _snackBarService: SnackBarService,
    private readonly _router: Router,
    private readonly _validatorsService: ValidatorsService
  ) {}

  save(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    const numero = +this.getField('numero')?.value;
    const { grupo, descripcion } = this.formGroup.value;
    this._groupsService.saveGroup(grupo!, numero, descripcion!).subscribe(
      (resp) => {
        this._snackBarService.openSnackBar('Datos guardados correctamente');
        this._router.navigateByUrl('dashboard/groups', { replaceUrl: true });
      },
      (e) => {
        this._snackBarService.openSnackBar('Hubo un Error');
      }
    );
  }

  cancel(): void {
    this._router.navigateByUrl('dashboard/grupos', { replaceUrl: true });
  }

  getField(field: string): AbstractControl<any, any> | null {
    return this.formGroup.get(field);
  }
}
