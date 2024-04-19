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
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}
