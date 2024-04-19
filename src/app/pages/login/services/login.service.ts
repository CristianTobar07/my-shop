import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../../shared/constants';
import { LoginRequest } from '../models';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _initialStateLogin$ = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  setLogin(body: LoginRequest): Observable<boolean> {
    this.http.post(BASE_URL + 'auth/login', body).subscribe({
      next: (response: any) => {
        localStorage.setItem('@access_token', response.token);
        this._initialStateLogin$.next(true);
      },
      error: (error) => {
        console.log(error.error.code);
        this._initialStateLogin$.next(false);
      },
    });
    return this._initialStateLogin$.asObservable();
  }
}
