import { Dispatch } from 'react';

import { UserAction } from 'modules/user/userActions';
import { AppState } from './appReducer';

export type AppEffect = (dispatch: Dispatch<AppAction>, state: AppState) => void;

export type AppDispatch = Dispatch<AppEffect | AppAction>;

export const appDispatch = (dispatch: Dispatch<AppAction>, state: AppState) => (
    input: AppEffect | AppAction
) => (input instanceof Function ? input(dispatch, state) : dispatch(input));

export interface Action<T, P = null> {
    readonly type: T;
    readonly payload?: P;
}

export type AppAction = UserAction;
