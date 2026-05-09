export interface ChangePasswordReq {
  password: string;
  newPassword: string;
  rePassword: string;
}

export interface ChangePasswordRes {
  message: string;
  token: string;
}