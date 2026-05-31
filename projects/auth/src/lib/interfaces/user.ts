export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role?: string;
  emailVerified?: boolean;
  phoneVerified?: boolean;
  profilePhoto?: string;
  createdAt?: string;
  updatedAt?: string;
}
