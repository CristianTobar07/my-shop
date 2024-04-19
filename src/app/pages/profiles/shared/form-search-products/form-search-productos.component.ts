import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'store/app.state';

@Component({
  selector: 'app-form-search-productos',
  templateUrl: './form-search-productos.component.html',
  styleUrls: ['./form-search-productos.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, IonicModule],
})
export class FormSearchProductsComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({
    productName: [''],
  });

  suscription: Subscription[] = [];

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.handleChangeForm();
  }

  handleChangeForm() {}

  ngOnDestroy(): void {
    this.suscription.forEach((suscription) => {
      suscription.unsubscribe();
    });
  }
}
