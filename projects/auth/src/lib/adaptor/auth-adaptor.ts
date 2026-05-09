import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adapt';
import { LoginRes } from '../interfaces/login';
import { RegisterEmailRes } from '../interfaces/register-email';
import { RegisterFormRes } from '../interfaces/register-form';
import { ConfirmOTPRes } from '../interfaces/confirm-otp';
import { ChangePasswordRes } from '../interfaces/change-password';
import { EditProfileRes } from '../interfaces/edit-profile';
import { ForgetPasswordRes } from '../interfaces/forget-password';
import { VerifyOTPRes } from '../interfaces/verify-otp';
import { ResetPasswordRes } from '../interfaces/reset-password';
import { LogOutRes } from '../interfaces/log-out';
import { GetLoggedUserInfoRes } from '../interfaces/profile';

@Injectable({
  providedIn: 'root',
})
export class AuthAdaptor implements Adaptor {

  adapt(data: LoginRes): LoginRes {
    return {
      message: data.message,
      token: data.token,
      user: {
        id: data.user.id,
        username: data.user.username,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
        phone: data.user.phone,
        role: data.user.role,
        emailVerified: data.user.emailVerified,
        phoneVerified: data.user.phoneVerified,
        profilePhoto: data.user.profilePhoto,
        createdAt: data.user.createdAt,
        updatedAt: data.user.updatedAt,
      },
    };
  }

  adaptRegisterEmailRes(data: RegisterEmailRes): RegisterEmailRes {
    return {
      message: data.message,
    };
  }

  adaptConfirmOTPRes(data: ConfirmOTPRes): ConfirmOTPRes {
    return {
      status: data.status,
      code: data.code,
      message: data.message,
    };
  }

  adaptRegisterFormRes(data: RegisterFormRes): RegisterFormRes {
    return {
      message: data.message,
      user: {
        id: data.user.id,
        username: data.user.username,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
        phone: data.user.phone,
        role: data.user.role,
        emailVerified: data.user.emailVerified,
        phoneVerified: data.user.phoneVerified,
        profilePhoto: data.user.profilePhoto,
        createdAt: data.user.createdAt,
        updatedAt: data.user.updatedAt,
      },
    };
  }

  adaptChangePasswordRes(data: ChangePasswordRes): ChangePasswordRes {
    return {
      message: data.message,
      token: data.token,
    };
  }

  adaptDeleteAccountRes(data: { message: string }): { message: string } {
    return {
      message: data.message,
    };
  }

  adaptEditProfileRes(data: EditProfileRes): EditProfileRes {
    return {
      message: data.message,
      user: {
        id: data.user.id,
        username: data.user.username,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
        phone: data.user.phone,
        role: data.user.role,
        emailVerified: data.user.emailVerified,
        phoneVerified: data.user.phoneVerified,
        profilePhoto: data.user.profilePhoto,
        createdAt: data.user.createdAt,
        updatedAt: data.user.updatedAt,
      },
    };
  }

  adaptForgetPasswordRes(data: ForgetPasswordRes): ForgetPasswordRes {
    return {
      message: data.message,
      resetCode: data.resetCode,
    };
  }

  adaptVerifyOTPRes(data: VerifyOTPRes): VerifyOTPRes {
    return {
      status: data.status,
    };
  }

  adaptResetPasswordRes(data: ResetPasswordRes): ResetPasswordRes {
    return {
      message: data.message,
      token: data.token,
    };
  }

  adaptLogOutRes(data: LogOutRes): LogOutRes {
    return {
      message: data.message,
    };
  }

  adaptGetLoggedUserInfoRes(data: GetLoggedUserInfoRes): GetLoggedUserInfoRes {
    return {
      message: data.message,
      user: {
        id: data.user.id,
        username: data.user.username,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
        phone: data.user.phone,
        role: data.user.role,
        emailVerified: data.user.emailVerified,
        phoneVerified: data.user.phoneVerified,
        profilePhoto: data.user.profilePhoto,
        createdAt: data.user.createdAt,
        updatedAt: data.user.updatedAt,
      },
    };
  }
}