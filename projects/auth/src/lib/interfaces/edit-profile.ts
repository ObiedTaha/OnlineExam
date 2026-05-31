import { User } from './user';

export interface EditProfileReq {
  username?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  profilePhoto?: string;
}

export interface EditProfileRes {
  status: boolean;
  message: string;
  user: User;
}