import { Routes } from '@angular/router';
import { MainPageHomeComponent } from './pages/home/components/main-page-home/main-page-home.component';

export const routes: Routes = [
  { path: '', component: MainPageHomeComponent },
  { path: '*', redirectTo: '' },
];
