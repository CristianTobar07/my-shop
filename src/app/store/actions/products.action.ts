import { createAction, props } from '@ngrx/store';
import { Product } from 'pages/login/models';

// Get data product
export const setProducts = createAction(
  '[Data SetProducts] setProducts',
  props<{ data: Product[] }>()
);

// Flter prodcurt

export const setFilterProducts = createAction(
  '[Data SetFilterProducts] setFilterProducts',
  props<{ valueName: string }>()
);

// Show modal add product

export const showModalProduct = createAction(
  '[Data ShowModalProduct] showModalProduct',
  props<{ value: boolean }>()
);

// Add product

export const addProduct = createAction(
  '[Data addProduct] addProduct',
  props<{ product: Product }>()
);

// Select product for edit or see

export const selectProduct = createAction(
  '[Data SelectProduct] selectProduct',
  props<{ product?: Product }>()
);

// Delete product

export const deleteProduct = createAction(
  '[Data DeleteProduct] deleteProduct',
  props<{ id: number }>()
);

//Edit product

export const setIsEditNewProduct = createAction(
  '[Data setIdEditProduct] setIdEditProduct',
  props<{ isEdit: boolean; isNew: boolean }>()
);

export const editProduct = createAction(
  '[Data EditProduct] editProduct',
  props<{ product: Product }>()
);
