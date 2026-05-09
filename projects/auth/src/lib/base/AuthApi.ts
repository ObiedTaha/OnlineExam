import { Observable } from 'rxjs';
import { LoginReq, LoginRes } from '../interfaces/login';
import { RegisterEmailReq, RegisterEmailRes } from '../interfaces/register-email';
import { RegisterFormReq, RegisterFormRes } from '../interfaces/register-form';
import { ConfirmOTPReq, ConfirmOTPRes } from '../interfaces/confirm-otp';
import { ChangePasswordReq, ChangePasswordRes } from '../interfaces/change-password';
import { EditProfileReq, EditProfileRes } from '../interfaces/edit-profile';
import { ForgetPasswordReq, ForgetPasswordRes } from '../interfaces/forget-password';
import { VerifyOTPReq, VerifyOTPRes } from '../interfaces/verify-otp';
import { ResetPasswordReq, ResetPasswordRes } from '../interfaces/reset-password';
import { LogOutReq, LogOutRes } from '../interfaces/log-out';
import { GetLoggedUserInfoRes } from '../interfaces/profile';

export abstract class AuthAPI {
  abstract signIn(data: LoginReq): Observable<LoginRes>;
  abstract verifyEmail(data: RegisterEmailReq): Observable<RegisterEmailRes>;
  abstract confirmEmail(data: ConfirmOTPReq): Observable<ConfirmOTPRes>;
  abstract register(data: RegisterFormReq): Observable<RegisterFormRes>;
  abstract changePassword(data: ChangePasswordReq): Observable<ChangePasswordRes>;
  abstract deleteAccount(): Observable<{ message: string }>;
  abstract editProfile(data: EditProfileReq): Observable<EditProfileRes>;
  abstract forgetPassword(data: ForgetPasswordReq): Observable<ForgetPasswordRes>;
  abstract VerifyOTP(data: VerifyOTPReq): Observable<VerifyOTPRes>;
  abstract resetPassword(data: ResetPasswordReq): Observable<ResetPasswordRes>;
  abstract logOut(data: LogOutReq): Observable<LogOutRes>;
  abstract getLoggedUserInfo(): Observable<GetLoggedUserInfoRes>;
}