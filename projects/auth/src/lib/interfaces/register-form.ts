import { User } from './user';

export interface RegisterFormReq {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  phone: string;
}

export interface RegisterFormRes {
  status: boolean;

  message: string;
  user: User;
}