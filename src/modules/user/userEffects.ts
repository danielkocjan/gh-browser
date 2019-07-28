import { Dispatch } from 'react';

import { pagination, API_URL } from 'common/config/constants';

import { UserData, UserDetailsData } from './models/userModels';
import { UserAction } from './userActions';
import * as actions from './userActions';

// todo: usersEffectFactory
// todo: httpService with camelCased response, usersService

export const getUsersEffect = () => (dispatch: Dispatch<UserAction>) => {
    dispatch(actions.getUsersRequest());

    return fetch(`${API_URL}/users?per_page=${pagination.size}`)
        .then(res => res.json())
        .then((users: UserData[]) => dispatch(actions.getUsersSuccess(users)))
        .catch(() => dispatch(actions.getUsersFailure('Failed to fetch users')));
};

export const getUserDetailsEffect = (login: string) => (dispatch: Dispatch<UserAction>) => {
    dispatch(actions.getUserDetailsRequest());

    return fetch(`${API_URL}/users/${login}`)
        .then(res => res.json())
        .then((user: UserDetailsData) => dispatch(actions.getUserDetailsSuccess(user)))
        .catch(() => dispatch(actions.getUserDetailsFailure('Failed to fetch user details')));
};
