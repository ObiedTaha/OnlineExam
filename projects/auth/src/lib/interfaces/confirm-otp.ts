export interface ConfirmOTPReq {
  email: string;
  code: string;
}

export interface ConfirmOTPRes {
  status: string;
  code: string;
  message: string;
}