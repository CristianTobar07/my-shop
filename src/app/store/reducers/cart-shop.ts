import { createReducer, on } from '@ngrx/store';
import { InitialStateCartShopComponent } from '../models';
import {
  setAddProductInCartShop,
  setBuyProducts,
  setCartShopData,
  setDeleteProductInCartShop,
  setPurchaseData,
} from 'store/actions/cart-shop';
import { saveDataStorage } from 'shared/middleware/store-data.middleware';

export const initialStateCartShop: InitialStateCartShopComponent = {
  productsCartShop: [],
  purchaseData: [],
};

export const cartShopReducer = createReducer(
  initialStateCartShop,

  on(setCartShopData, (state, { data }) => {
    return {
      ...state,
      productsCartShop: data,
    };
  }),
  on(setAddProductInCartShop, (state, { product }) => {
    const newProducts = [...state.productsCartShop];
    newProducts.push(product);
    saveDataStorage('cartShopData', newProducts);

    return {
      ...state,
      productsCartShop: newProducts,
    };
  }),
  on(setDeleteProductInCartShop, (state, { product }) => {
    const newProducts = [...state.productsCartShop];
    const filter = newProducts.filter((item) => item.id !== product.id);
    saveDataStorage('cartShopData', filter);

    return {
      ...state,
      productsCartShop: filter,
    };
  }),
  // Buy product
  on(setBuyProducts, (state, { product }) => {
    const newDataPurchase = [...state.purchaseData, ...product];

    saveDataStorage('cartShopData', []);
    saveDataStorage('shoppingHistory', newDataPurchase);

    return {
      ...state,
      productsCartShop: [],
      purchaseData: newDataPurchase,
    };
  }),
  // Purchase data
  on(setPurchaseData, (state, { purchaseData }) => {
    return {
      ...state,
      purchaseData,
    };
  })
);
