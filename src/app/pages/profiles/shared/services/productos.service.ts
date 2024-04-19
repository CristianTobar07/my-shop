import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'pages/login/models';
import { Subject } from 'rxjs';
import { BASE_URL } from 'shared/constants';
import { setIsLoading } from 'store/actions/loading.actions';
import { setProducts } from 'store/actions/products.action';
import { AppState } from 'store/app.state';
import { dataProducts } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private _getAllProducts$ = new Subject<boolean>();
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getAllProducts() {
    this.store.dispatch(setIsLoading({ value: true }));
    this.http
      .get<Product[]>(BASE_URL + 'products/category/electronics')
      .subscribe({
        next: (response) => {
          const products = localStorage.getItem('@products');

          this.store.dispatch(
            setProducts({ data: products ? JSON.parse(products) : [] })
          );
          this.store.dispatch(setIsLoading({ value: false }));
        },
        error: (error) => {
          console.log(error.error.code);

          this.store.dispatch(setIsLoading({ value: false }));
        },
      });
  }
}
