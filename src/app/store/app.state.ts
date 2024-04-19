import { ActionReducerMap } from '@ngrx/store';

import { loadingReducer } from './reducers/loading.reducer';
import {
  InitialStateLoadinComponent,
  InitialStateProductsComponent,
} from './models';
import { productsReducer } from './reducers/products.reducer';

export interface AppState {
  loading: InitialStateLoadinComponent;
  products: InitialStateProductsComponent;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  loading: loadingReducer,
  products: productsReducer,
};
