import { createReducer, on } from '@ngrx/store';
import { setIsLoading } from '../actions/loading.actions';
import { InitialStateProductsComponent } from '../models';
import { setProducts, showModalProduct } from 'store/actions/products.action';

export const initialStateLoading: InitialStateProductsComponent = {
  products: [],
  isModalProduct: false,
};

export const productsReducer = createReducer(
  initialStateLoading,
  on(setProducts, (state, { data }) => {
    return {
      ...state,
      products: data,
    };
  }),
  on(showModalProduct, (state, { value }) => {
    return {
      ...state,
      isModalProduct: value,
    };
  })
);
