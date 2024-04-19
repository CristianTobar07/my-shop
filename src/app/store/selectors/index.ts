import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { InitialStateLoadinComponent } from '../models';

const selectLoadingComponent = (state: AppState) => state.loading;

export const selectLoading = createSelector(
  selectLoadingComponent,
  (state: InitialStateLoadinComponent) => state
);
