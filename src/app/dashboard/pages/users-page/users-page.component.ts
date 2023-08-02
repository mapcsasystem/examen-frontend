import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IUserDataList } from '../../interfaces/users.interfaces';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  formControlInput = new FormControl('');
  displayedColumns: string[] = [
    'id',
    'nombreCompleto',
    'puesto',
    'fechaRegistro',
    'estatus',
    'puestoNombre',
  ];
  dataSource!: MatTableDataSource<IUserDataList, MatTableDataSourcePaginator>;
  usersData: IUserDataList[] = [];
  private _subscription = new Subscription();

  constructor(private readonly _usersService: UsersService) {}
  ngOnInit(): void {
    this._subscription.add(
      this.formControlInput.valueChanges.subscribe((value) => {
        this.applyFilter(value);
      })
    );
    this._usersService.getAllUsers().subscribe((resp) => {
      this.usersData = resp.dataList;
      this.addUsers([...this.usersData]);
    });
  }

  addUsers(users: IUserDataList[]): void {
    this.dataSource = new MatTableDataSource([...users]);
    this.paginator._intl.firstPageLabel = 'Primera página';
    this.paginator._intl.itemsPerPageLabel = 'Datos por página';
    this.paginator._intl.lastPageLabel = 'última página';
    this.paginator._intl.nextPageLabel = 'Siguiente página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.applyFilter(this.formControlInput.value);
  }

  applyFilter(value: any): void {
    const filterValue = value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
