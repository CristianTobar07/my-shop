import { Product } from 'pages/login/models';

export const saveDataStorage = (keyName: string,products: Product[]) => {
  localStorage.setItem(`@${keyName}`, JSON.stringify(products));
};
