import { Reducer } from 'react';

import { userReducer, UserState, userInitialState } from 'modules/user/userReducer';

import { AppAction } from './appAction';

export interface AppState {
    user: UserState;
}

export const appInitialState: AppState = {
    user: userInitialState,
};

export type AppReducer = Reducer<AppState, AppAction>;

export const appReducer: AppReducer = ({ user } = appInitialState, action) => ({
    user: userReducer(user, action),
});
