import { Dispatch } from 'react';

import { rootService } from 'common/services/rootService';

import { UserData, UserDetailsData, UserRepoData } from './models/userModels';
import { SearchUsersResponse } from './models/userRequestModels';
import { UserAction } from './userActions';
import * as actions from './userActions';

export const getUsersDispatch = (dispatch: Dispatch<UserAction>) => {
    dispatch(actions.getUsersRequest());

    return rootService.userService
        .getUsers()
        .then((users: UserData[]) => dispatch(actions.getUsersSuccess(users)))
        .catch(() => dispatch(actions.getUsersFailure('Failed to get users')));
};

export const searchUsersDispatch = (dispatch: Dispatch<UserAction>, searchTerm: string) => {
    dispatch(actions.searchUsersRequest());

    return rootService.userService
        .searchUsers(searchTerm)
        .then(({ items }: SearchUsersResponse) => dispatch(actions.searchUsersSuccess(items)))
        .catch(() => dispatch(actions.searchUsersFailure('Failed to search users')));
};

export const getUserDetailsDispatch = (dispatch: Dispatch<UserAction>, login: string) => {
    dispatch(actions.getUserDetailsRequest());

    return rootService.userService
        .getUserDetails(login)
        .then((user: UserDetailsData) => dispatch(actions.getUserDetailsSuccess(user)))
        .catch(() => dispatch(actions.getUserDetailsFailure('Failed to get user details')));
};

export const getUserReposDispatch = (login: string) => (dispatch: Dispatch<UserAction>) => {
    dispatch(actions.getUserDetailsRequest());

    return rootService.userService
        .getUserRepos(login)
        .then((repos: UserRepoData[]) => dispatch(actions.getUserReposSuccess(repos)))
        .catch(() => dispatch(actions.getUserDetailsFailure('Failed to get user repositories')));
};
