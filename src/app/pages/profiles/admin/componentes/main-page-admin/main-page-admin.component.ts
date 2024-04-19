import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';
import { BodyAdminComponent } from '../body-admin/body-admin.component';
import { ProductosService } from 'pages/profiles/shared/services/productos.service';
import { LoadingComponent } from 'shared/components/loading/loading.component';
import { selectLoading } from 'store/selectors';
import { Store } from '@ngrx/store';
import { AppState } from 'store/app.state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page-admin',
  templateUrl: './main-page-admin.component.html',
  styleUrls: ['./main-page-admin.component.css'],
  standalone: true,
  imports: [HeaderAdminComponent, BodyAdminComponent, LoadingComponent],
})
export class MainPageAdminComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;

  suscription: Subscription = new Subscription();

  constructor(
    private productsservice: ProductosService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.productsservice.getAllProducts();

    this.suscription = this.store.select(selectLoading).subscribe((data) => {
      this.isLoading = data.isLoading;
    });
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
}
