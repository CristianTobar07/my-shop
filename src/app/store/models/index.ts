// Loading component

import { Product, ProductsToPayment } from 'pages/login/models';

export interface InitialStateLoadinComponent {
  isLoading: boolean;
}

// Error message

export interface InitialStateErrorMessage {
  isError: boolean;
  message: string;
  good: boolean;
}

// Prooducts

export interface InitialStateProductsComponent {
  products: Product[];
  productRef: Product[];
  isModalProduct: boolean;
  productSelected?: Product;
  isEdit: boolean;
  isNew: boolean;
}

// Cart Shop

export interface InitialStateCartShopComponent {
  productsCartShop: Product[];
  purchaseData: ProductsToPayment[];
}
