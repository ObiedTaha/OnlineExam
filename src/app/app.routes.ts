import { ResetPassword } from './feature/auth/forgetpassword/forget-password/reset-password/reset-password';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    loadComponent: () => import('../app/feature/auth/login/login').then((c) => c.Login),
    title: 'Exam - SignIn ',
  },
  {
    path: 'auth/signUp',
    loadComponent: () => import('../app/feature/auth/register/register').then((c) => c.Register),
    title: 'Exam - SignUp ',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../app/feature/auth/register/component/email/email').then((c) => c.Email),
        title: 'Exam',
      },
      {
      path: 'verify',
        loadComponent: () =>
          import('../app/feature/auth/register/component/verify-otp/verify-otp').then(
            (c) => c.VerifyOTP,
          ),
        title: 'Exam - Verify',
      },
      {
        path: 'personalInfo',
        loadComponent: () =>
          import('../app/feature/auth/register/component/presonal-info/presonal-info').then(
            (c) => c.PresonalInfo,
          ),
        title: 'Exam - personalInfo',
      },
      {
        path: 'passwords',
        loadComponent: () =>
          import('../app/feature/auth/register/component/passwords/passwords').then(
            (c) => c.Passwords,
          ),
        title: 'Exam - passwords',
      },
      {
        path: 'forgotPassword',
        loadComponent: () =>
          import('../app/feature/auth/forgetpassword/forget-password/forget-password').then(
            (c) => c.ForgetPassword,
          ),
        title: 'Exam - ForgotPassword',
      },
      {
        path: 'resetPassword',
        loadComponent: () =>
          import('../app/feature/auth/forgetpassword/forget-password/reset-password/reset-password').then(
            (c) => c.ResetPassword,
          ),
        title: 'Exam - ResetPassword',
      },
      {
        path: 'newPassword',
        loadComponent: () =>
          import('../app/feature/auth/forgetpassword/forget-password/new-password/new-password').then(
            (c) => c.NewPassword,
          ),
        title: 'Exam - NewPassword',
      },
    ],
  },
];
