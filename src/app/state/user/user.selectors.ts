import { createSelector } from '@ngrx/store';
import { UserState } from './user.state';
import User from './user.types';

export const selectUser = createSelector(
  (state: UserState) => state.user,
  (user: User) => user,
);
