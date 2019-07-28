import { Reducer } from 'react';

import { AppAction } from 'common/store';

import { UserData, UserDetailsData, UserRepoData } from './models/userModels';
import * as actions from './userActions';

export interface UserState {
    users: UserData[];
    isFetchingUsers: boolean;

    userDetails?: UserDetailsData;
    isFetchingUserDetails: boolean;

    userRepos: UserRepoData[];
    isFetchingUserRepos: boolean;
}

export const userInitialState: UserState = {
    users: [],
    isFetchingUsers: false,

    isFetchingUserDetails: false,

    userRepos: [],
    isFetchingUserRepos: false,
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
            };

        case actions.GET_USER_DETAILS_REQUESTED:
            return {
                ...state,
                isFetchingUserDetails: true,
            };

        case actions.GET_USER_DETAILS_SUCCEEDED:
            return {
                ...state,
                userDetails: action.payload!,
                isFetchingUserDetails: false,
            };

        case actions.GET_USER_DETAILS_FAILED:
            return {
                ...state,
                isFetchingUserDetails: false,
            };

        case actions.GET_USER_REPOS_REQUESTED:
            return {
                ...state,
                isFetchingUserRepos: true,
            };

        case actions.GET_USER_REPOS_SUCCEEDED:
            return {
                ...state,
                isFetchingUserRepos: false,
                userRepos: action.payload!,
            };

        case actions.GET_USER_REPOS_FAILED:
            return {
                ...state,
                isFetchingUserRepos: false,
            };

        default:
            return state;
    }
};
