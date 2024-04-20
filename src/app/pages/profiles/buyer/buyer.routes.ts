import { Routes } from '@angular/router';
import { MainPageUserComponent } from './components/main-page-user/main-page-user.component';
import { ListProductComponent } from './components/body-user/list-product/list-product.component';
import { CartShopComponent } from './components/body-user/cart-shop/cart-shop.component';
import { ShoppingHistoryComponent } from './components/body-user/shopping-history/shopping-history.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageUserComponent,
    children: [
      { path: 'products', component: ListProductComponent },
      { path: 'cart-shop', component: CartShopComponent },
      {
        path: 'shopping-history',
        component: ShoppingHistoryComponent,
      },
    ],
  },
];
