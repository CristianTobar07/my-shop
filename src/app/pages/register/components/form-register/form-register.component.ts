import { NgClass, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ErrorsFormsComponent } from '../../../../shared/components/errors-forms/errors-forms.component';
import { ErrorFormRegister, FormRegister, RegisterRequest } from '../../models';
import { RegisterService } from '../../services/register.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['../../../login/components/form-login/form-login.component.css'],
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    IonicModule,
    ReactiveFormsModule,
    ErrorsFormsComponent,
  ],
})
export class FormRegisterComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
    userName: [''],
    email: ['', Validators.email],
    password: [''],
    phone: [''],
  });

  errorForms: ErrorFormRegister = {
    isInValidForm: false,
    isRegister: false,
  };

  isShowPassword: boolean = false;

  suscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private registerservice: RegisterService
  ) {}

  ngOnInit() {
    this.handleChange();
  }

  showPassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  handleChange() {
    this.form.valueChanges.subscribe((data) => {
      this.errorForms.isInValidForm = false;
      this.errorForms.isRegister = false;
    });
  }

  handleSubmit() {
    this.errorForms.isInValidForm = false;

    if (this.form.invalid) {
      this.errorForms.isInValidForm = true;
      return;
    }

    const body: FormRegister = {
      name: {
        firstname: this.form.value['firstName'],
        lastname: this.form.value['lastName'],
      },
      username: this.form.value['userName'],
      email: this.form.value['password'],
      password: this.form.value['password'],
      phone: this.form.value['password'],
    };

    this.suscription = this.registerservice
      .setRegister(body)
      .subscribe((res) => {
        if (!res) {
          this.errorForms.isRegister = true;
          return;
        }

        alert('¡Usuario creado correctamente!');
      });

    console.log('form');
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
}
