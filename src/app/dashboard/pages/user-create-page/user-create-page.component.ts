import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';
import { UsersService } from '../../services/users.service';
import { Observable, map, startWith } from 'rxjs';
import { GroupsService } from '../../services/groups.service';

@Component({
  selector: 'app-user-create-page',
  templateUrl: './user-create-page.component.html',
  styleUrls: ['./user-create-page.component.scss'],
})
export class UserCreatePageComponent implements OnInit {
  formUser = this._fb.group({
    nombre: ['', [Validators.required]],
    apellidoPaterno: ['', [Validators.required]],
    apellidoMaterno: ['', [Validators.required]],
    puesto: [
      '',
      [
        Validators.required,
        Validators.pattern(this._validatorsService.onlyNumbersPattern),
      ],
    ],
    grupo: [''],
    correo: [
      '',
      [
        Validators.required,
        Validators.pattern(this._validatorsService.emailPattern),
      ],
    ],
    usuario: ['', [Validators.required]],
  });

  options: string[] = [];
  filteredOptions!: Observable<string[]>;
  constructor(
    private readonly _fb: FormBuilder,
    private readonly _usersService: UsersService,
    private readonly _snackBarService: SnackBarService,
    private readonly _router: Router,
    private readonly _validatorsService: ValidatorsService,
    private readonly _groupsService: GroupsService
  ) {}
  ngOnInit(): void {
    this._groupsService
      .getAllGroups()
      .pipe()
      .subscribe((resp) => {
        for (let index = 0; index < resp.dataList.length; index++) {
          this.options.push(resp.dataList[index].grupo);
        }
        this.filteredOptions = this.getField('grupo')!.valueChanges.pipe(
          startWith(''),
          map((value) => this._filter(value || ''))
        );
      });
  }

  save(): void {
    if (this.formUser.invalid) {
      this.formUser.markAllAsTouched();
      return;
    }

    const puesto = +this.getField('puesto')?.value;
    const { nombre, apellidoPaterno, apellidoMaterno, correo, grupo, usuario } =
      this.formUser.value;
    this._usersService
      .saveUser(
        nombre!.trim(),
        apellidoPaterno!.trim(),
        apellidoMaterno!.trim(),
        puesto!,
        correo!,
        grupo!,
        usuario!
      )
      .subscribe(
        (resp) => {
          this._snackBarService.openSnackBar('Datos guardados correctamente');
          this._router.navigateByUrl('dashboard/usuarios', {
            replaceUrl: true,
          });
        },
        (e) => {
          this._snackBarService.openSnackBar('Hubo un Error');
        }
      );
  }

  cancel(): void {
    this._router.navigateByUrl('dashboard/usuarios', { replaceUrl: true });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  getField(field: string): AbstractControl<any, any> | null {
    return this.formUser.get(field);
  }
}
