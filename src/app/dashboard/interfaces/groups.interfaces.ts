export interface IGroupsResponse {
  code: number;
  message: string;
  dataList: IDataList[];
}

export interface IDataList {
  id: string;
  grupo: string;
  descripcion: string;
  numero: number;
  estatus: number;
  timeOut: number;
}

export interface IGroupSaveResponse {
  success: boolean;
  code: number;
  message: string;
}
