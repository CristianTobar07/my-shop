import { createAction, props } from '@ngrx/store';
import { Product } from 'pages/login/models';


export const setCartShopData = createAction(
  '[Data SetCartShopData] setCartShopData',
  props<{ data: Product[] }>()
);

export const setAddProductInCartShop = createAction(
  '[Data SetAddProductInCartShop] setAddProductInCartShop',
  props<{ product: Product }>()
);
