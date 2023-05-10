import { createReducer, on } from "@ngrx/store"
import { User } from "src/app/models"
import { DelUserAuth, SetUserAuth } from "./auth.actions"


export const authFeatureKey = 'key'

export interface AuthState {
  authUser: User | null
  token: string | null
}

const initialState: AuthState = {
  authUser: null,
  token: localStorage.getItem('token') || null
}

export const authReducer = createReducer(
  initialState,

  on(SetUserAuth, (state, { payload }) => {
    return {
      authUser: payload,
      token: payload.token
    }
  }),
  on(DelUserAuth, (state) => {
    return {
      authUser: null,
      token: null
    }
  })

)

