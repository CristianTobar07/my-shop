import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../home/components/navbar/navbar.component';
import { TitlesComponent } from '../../../../shared/components/titles/titles.component';
import { FormLoginComponent } from '../form-login/form-login.component';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import { selectLoading } from '../../../../store/selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './main-pagelogin.component.html',
  styleUrls: ['./main-pagelogin.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    TitlesComponent,
    FormLoginComponent,
    LoadingComponent,
  ],
})
export class MainPageLoginComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;

  suscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.suscription = this.store.select(selectLoading).subscribe((data) => {
      this.isLoading = data.isLoading;
    });
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
}
