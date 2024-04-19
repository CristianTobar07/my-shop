import { DecimalPipe, NgIf } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'pages/login/models';
import {
  deleteProduct,
  selectProduct,
  setIsEditNewProduct,
  showModalProduct,
} from 'store/actions/products.action';
import { AppState } from 'store/app.state';

@Component({
  selector: 'app-cards-products',
  templateUrl: './cards-products.component.html',
  styleUrls: ['./cards-products.component.css'],
  standalone: true,
  imports: [NgIf, DecimalPipe],
})
export class CardsProductsComponent implements OnInit {
  @Input() product?: Product = undefined;
  @Input() idRole?: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

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
}
