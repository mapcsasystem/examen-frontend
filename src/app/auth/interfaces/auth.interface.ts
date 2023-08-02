export interface ILoginResponse {
  jwttoken: string;
  completeName: string;
  perfil: string;
}

export interface ILogoutResponse {
  success: boolean;
  code: number;
  message: string;
}

export interface IJWTResponse {
  sub: string;
  ipAddress: string;
  exp: number;
  iat: number;
}
