import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setCartShopData } from 'store/actions/cart-shop';
import { AppState } from 'store/app.state';

@Injectable({
  providedIn: 'root',
})
export class CartShopService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  public getDataCartShop() {
    const productsCartShop = localStorage.getItem('@cartShopData');
    this.store.dispatch(
      setCartShopData({
        data: productsCartShop ? JSON.parse(productsCartShop) : [],
      })
    );
  }
}
