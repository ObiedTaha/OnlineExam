import { User } from './user';

export interface LoginReq {
  username: string;
  password: string;
}

export interface LoginRes {
  status: boolean;

  message: string;
  token: string;
  user: User;
}