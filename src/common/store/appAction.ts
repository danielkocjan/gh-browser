import { UserAction } from 'modules/user/userActions';

export interface Action<T, P = null> {
    readonly type: T;
    readonly payload?: P;
}

export type AppAction = UserAction;
