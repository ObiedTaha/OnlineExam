export interface ResetPasswordReq {
  email: string;
  newPassword?: string;
  confirmPassword?: string;
  token: string;
}

export interface ResetPasswordRes {
  message: string;
  token: string;
}
