import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'pages/login/models';
import { CardsProductsComponent } from 'pages/profiles/shared/cards-products/cards-products.component';
import { Subscription } from 'rxjs';
import {
  selectProduct,
  setIsEditNewProduct,
  showModalProduct,
} from 'store/actions/products.action';
import { AppState } from 'store/app.state';
import { selecProducts, selectCartShop } from 'store/selectors';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
  standalone: true,
  imports: [NgFor, CardsProductsComponent],
})
export class ListProductComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  isInCartShop: boolean = false;

  suscription: Subscription[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    const suscription1 = this.store.select(selecProducts).subscribe((data) => {
      this.products = data.products;
    });
    const suscription2 = this.store.select(selectCartShop).subscribe((data) => {
      this.isInCartShop = data.isInCartShop;
    });
    this.suscription.push(suscription1);
    this.suscription.push(suscription2);
  }

  addproduct() {
    this.store.dispatch(showModalProduct({ value: true }));
    this.store.dispatch(selectProduct({ product: undefined }));
    this.store.dispatch(setIsEditNewProduct({ isEdit: false, isNew: true }));
  }

  ngOnDestroy(): void {
    this.suscription.forEach((suscription) => suscription.unsubscribe());
  }
}
