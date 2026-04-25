import { Observable } from 'rxjs';
import { LoginReq, LoginRes } from '../interfaces/login';

export abstract class AuthAPI {
  abstract signIn(data: LoginReq): Observable<LoginRes>;
  // abstract register(data: any): Observable<any>;
  // abstract changePassword(data: any): Observable<any>;
  // abstract deleteAccount(data: any): Observable<any>;
  // abstract editProfile(data: any): Observable<any>;
  // abstract forgetPassword(data: any): Observable<any>;
  // abstract VerifyOTP(data: any): Observable<any>;
  // abstract resetPassword(data: any): Observable<any>;
  // abstract logOut(data: any): Observable<any>;
  // abstract getLoggedUserInfo(data: any): Observable<any>;

}
