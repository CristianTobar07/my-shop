// Loading component

import { Product } from 'pages/login/models';

export interface InitialStateLoadinComponent {
  isLoading: boolean;
}

// Prooducts

export interface InitialStateProductsComponent {
  products: Product[];
}
