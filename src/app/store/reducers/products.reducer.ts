import { createReducer, on } from '@ngrx/store';
import { setIsLoading } from '../actions/loading.actions';
import { InitialStateProductsComponent } from '../models';
import {
  addProduct,
  deleteProduct,
  editProduct,
  selectProduct,
  setFilterProducts,
  setIsEditNewProduct,
  setProducts,
  showModalProduct,
} from 'store/actions/products.action';
import { Product } from 'pages/login/models';
import { saveDataStorage } from 'shared/middleware/store-data.middleware';

export const initialStateLoading: InitialStateProductsComponent = {
  products: [],
  productRef: [],
  isModalProduct: false,
  productSelected: undefined,
  isEdit: false,
  isNew: false,
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
  // Add product in DB
  on(addProduct, (state, { product }) => {
    const productRef = [...state.products];

    productRef.push({ ...product, id: state.products.length + 1 });

    saveDataStorage('products', productRef);

    return {
      ...state,
      products: productRef,
    };
  }),

  // Select one product for see or edit informacion
  on(selectProduct, (state, { product }) => {
    return {
      ...state,
      productSelected: product,
    };
  }),

  // set when the action is edit produc or new product
  on(setIsEditNewProduct, (state, { isEdit, isNew }) => {
    return {
      ...state,
      isEdit,
      isNew,
    };
  }),

  on(editProduct, (state, { product }) => {
    const newProduct = state.products.map((item) => {
      if (item.id === product.id) {
        return { ...product };
      }
      return { ...item };
    });

    return {
      ...state,
      products: newProduct,
    };
  }),

  // Delete product
  on(deleteProduct, (state, { id }) => {
    const newProducts = state.products.filter((product) => product.id !== id);
    saveDataStorage('products', newProducts);
    return {
      ...state,
      products: newProducts,
    };
  })
);
