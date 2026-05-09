export interface ForgetPasswordReq {
  email: string;
}

export interface ForgetPasswordRes {
  message: string;
  resetCode?: string;
}