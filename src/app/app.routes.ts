import { email } from '@angular/forms/signals';
import { Routes } from '@angular/router';
import { Login } from '../app/feature/auth/login/login';
import { Component } from '@angular/core';
import { Register } from './feature/auth/register/register';
import { title } from 'process';

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
        path: '',
        loadComponent: () =>
          import('../app/feature/auth/register/component/presonal-info/presonal-info').then(
            (c) => c.PresonalInfo,
          ),
        title: 'Exam - personalInfo',
      },
    ],
  },
];
