import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUserRespose } from '../interfaces/users.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = environment.baseUrlApi;
  constructor(private readonly http: HttpClient) {}

  getAllUsers() {
    const body = {};
    return this.http
      .post<IUserRespose>(`${this.baseUrl}/usuarios/consult-list`, body)
      .pipe();
  }

  saveUser(
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    puesto: number,
    correo: string,
    grupo: string,
    usuario: string
  ) {
    const nombreCompleto = `${nombre} ${apellidoPaterno} ${apellidoMaterno}`;
    const body = {
      nombre,
      nombreCompleto,
      apellidoPaterno,
      apellidoMaterno,
      puesto,
      correo,
      usuario,
      grupoFk: '1',
      departamento: 'prueba',
      sucursal: '1',
      estatus: '0',
      lote: '',
      fechaDesactivacion: '2023-03-02',
      fechaUltAcceso: '2023-03-02',
      comentarios: 'prueba desde angular',
      modificacion: 'prueba',
      fechaModificacion: '2023-08-02',
      password: '123',
    };

    return this.http.post(`${this.baseUrl}/usuarios/save`, body).pipe();
  }
}

//!Queda como referencia para agregar cabecera
// getAllUsers() {
//   // const token1 = localStorage.getItem('token') as string;
//   // const httpOptions = {
//   //   headers: new HttpHeaders({
//   //     'Content-Type': 'application/json',
//   //     'Content-Encoding': 'gzip',
//   //     'Access-Control-Allow-Origin': '*',
//   //     Authorization: `Bearer ${token1}`,
//   //   }),
//   // };
//   const body = {};

//   return this.http
//     .post<IUserRespose>(
//       `${this.baseUrl}/usuarios/consult-list`,
//       body
//       // httpOptions
//     )
//     .pipe();
// }
