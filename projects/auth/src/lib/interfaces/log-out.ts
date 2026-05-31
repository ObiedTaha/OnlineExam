export interface LogOutReq {
  token?: string;
}

export interface LogOutRes {
  status: boolean;

  message: string;
}