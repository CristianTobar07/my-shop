import { Routes } from '@angular/router';
import { MainPageAdminComponent } from './componentes/main-page-admin/main-page-admin.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageAdminComponent,
  },
  { path: '**', redirectTo: '' },
];
