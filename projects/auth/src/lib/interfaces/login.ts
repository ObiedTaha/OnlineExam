import { User } from './user';

export interface LoginReq {
  username: string;
  password: string;
}

export interface LoginRes {
  message: string;
  token: string;
  user: User;
}