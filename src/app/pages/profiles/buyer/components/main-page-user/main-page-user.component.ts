import { Component, OnInit } from '@angular/core';
import { HeaderUserComponent } from '../header-user/header-user.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Product } from 'pages/login/models';
import { Subscription } from 'rxjs';
import { ProductosService } from 'pages/profiles/shared/services/productos.service';
import { Store } from '@ngrx/store';
import { AppState } from 'store/app.state';
import { selecProducts, selectCartShop, selectLoading } from 'store/selectors';
import { LoadingComponent } from 'shared/components/loading/loading.component';
import { NgIf } from '@angular/common';
import { ProductComponent } from 'pages/profiles/shared/product/product.component';
import { CartShopService } from '../../services/cart-shop.service';

@Component({
  selector: 'app-main-page-user',
  templateUrl: './main-page-user.component.html',
  styleUrls: ['./main-page-user.component.css'],
  standalone: true,
  imports: [
    NgIf,
    RouterOutlet,
    HeaderUserComponent,
    LoadingComponent,
    ProductComponent,
    RouterLink,
    RouterLinkActive,
  ],
})
export class MainPageUserComponent implements OnInit {
  isLoading: boolean = false;
  isShowModalProduct: boolean = false;
  product?: Product;
  isEdit: boolean = false;
  totalProductInCartShop: number = 0;
  totalProductInPurchase: number = 0;

  suscription: Subscription[] = [];

  constructor(
    private productsservice: ProductosService,
    private cartshopservice: CartShopService,
    private store: Store<AppState>
  ) {
    const suscription3 = this.store.select(selectCartShop).subscribe((data) => {
      this.totalProductInCartShop = data.productsCartShop.length;
      this.totalProductInPurchase = data.productsCartShop.length;

      console.log({ length: data.purchaseData.length });
    });

    this.suscription.push(suscription3);
  }

  ngOnInit() {
    this.productsservice.getAllProducts();
    this.cartshopservice.getDataCartShop();
    this.cartshopservice.getDataPurchase();

    const suscription1 = this.store.select(selectLoading).subscribe((data) => {
      this.isLoading = data.isLoading;
    });

    const suscription2 = this.store.select(selecProducts).subscribe((data) => {
      this.isShowModalProduct = data.isModalProduct;
      this.product = data.productSelected;
      this.isEdit = data.isEdit;
    });

    const suscription3 = this.store.select(selectCartShop).subscribe((data) => {
      this.totalProductInCartShop = data.productsCartShop.length;
      this.totalProductInPurchase = data.purchaseData.length;
    });

    this.suscription.push(suscription1);
    this.suscription.push(suscription2);
    this.suscription.push(suscription3);
  }
}
