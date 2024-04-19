import { ActionReducerMap } from '@ngrx/store';

import { loadingReducer } from './reducers/loading.reducer';
import { InitialStateLoadinComponent } from './models';

export interface AppState {
  loading: InitialStateLoadinComponent;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  loading: loadingReducer,
};
