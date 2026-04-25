export interface LoginReq {
  username: string;
  password: string;
}

export interface LoginRes {
  user: User;
  token: string;
}

export interface User {
  id: string
  username: string
  email: string
  phone: string
  firstName: string
  lastName: string
  profilePhoto: string
  emailVerified: boolean
  phoneVerified: boolean
  role: string
  createdAt: string
  updatedAt: string
}
