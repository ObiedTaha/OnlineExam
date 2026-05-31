export class AuthEndPoint {
  static readonly SIGNIN = `https://exam-app.elevate-bootcamp.cloud/api/auth/login`;
  static readonly SEND_EMAIL_VERIFICATION = `https://exam-app.elevate-bootcamp.cloud/api/auth/send-email-verification`;
  static readonly CONFIRM_OTP = `https://exam-app.elevate-bootcamp.cloud/api/auth/confirm-email-verification`;
  static readonly REGISTER = `https://exam-app.elevate-bootcamp.cloud/api/auth/register`;
  static readonly CHANGE_PASSWORD = `https://exam-app.elevate-bootcamp.cloud/api/auth/changePassword`;
  static readonly DELETEACCOUNT = `https://exam-app.elevate-bootcamp.cloud/api/auth/deleteMe`;
  static readonly EDITPROFILE = `https://exam-app.elevate-bootcamp.cloud/api/auth/editProfile`;
  static readonly FORGOT_PASSWORD = `https://exam-app.elevate-bootcamp.cloud/api/auth/forgotPassword`;
  static readonly VERIFY = `https://exam-app.elevate-bootcamp.cloud/api/auth/verifyResetCode`;
  static readonly RESETPASSWORD = `https://exam-app.elevate-bootcamp.cloud/api/auth/resetPassword`;
  static readonly LOGOUT = `https://exam-app.elevate-bootcamp.cloud/api/auth/logout`;
  static readonly GETLOGGEDUSERINFO = `https://exam-app.elevate-bootcamp.cloud/api/auth/profileData`;
}
