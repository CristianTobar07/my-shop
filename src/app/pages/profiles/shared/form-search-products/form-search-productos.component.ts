import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ROUTES } from 'shared/constants';
import { setFilterProducts } from 'store/actions/products.action';
import { AppState } from 'store/app.state';

@Component({
  selector: 'app-form-search-productos',
  templateUrl: './form-search-productos.component.html',
  styleUrls: ['./form-search-productos.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, IonicModule],
})
export class FormSearchProductsComponent implements OnInit, OnDestroy {
  @Input() idRole?: number;

  form: FormGroup = this.fb.group({
    productName: [''],
  });

  suscription: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.handleChangeForm();
  }

  handleChangeForm() {
    const suscription = this.form.valueChanges.subscribe((data) => {
      if (this.idRole) {
        this.router.navigate([ROUTES.USER + '/products']);
      }
      this.store.dispatch(setFilterProducts({ valueName: data.productName }));
    });

    this.suscription.push(suscription);
  }

  ngOnDestroy(): void {
    this.suscription.forEach((suscription) => {
      suscription.unsubscribe();
    });
  }
}
