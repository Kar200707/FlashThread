import { Routes } from '@angular/router';
import { loginRegGuard } from "./guards/login-reg.guard";
import { mainPageGuard } from "./guards/main-page.guard";

export const routes: Routes = [
  {
    path: '',
    redirectTo: innerWidth > 940 ? 'messenger' : 'chats-menu',
    pathMatch: 'full'
  },
  {
    title: 'FlashThread Chats',
    canActivate: [mainPageGuard],
    loadComponent: () => import('./pages/chats-menu/chats-menu.component').then(x => x.ChatsMenuComponent),
    path: 'chats-menu',
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
      },
      {
        canActivate: [mainPageGuard],
        loadComponent: () => import('./components/flash-ai/flash-ai.component').then(x => x.FlashAiComponent),
        path: 'ai',
        title: 'Flash Ai'
      },
      {
        canActivate: [mainPageGuard],
        loadComponent: () => import('./pages/profile-edit/profile-edit.component').then(x => x.ProfileEditComponent),
        path: 'profile',
        title: 'Profile'
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
