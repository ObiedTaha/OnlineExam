export interface ChangePasswordReq {
  password: string;
  newPassword: string;
  rePassword: string;
}

export interface ChangePasswordRes {
  status: boolean;
  message: string;
  token: string;
}