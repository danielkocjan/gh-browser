import { Dispatch } from 'react';

import { UserAction } from 'modules/user/userActions';
import { AppState } from './appReducer';

type AugmentedDispatch = (dispatch: Dispatch<AppAction>, state: AppState) => void;

export type AppDispatch = Dispatch<AugmentedDispatch | AppAction>;

export const appDispatch = (dispatch: Dispatch<AppAction>, state: AppState) => (
    input: AugmentedDispatch | AppAction
) => (input instanceof Function ? input(dispatch, state) : dispatch(input));

export interface Action<T, P = null> {
    readonly type: T;
    readonly payload?: P;
}

export type AppAction = UserAction;
