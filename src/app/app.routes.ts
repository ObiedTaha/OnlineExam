import { Routes } from '@angular/router';
import { Login } from '../app/feature/auth/login/login';
import { Component } from '@angular/core';
import { Register } from './feature/auth/register/register';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('../app/feature/auth/login/login').then((c) => c.Login),
  },
  {
    path: 'signUp',
    component: Register,
    title: 'SignUp',
  },
];
