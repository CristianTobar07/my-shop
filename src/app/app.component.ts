import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'store/app.state';
import { selectErrorMessage } from 'store/selectors';
import { Subscription } from 'rxjs';
import { FlotingAlertComponent } from 'shared/components/floting-alert/floting-alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FlotingAlertComponent],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-shop';

  isErrorAlert: boolean = false;
  message: string = '';
  good: boolean = false;

  suscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.suscription = this.store
      .select(selectErrorMessage)
      .subscribe((data) => {
        this.isErrorAlert = data.isError;
        this.message = data.message;
        this.good = data.good;
      });
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
}
