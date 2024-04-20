import { ActionReducerMap } from '@ngrx/store';

import { loadingReducer } from './reducers/loading.reducer';
import {
  InitialStateErrorMessage,
  InitialStateLoadinComponent,
  InitialStateProductsComponent,
  InitialStateCartShopComponent,
} from './models';
import { productsReducer } from './reducers/products.reducer';
import { errorMessageRecuder } from './reducers/error-message.reducer';
import { cartShopReducer } from './reducers/cart-shop';

export interface AppState {
  loading: InitialStateLoadinComponent;
  products: InitialStateProductsComponent;
  errorMessagee: InitialStateErrorMessage;
  cartShop: InitialStateCartShopComponent;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  loading: loadingReducer,
  errorMessagee: errorMessageRecuder,
  products: productsReducer,
  cartShop: cartShopReducer,
};
