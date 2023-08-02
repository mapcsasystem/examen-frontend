export interface IUserRespose {
  code: number;
  message: string;
  dataList: IUserDataList[];
}

export interface IUserDataList {
  id: number;
  apellidoMaterno: string;
  apellidoPaterno: string;
  comentarios: null | string;
  correo: null | string;
  departamento: null | string;
  estatus: number;
  fechaDesactivacion: null;
  fechaModificacion: Date | null;
  fechaRegistro: Date;
  lote: null | string;
  nombre: string;
  nombreCompleto: string;
  password: string;
  fechaUltAcceso: Date | null;
  usuario: string;
  usuarioModificacion: null;
  usuarioRegistro: null;
  modificacion: null;
  grupoFk: number;
  puesto: number;
  sucursal: number;
  nombreGrupo: string;
  numeroGrupo: number;
  descripcionGrupo: string;
  estatusGrupo: number;
  puestoNombre: PuestoNombre;
  isAdmin: null;
  grupo: null;
  op: number;
  idAc: number;
}

export enum PuestoNombre {
  Admin = 'ADMIN',
}
