import { createReducer, on } from '@ngrx/store';
import { setIsLoading } from '../actions/loading.actions';
import { InitialStateProductsComponent } from '../models';
import {
  addProduct,
  setFilterProducts,
  setProducts,
  showModalProduct,
} from 'store/actions/products.action';
import { Product } from 'pages/login/models';

export const initialStateLoading: InitialStateProductsComponent = {
  products: [],
  productRef: [],
  isModalProduct: false,
};

export const productsReducer = createReducer(
  initialStateLoading,
  on(setProducts, (state, { data }) => {
    return {
      ...state,
      products: data,
      productRef: data,
    };
  }),
  on(setFilterProducts, (state, { valueName }) => {
    const AllProducts = [...state.productRef];

    const newAllProduct: Product[] = [];

    AllProducts.forEach((product) => {
      if (product.title.toLowerCase().includes(valueName.toLowerCase())) {
        newAllProduct.push(product);
      }
    });

    return {
      ...state,
      products: valueName.length > 0 ? newAllProduct : state.productRef,
    };
  }),
  on(showModalProduct, (state, { value }) => {
    return {
      ...state,
      isModalProduct: value,
    };
  }),
  on(addProduct, (state, { product }) => {
    const productRef = [...state.products];

    productRef.push(product);

    return {
      ...state,
      products: productRef,
    };
  })
);
