export interface ResetPasswordReq {
  email: string;
  newPassword?: string;
  confirmPassword?: string;
  token: string;
}

export interface ResetPasswordRes {
  status: boolean;

  message: string;
  token: string;
}
