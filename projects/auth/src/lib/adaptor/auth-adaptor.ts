import { Injectable } from '@angular/core';
import { Adaptor } from '../interfaces/adapt';
import { LoginRes } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthAdaptor implements Adaptor {
  // data ... response from backend
  adapt(data: LoginRes): LoginRes {
    return {
      token: data.token,
      user: {
        username: data.user.username,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        email: data.user.email,
        phone: data.user.phone,
        role: data.user.role,
        id: data.user.id,
        emailVerified: data.user.emailVerified,
        phoneVerified: data.user.phoneVerified,
        profilePhoto: data.user.profilePhoto,
        createdAt: data.user.createdAt,
        updatedAt: data.user.updatedAt,
      },
    };
  }
}
