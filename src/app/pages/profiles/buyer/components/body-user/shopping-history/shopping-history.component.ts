import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsToPayment } from 'pages/login/models';
import { Subscription } from 'rxjs';
import { TitlesComponent } from 'shared/components/titles/titles.component';
import { AppState } from 'store/app.state';
import { selectCartShop } from 'store/selectors';

@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, TitlesComponent, DecimalPipe],
})
export class ShoppingHistoryComponent implements OnInit, OnDestroy {
  purchaseData: ProductsToPayment[] = [];

  suscription: Subscription[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    const suscription = this.store.select(selectCartShop).subscribe((data) => {
      this.purchaseData = data.purchaseData;
    });

    this.suscription.push(suscription);
  }

  ngOnDestroy(): void {
    this.suscription.forEach((suscription) => suscription.unsubscribe());
  }
}
