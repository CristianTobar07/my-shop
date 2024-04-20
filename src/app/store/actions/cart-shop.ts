import { createAction, props } from '@ngrx/store';
import { Product, ProductsToPayment } from 'pages/login/models';

export const setCartShopData = createAction(
  '[Data SetCartShopData] setCartShopData',
  props<{ data: Product[] }>()
);

// Add product cart shop

export const setAddProductInCartShop = createAction(
  '[Data SetAddProductInCartShop] setAddProductInCartShop',
  props<{ product: Product }>()
);

// Delete product in cart shop

export const setDeleteProductInCartShop = createAction(
  '[Data setDeleteProductInCartShop] setDeleteProductInCartShop',
  props<{ product: ProductsToPayment }>()
);
