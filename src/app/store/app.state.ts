import { ActionReducerMap } from '@ngrx/store';

import { loadingReducer } from './reducers/loading.reducer';
import {
  InitialStateErrorMessage,
  InitialStateLoadinComponent,
  InitialStateProductsComponent,
} from './models';
import { productsReducer } from './reducers/products.reducer';
import { errorMessageRecuder } from './reducers/error-message.reducer';

export interface AppState {
  loading: InitialStateLoadinComponent;
  products: InitialStateProductsComponent;
  errorMessagee: InitialStateErrorMessage;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  loading: loadingReducer,
  errorMessagee: errorMessageRecuder,
  products: productsReducer,
};
