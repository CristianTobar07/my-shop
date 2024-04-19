import { createAction, props } from '@ngrx/store';
import { Product } from 'pages/login/models';

export const setProducts = createAction(
  '[Data SetProducts] setProducts',
  props<{ data: Product[] }>()
);
