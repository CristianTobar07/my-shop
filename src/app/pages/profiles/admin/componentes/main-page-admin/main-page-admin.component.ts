import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { BodyAdminComponent } from '../body-admin/body-admin.component';
import { ProductosService } from 'pages/profiles/shared/services/productos.service';
import { LoadingComponent } from 'shared/components/loading/loading.component';
import { selecProducts, selectLoading } from 'store/selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'store/app.state';
import { Subscription } from 'rxjs';
import { ProductComponent } from 'pages/profiles/shared/product/product.component';
import { NgIf } from '@angular/common';
import { Product } from 'pages/login/models';

@Component({
  selector: 'app-main-page-admin',
  templateUrl: './main-page-admin.component.html',
  styleUrls: ['./main-page-admin.component.css'],
  standalone: true,
  imports: [
    NgIf,
    HeaderAdminComponent,
    BodyAdminComponent,
    LoadingComponent,
    ProductComponent,
  ],
})
export class MainPageAdminComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  isShowModalProduct: boolean = false;
  product?: Product;
  isEdit: boolean = false;

  suscription: Subscription[] = [];

  constructor(
    private productsservice: ProductosService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.productsservice.getAllProducts();

    const suscription1 = this.store.select(selectLoading).subscribe((data) => {
      this.isLoading = data.isLoading;
    });

    const suscription2 = this.store.select(selecProducts).subscribe((data) => {
      this.isShowModalProduct = data.isModalProduct;
      this.product = data.productSelected;
      this.isEdit = data.isEdit;
    });

    this.suscription.push(suscription1);
    this.suscription.push(suscription2);
  }

  ngOnDestroy(): void {
    this.suscription.forEach((suscription) => {
      suscription.unsubscribe();
    });
  }
}
