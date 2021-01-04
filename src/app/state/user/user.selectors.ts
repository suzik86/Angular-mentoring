import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import User from '../../shared/components/user/user.types';

export const selectUser = createSelector(
  (state: AppState) => state.user,
  (user: User) => user,
);
