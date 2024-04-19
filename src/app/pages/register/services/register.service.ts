import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../../shared/constants';
import { FormRegister, RegisterRequest } from '../models';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private _initialStateRegister$ = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  setRegister(formRegister: FormRegister): Observable<boolean> {
    const body: RegisterRequest = {
      ...formRegister,
      address: {
        city: 'kilcoole',
        street: '7835 new road',
        number: 3,
        zipcode: '12926-3874',
        geolocation: {
          lat: '-37.3159',
          long: '81.1496',
        },
      },
    };

    this.http.post(BASE_URL + 'users', body).subscribe({
      next: (response: any) => {
        localStorage.setItem('@access_token', response.token);
        this._initialStateRegister$.next(true);
      },
      error: (error) => {
        console.log(error.error.code);
        this._initialStateRegister$.next(false);
      },
    });
    return this._initialStateRegister$.asObservable();
  }
}
