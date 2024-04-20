import { DecimalPipe, NgIf } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Product } from 'pages/login/models';
import { Subscription } from 'rxjs';
import { setAddProductInCartShop } from 'store/actions/cart-shop';
import { setIsErrorMessage } from 'store/actions/error-message.actions';
import {
  deleteProduct,
  selectProduct,
  setIsEditNewProduct,
  showModalProduct,
} from 'store/actions/products.action';
import { AppState } from 'store/app.state';
import { selectCartShop } from 'store/selectors';

@Component({
  selector: 'app-cards-products',
  templateUrl: './cards-products.component.html',
  styleUrls: ['./cards-products.component.css'],
  standalone: true,
  imports: [NgIf, DecimalPipe, IonicModule, RouterLink],
})
export class CardsProductsComponent implements OnInit {
  @Input() product?: Product = undefined;
  @Input() idRole?: number;

  productCarShop: Product[] = [];

  suscription: Subscription[] = [];

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.store.select(selectCartShop).subscribe((data) => {
      this.productCarShop = data.productsCartShop;
    });
  }

  deleteProduct(id: number) {
    this.store.dispatch(deleteProduct({ id }));
  }

  selectProduct(product: Product, id: number) {
    this.store.dispatch(selectProduct({ product }));
    this.store.dispatch(
      setIsEditNewProduct({ isEdit: id !== 1 ? true : false, isNew: false })
    );
    this.store.dispatch(showModalProduct({ value: true }));
  }

  findProductInCartShop(product: Product): boolean {
    const findProduct = this.productCarShop.find(
      (item) => item.id === product.id
    );

    return findProduct ? true : false;
  }

  addCartShop(product: Product) {
    const exist = this.findProductInCartShop(product);
    if (!exist) {
      this.store.dispatch(setAddProductInCartShop({ product }));
      this.store.dispatch(
        setIsErrorMessage({
          message: '¡Producto agregado con éxito!',
          good: true,
        })
      );
    } else {
      this.store.dispatch(
        setIsErrorMessage({
          message: 'El producto ya existe en carro de compras',
        })
      );
    }
  }

  buyProduct(product: Product) {
    const exist = this.findProductInCartShop(product);

    if (!exist) {
      this.store.dispatch(setAddProductInCartShop({ product }));
    }
  }
}
