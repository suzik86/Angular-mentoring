import { createAction, props } from '@ngrx/store';
import User from 'src/app/shared/components/user/user.types';

export const login = createAction(
  '[Login Page] Login',
  props<User>(),
);

export const logout = createAction(
  '[Logout Page] Logout',
);
