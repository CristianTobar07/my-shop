export interface ErrorFormLogin {
  isInValidForm: boolean;
  isLogin: boolean;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
  count: string;
}

export interface ProductsToPayment extends Product {
  countPayment: number;
}
