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
import { selecProducts } from 'store/selectors';

@Component({
  selector: 'app-body-admin',
  templateUrl: './body-admin.component.html',
  styleUrls: ['./body-admin.component.css'],
  standalone: true,
  imports: [NgFor, CardsProductsComponent],
})
export class BodyAdminComponent implements OnInit, OnDestroy {
  products: Product[] = [];

  suscription: Subscription[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    const suscription = this.store.select(selecProducts).subscribe((data) => {
      this.products = data.products;
    });
    this.suscription.push(suscription);
  }

  ngOnDestroy(): void {
    this.suscription.forEach((suscription) => suscription.unsubscribe());
  }

  addproduct() {
    this.store.dispatch(showModalProduct({ value: true }));
    this.store.dispatch(selectProduct({ product: undefined }));
    this.store.dispatch(setIsEditNewProduct({ isEdit: false, isNew: true }));
  }
}
