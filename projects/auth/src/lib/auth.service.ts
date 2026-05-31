import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AuthAdaptor } from './adaptor/auth-adaptor';
import { AuthAPI } from './base/AuthApi';
import { AuthEndPoint } from './enums/AuthEndPoint';
import { LoginReq, LoginRes } from './interfaces/login';
import { RegisterEmailReq, RegisterEmailRes } from './interfaces/register-email';
import { RegisterFormReq, RegisterFormRes } from './interfaces/register-form';
import { ConfirmOTPReq, ConfirmOTPRes } from './interfaces/confirm-otp';
import { ChangePasswordReq, ChangePasswordRes } from './interfaces/change-password';
import { EditProfileReq, EditProfileRes } from './interfaces/edit-profile';
import { ForgetPasswordReq, ForgetPasswordRes } from './interfaces/forget-password';
import { VerifyOTPReq, VerifyOTPRes } from './interfaces/verify-otp';
import { ResetPasswordReq, ResetPasswordRes } from './interfaces/reset-password';
import { LogOutReq, LogOutRes } from './interfaces/log-out';
import { GetLoggedUserInfoRes } from './interfaces/profile';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements AuthAPI {
  private _http = inject(HttpClient);
  private _authAdaptor = inject(AuthAdaptor);

  private _handleError(err: HttpErrorResponse): Observable<never> {
    const message = err?.error?.message || err?.message || 'Something went wrong';
    return throwError(() => new Error(message));
  }

  signIn(data: LoginReq): Observable<LoginRes> {
    return this._http.post<LoginRes>(AuthEndPoint.SIGNIN, data).pipe(
      map((res) => this._authAdaptor.adapt(res)),
      catchError((err) => this._handleError(err)),
    );
  }

  verifyEmail(data: RegisterEmailReq): Observable<RegisterEmailRes> {
    return this._http.post<RegisterEmailRes>(AuthEndPoint.SEND_EMAIL_VERIFICATION, data).pipe(
      map((res) => this._authAdaptor.adaptRegisterEmailRes(res)),
      catchError((err) => this._handleError(err)),
    );
  }

  confirmEmail(data: ConfirmOTPReq): Observable<ConfirmOTPRes> {
    return this._http.post<ConfirmOTPRes>(AuthEndPoint.CONFIRM_OTP, data).pipe(
      map((res) => this._authAdaptor.adaptConfirmOTPRes(res)),
      catchError((err) => this._handleError(err)),
    );
  }

  register(data: RegisterFormReq): Observable<RegisterFormRes> {
    return this._http.post<RegisterFormRes>(AuthEndPoint.REGISTER, data).pipe(
      map((res) => this._authAdaptor.adaptRegisterFormRes(res)),
      catchError((err) => this._handleError(err)),
    );
  }

  changePassword(data: ChangePasswordReq): Observable<ChangePasswordRes> {
    return this._http.patch<ChangePasswordRes>(AuthEndPoint.CHANGE_PASSWORD, data).pipe(
      map((res) => this._authAdaptor.adaptChangePasswordRes(res)),
      catchError((err) => this._handleError(err)),
    );
  }

  deleteAccount(): Observable<{ message: string }> {
    return this._http.delete<{ message: string }>(AuthEndPoint.DELETEACCOUNT).pipe(
      map((res) => this._authAdaptor.adaptDeleteAccountRes(res)),
      catchError((err) => this._handleError(err)),
    );
  }

  editProfile(data: EditProfileReq): Observable<EditProfileRes> {
    return this._http.put<EditProfileRes>(AuthEndPoint.EDITPROFILE, data).pipe(
      map((res) => this._authAdaptor.adaptEditProfileRes(res)),
      catchError((err) => this._handleError(err)),
    );
  }

  forgetPassword(data: ForgetPasswordReq): Observable<ForgetPasswordRes> {
    return this._http.post<ForgetPasswordRes>(AuthEndPoint.FORGOT_PASSWORD, data).pipe(
      map((res) => this._authAdaptor.adaptForgetPasswordRes(res)),
      catchError((err) => this._handleError(err)),
    );
  }

  VerifyOTP(data: VerifyOTPReq): Observable<VerifyOTPRes> {
    return this._http.post<VerifyOTPRes>(AuthEndPoint.VERIFY, data).pipe(
      map((res) => this._authAdaptor.adaptVerifyOTPRes(res)),
      catchError((err) => this._handleError(err)),
    );
  }

  resetPassword(data: ResetPasswordReq): Observable<ResetPasswordRes> {
    return this._http.put<ResetPasswordRes>(AuthEndPoint.RESETPASSWORD, data).pipe(
      map((res) => this._authAdaptor.adaptResetPasswordRes(res)),
      catchError((err) => this._handleError(err)),
    );
  }

  logOut(data: LogOutReq): Observable<LogOutRes> {
    return this._http.post<LogOutRes>(AuthEndPoint.LOGOUT, data).pipe(
      map((res) => this._authAdaptor.adaptLogOutRes(res)),
      catchError((err) => this._handleError(err)),
    );
  }

  getLoggedUserInfo(): Observable<GetLoggedUserInfoRes> {
    return this._http.get<GetLoggedUserInfoRes>(AuthEndPoint.GETLOGGEDUSERINFO).pipe(
      map((res) => this._authAdaptor.adaptGetLoggedUserInfoRes(res)),
      catchError((err) => this._handleError(err)),
    );
  }
}
