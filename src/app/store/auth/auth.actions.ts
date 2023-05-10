import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models";




export const SetUserAuth = createAction(
  '[auth] Set user',
  props<{ payload: User & { token: string } }>(),
)

export const DelUserAuth = createAction('[auth] Del user')
