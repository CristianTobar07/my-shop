import { Routes } from '@angular/router';
import { MainPageHomeComponent } from './pages/home/components/main-page-home/main-page-home.component';
import { MainPageLoginComponent } from './pages/login/components/main-page-login/main-pagelogin.component';

export const routes: Routes = [
  { path: '', component: MainPageHomeComponent },
  { path: 'login', component: MainPageLoginComponent },
  { path: '*', redirectTo: '' },
];
