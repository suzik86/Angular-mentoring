import { createReducer, on, Action } from '@ngrx/store';
import { login, logout } from './user.actions';

export const initialState = null;


export const userReducer = createReducer(
  initialState,
  on(login, (state, user) => user),
  on(logout, (state) => null),
);
