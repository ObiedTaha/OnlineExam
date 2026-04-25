import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthAdaptor } from './adaptor/auth-adaptor';
import { AuthAPI } from './base/AuthApi';
import { AuthEndPoint } from './enums/AuthEndPoint';
import { LoginReq, LoginRes } from './interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class Authservice implements AuthAPI {
  private _http = inject(HttpClient);
  private _authAdaptor = inject(AuthAdaptor);
  //login
  signIn(data: LoginReq): Observable<LoginRes> {
    return this._http.post<LoginRes>(AuthEndPoint.SIGNIN, data).pipe(
      map((res: LoginRes) => this._authAdaptor.adapt(res)),
      catchError(err => of(err)),
    );
  }

  // // register
  // register(data: any): Observable<any> {
  //   return;
  // }
  // // logout
  // logout(): Observable<any> {
  //   return;
  // }

  // forgetPassword(data: any): Observable<any> {
  //   return;
  // }
}
