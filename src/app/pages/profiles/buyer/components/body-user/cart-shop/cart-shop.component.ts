import { DecimalPipe, NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsToPayment } from 'pages/login/models';
import { Subscription } from 'rxjs';
import { TitlesComponent } from 'shared/components/titles/titles.component';
import { setDeleteProductInCartShop } from 'store/actions/cart-shop';
import { AppState } from 'store/app.state';
import { selectCartShop } from 'store/selectors';

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.css'],
  standalone: true,
  imports: [NgFor, TitlesComponent, DecimalPipe],
})
export class CartShopComponent implements OnInit, OnDestroy {
  dataCartShop: ProductsToPayment[] = [];
  totalPrice: number = 1;

  suscription: Subscription[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    const suscription = this.store.select(selectCartShop).subscribe((data) => {
      this.dataCartShop = data.productsCartShop.map((product) => {
        this.totalPrice = this.totalPrice + parseInt(product.price);
        return { ...product, countPayment: 1 };
      });
    });
    this.suscription.push(suscription);
  }

  handlecount(product: ProductsToPayment, id: number) {
    if (product.countPayment === 1 && id < 0) return;

    const newDataCartShop = this.dataCartShop.map((item) => {
      if (item.id === product.id) {
        const newValue = id > 0 ? item.countPayment + 1 : item.countPayment - 1;
        return { ...item, countPayment: newValue };
      }
      return { ...item };
    });

    this.dataCartShop = newDataCartShop;

    this.handleTotalPrice();
  }

  handleTotalPrice() {
    this.totalPrice = 0;
    this.dataCartShop.forEach((product) => {
      this.totalPrice += parseInt(product.price) * product.countPayment;
    });
  }

  handleDeleteCartShop(product: ProductsToPayment) {
    this.store.dispatch(setDeleteProductInCartShop({ product }));
    this.handleTotalPrice();
  }

  ngOnDestroy(): void {
    this.suscription.forEach((suscription) => suscription.unsubscribe);
  }
}
