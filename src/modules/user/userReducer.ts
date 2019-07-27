import { Reducer } from 'react';

import { AppAction } from 'common/store/appAction';

import { UserData, UserDetailsData } from './models/userModels';
import * as actions from './userActions';

export interface UserState {
    users: UserData[];
    isFetchingUsers: boolean;

    usersDetails: UserDetailsData[];
    isFetchingUserDetails: boolean;

    usersRepositories: Object[];
    isFetchingUserRepositories: boolean;
}

export const userInitialState: UserState = {
    users: [],
    isFetchingUsers: false,

    usersDetails: [],
    isFetchingUserDetails: false,

    usersRepositories: [],
    isFetchingUserRepositories: false,
};

export const userReducer: Reducer<UserState, AppAction> = (state = userInitialState, action) => {
    switch (action.type) {
        case actions.GET_USERS:
            return {
                ...state,
                isFetchingUsers: true,
            };

        case actions.GET_USERS_SUCCEEDED:
            return {
                ...state,
                users: action.payload!,
                isFetchingUsers: false,
            };

        case actions.GET_USERS_FAILED:
            return {
                ...state,
                isFetchingUsers: false,
            };

        default:
            return state;
    }
};
