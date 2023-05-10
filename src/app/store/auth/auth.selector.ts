import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, authFeatureKey } from "./auth.reducer";
import { User } from "src/app/models";

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectAuthUser = createSelector(
  selectAuthState,
  (state) =>  state.authUser )
