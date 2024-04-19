export interface ErrorFormRegister {
  isInValidForm: boolean;
  isRegister: boolean;
}

export interface FormRegister {
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
}

export interface RegisterRequest extends FormRegister {
  address: Address;
}

export interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: Geolocation;
}

export interface Geolocation {
  lat: string;
  long: string;
}

export interface Name {
  firstname: string;
  lastname: string;
}
