import { Product } from 'pages/login/models';

export const saveDataStorage = (products: Product[]) => {
  localStorage.setItem('@products', JSON.stringify(products));
};
