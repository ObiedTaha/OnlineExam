import { User } from './user';

export interface GetLoggedUserInfoRes {
  status: boolean;
  message: string;
  user: User;
}