// Loading component

import { Product } from 'pages/login/models';

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
}
