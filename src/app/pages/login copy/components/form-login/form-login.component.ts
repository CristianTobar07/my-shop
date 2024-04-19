import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ErrorsFormsComponent } from '../../../../shared/components/errors-forms/errors-forms.component';
import { ErrorFormLogin, LoginRequest } from '../../models';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    IonicModule,
    ReactiveFormsModule,
    ErrorsFormsComponent,
  ],
})
export class FormLoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    userName: [''],
    password: [''],
  });

  errorForms: ErrorFormLogin = {
    isInValidForm: false,
    isLogin: false,
  };

  isShowPassword: boolean = false;

  constructor(private fb: FormBuilder, private loginservice: LoginService) {}

  ngOnInit() {
    this.handleChange();
  }

  showPassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  handleChange() {
    this.form.valueChanges.subscribe((data) => {
      this.errorForms.isInValidForm = false;
    });
  }

  handleSubmit() {
    this.errorForms.isLogin = false;

    if (this.form.invalid) {
      this.errorForms.isInValidForm = true;
    }

    const body: LoginRequest = {
      username: this.form.value['userName'],
      password: this.form.value['password'],
    };

    this.loginservice.setLogin(body).subscribe((res) => {
      if (!res) {
        this.errorForms.isLogin = true;
        return;
      }

      alert('Logueado');
    });

    console.log('form');
  }
}
