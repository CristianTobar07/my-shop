import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Product } from 'pages/login/models';
import { handleKeyDown } from 'shared/middleware/number.middleware';
import { setIsErrorMessage } from 'store/actions/error-message.actions';
import {
  addProduct,
  editProduct,
  showModalProduct,
} from 'store/actions/products.action';
import { AppState } from 'store/app.state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [NgIf, NgClass, IonicModule, ReactiveFormsModule],
})
export class ProductComponent implements OnInit {
  @Input() product?: Product;
  @Input() isEdit: boolean = false;

  dataImage: any = undefined;
  image: any = undefined;

  form: FormGroup = this.fb.group({
    nameProduct: [''],
    price: [''],
    count: [''],
    description: [''],
  });

  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit() {
    if (this.product) {
      const { title, price, count, description, image } = this.product;

      this.form.get('nameProduct')?.setValue(title);
      this.form.get('price')?.setValue(price);
      this.form.get('count')?.setValue(count);
      this.form.get('description')?.setValue(description);

      this.image = image;
    }
  }

  onChangeLoadImage(event: any) {
    if (event.target.files[0].size < 1000000) {
      if (
        event.target.files[0].type === 'image/png' ||
        event.target.files[0].type === 'image/jpeg'
      ) {
        const dataImage = event.target.files[0];
        this.dataImage = dataImage;

        const reader = new FileReader();

        if (event.target.files && event.target.files.length) {
          const [file] = event.target.files;
          reader.readAsDataURL(file);

          reader.onload = () => {
            this.image = reader.result as string;
          };
        }
      } else {
        this.store.dispatch(
          setIsErrorMessage({
            message: 'Formato no permitido, por favor cargue una imagen',
          })
        );
      }
    } else {
      this.store.dispatch(
        setIsErrorMessage({ message: 'El archivo cargado pesa más de 1Mb' })
      );
    }
  }

  handleKeyDown(e: any) {
    handleKeyDown(e);
  }

  handleDecline() {
    this.store.dispatch(showModalProduct({ value: false }));
  }

  handleSubmit() {
    if (this.form.invalid) {
      this.store.dispatch(
        setIsErrorMessage({ message: 'Complete todos los campos' })
      );
      return;
    }

    if (!this.image) {
      this.store.dispatch(
        setIsErrorMessage({ message: 'Cargue la imagen del producto' })
      );
      return;
    }

    const product: Product = {
      id: this.product ? this.product.id : NaN,
      title: this.form.value['nameProduct'],
      price: this.form.value['price'],
      count: this.form.value['count'],
      description: this.form.value['description'],
      image: this.image,
    };

    if (this.isEdit) {
      this.store.dispatch(editProduct({ product }));
    } else {
      this.store.dispatch(addProduct({ product }));
    }

    this.store.dispatch(showModalProduct({ value: false }));
  }
}
