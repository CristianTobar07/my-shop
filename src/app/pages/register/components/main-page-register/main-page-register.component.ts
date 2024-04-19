import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../home/components/navbar/navbar.component';
import { TitlesComponent } from '../../../../shared/components/titles/titles.component';
import { FormRegisterComponent } from '../form-register/form-register.component';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import { selectLoading } from '../../../../store/selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './main-page-register.component.html',
  styleUrls: [],
  standalone: true,
  imports: [
    NavbarComponent,
    TitlesComponent,
    FormRegisterComponent,
    LoadingComponent,
  ],
})
export class MainPageRegisterComponent implements OnInit, OnDestroy {
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
