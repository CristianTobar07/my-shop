import { createReducer, on } from '@ngrx/store';
import { setIsLoading } from '../actions/loading.actions';
import { InitialStateLoadinComponent } from '../models';

export const initialStateLoading: InitialStateLoadinComponent = {
  isLoading: false,
};

export const loadingReducer = createReducer(
  initialStateLoading,
  on(setIsLoading, (state, { value }) => {
    return {
      ...state,
      isLoading: value,
    };
  })
);
