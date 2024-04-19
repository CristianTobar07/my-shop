import { createAction, props } from '@ngrx/store';
import { Product } from 'pages/login/models';

export const setProducts = createAction(
  '[Data SetProducts] setProducts',
  props<{ data: Product[] }>()
);

export const setFilterProducts = createAction(
  '[Data SetFilterProducts] setFilterProducts',
  props<{ valueName: string }>()
);

export const showModalProduct = createAction(
  '[Data ShowModalProduct] showModalProduct',
  props<{ value: boolean }>()
);

export const addProduct = createAction(
  '[Data addProduct] addProduct',
  props<{ product: Product }>()
);
