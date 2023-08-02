import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GroupsService } from '../../services/groups.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';
import { IDataList } from '../../interfaces/groups.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss'],
})
export class GroupsPageComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  formControlInput = new FormControl('');
  displayedColumns: string[] = [
    'id',
    'grupo',
    'descripcion',
    'numero',
    'estatus',
    'timeOut',
  ];
  dataSource!: MatTableDataSource<IDataList, MatTableDataSourcePaginator>;
  groupsData: IDataList[] = [];
  private _subscription = new Subscription();

  constructor(private readonly _groupsService: GroupsService) {}

  ngOnInit(): void {
    this._subscription.add(
      this.formControlInput.valueChanges.subscribe((value) => {
        this.applyFilter(value);
      })
    );
    this._groupsService.getAllGroups().subscribe((resp) => {
      this.groupsData = resp.dataList;
      this.addGroups([...this.groupsData]);
    });
  }

  addGroups(groups: IDataList[]): void {
    this.dataSource = new MatTableDataSource([...groups]);
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
