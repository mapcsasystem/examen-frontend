import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  IGroupSaveResponse,
  IGroupsResponse,
} from '../interfaces/groups.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private baseUrl = environment.baseUrlApi;
  constructor(private readonly http: HttpClient) {}

  getAllGroups() {
    // const token1 = localStorage.getItem('token') as string;
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Content-Encoding': 'gzip',
    //     'Access-Control-Allow-Origin': '*',
    //     Authorization: `Bearer ${token1}`,
    //   }),
    // };
    const body = {};

    return this.http.post<IGroupsResponse>(
      `${this.baseUrl}/grupos/consult-list`,
      body
      // httpOptions
    );
  }

  saveGroup(grupo: string, numero: number, descripcion: string) {
    // const token1 = localStorage.getItem('token') as string;
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Content-Encoding': 'gzip',
    //     'Access-Control-Allow-Origin': '*',
    //     Authorization: `Bearer ${token1}`,
    //   }),
    // };
    const body = {
      grupo,
      numero,
      descripcion,
    };
    return this.http
      .post<IGroupSaveResponse>(
        `${this.baseUrl}/grupos/save`,
        body
        // httpOptions
      )
      .pipe();
  }
}
