export interface ConfirmOTPReq {
  email: string;
  code: string;
}

export interface ConfirmOTPRes {
  status: boolean;
  code: string;
  message: string;
}
