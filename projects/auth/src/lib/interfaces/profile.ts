import { User } from './user';

export interface GetLoggedUserInfoRes {
  message: string;
  user: User;
}