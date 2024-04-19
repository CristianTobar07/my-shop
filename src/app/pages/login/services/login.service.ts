import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../../shared/constants';
import { LoginRequest } from '../models';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { setIsLoading } from '../../../store/actions/loading.actions';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _initialStateLogin$ = new Subject<boolean>();

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  setLogin(body: LoginRequest): Observable<boolean> {
    this.store.dispatch(setIsLoading({ value: true }));
    this.http.post(BASE_URL + 'auth/login', body).subscribe({
      next: (response: any) => {
        localStorage.setItem('@access_token', response.token);
        this._initialStateLogin$.next(true);
        this.store.dispatch(setIsLoading({ value: false }));
      },
      error: (error) => {
        console.log(error.error.code);
        this._initialStateLogin$.next(false);
        this.store.dispatch(setIsLoading({ value: false }));
      },
    });
    return this._initialStateLogin$.asObservable();
  }
}
