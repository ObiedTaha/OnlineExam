// this called dictionary pattern
export class AuthEndPoint {
  static readonly SIGNIN = `https://exam.elevateegy.com/api/v1/auth/signin`;
  static readonly REGISTER = `https://exam.elevateegy.com/api/v1/auth/signup`;
  static readonly CHANGE_PASSWORD = `https://exam.elevateegy.com/api/v1/auth/changePassword`;
  static readonly DELETEACCOUNT = `https://exam.elevateegy.com/api/v1/auth/deleteMe`;
  static readonly EDITPROFILE = `https://exam.elevateegy.com/api/v1/auth/editProfile`;
  static readonly FORGOT_PASSWORD = `https://exam.elevateegy.com/api/v1/auth/forgotPassword`;
  static readonly VERIFY = `https://exam.elevateegy.com/api/v1/auth/verifyResetCode`;
  static readonly RESETPASSWORD = `https://exam.elevateegy.com/api/v1/auth/resetPassword`;
  static readonly LOGOUT = `https://exam.elevateegy.com/api/v1/auth/logout`;
  static readonly GETLOGGEDUSERINFO = `https://exam.elevateegy.com/api/v1/auth/profileData`;
}
