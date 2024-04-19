import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import {
  InitialStateLoadinComponent,
  InitialStateProductsComponent,
} from '../models';

const selectLoadingComponent = (state: AppState) => state.loading;

export const selectLoading = createSelector(
  selectLoadingComponent,
  (state: InitialStateLoadinComponent) => state
);

// Products

const selectProductsComponent = (state: AppState) => state.products;

export const selecProducts = createSelector(
  selectProductsComponent,
  (state: InitialStateProductsComponent) => state
);
