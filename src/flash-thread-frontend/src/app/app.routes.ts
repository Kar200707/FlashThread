import { Routes } from '@angular/router';
import { loginRegGuard } from "./guards/login-reg.guard";
import { mainPageGuard } from "./guards/main-page.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'messenger',
    pathMatch: 'full'
  },
  {
    canActivate: [mainPageGuard],
    loadComponent: () => import('./main/main.component').then(x => x.MainComponent),
    path: 'messenger',
    children: [
      {
        canActivate: [mainPageGuard],
        loadComponent: () => import('./components/chat/chat.component').then(x => x.ChatComponent),
        path: 'chat/:id'
      }
    ],
  },
  {
    canActivate: [loginRegGuard],
    loadComponent: () => import('./pages/login/login.component').then(x => x.LoginComponent),
    path: 'login',
    title: 'Flash Thread Login',
  },
  {
    canActivate: [loginRegGuard],
    loadComponent: () => import('./pages/register/register.component').then(x => x.RegisterComponent),
    path: 'register',
    title: 'Flash Thread Register',
  }
];
