export interface ForgetPasswordReq {
  email: string;
}

export interface ForgetPasswordRes {
  status: boolean;

  message: string;
  resetCode?: string;
}