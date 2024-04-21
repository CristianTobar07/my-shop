import { Routes } from '@angular/router';
import { MainPageHomeComponent } from './pages/home/components/main-page-home/main-page-home.component';
import { MainPageLoginComponent } from './pages/login/components/main-page-login/main-pagelogin.component';
import { MainPageRegisterComponent } from './pages/register/components/main-page-register/main-page-register.component';

export const routes: Routes = [
  { path: '', component: MainPageHomeComponent },
  { path: 'login', component: MainPageLoginComponent },
  { path: 'register', component: MainPageRegisterComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('pages/profiles/admin/admin.routes').then((route) => route.routes),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('pages/profiles/buyer/buyer.routes').then((route) => route.routes),
  },
  { path: '**', redirectTo: '' },
];
