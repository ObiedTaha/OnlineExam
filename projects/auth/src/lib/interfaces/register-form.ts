import { User } from './user';

export interface RegisterFormReq {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}

export interface RegisterFormRes {
  message: string;
  user: User;
}