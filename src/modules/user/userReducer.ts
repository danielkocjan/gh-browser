import { Reducer } from 'react';

import { AppAction } from 'common/store';

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
        case actions.GET_USERS_REQUESTED:
        case actions.SEARCH_USERS_REQUESTED:
            return {
                ...state,
                isFetchingUsers: true,
            };

        case actions.GET_USERS_SUCCEEDED:
        case actions.SEARCH_USERS_SUCCEEDED:
            return {
                ...state,
                users: action.payload!,
                isFetchingUsers: false,
            };

        case actions.GET_USERS_FAILED:
        case actions.SEARCH_USERS_FAILED:
            return {
                ...state,
                isFetchingUsers: false,
                users: [],
            };

        case actions.GET_USER_DETAILS_REQUESTED:
            return {
                ...state,
                isFetchingUserDetails: true,
            };

        case actions.GET_USER_DETAILS_SUCCEEDED:
            return {
                ...state,
                usersDetails: [...state.usersDetails, action.payload!],
                isFetchingUserDetails: false,
            };

        case actions.GET_USER_DETAILS_FAILED:
            return {
                ...state,
                isFetchingUserDetails: false,
            };

        default:
            return state;
    }
};
