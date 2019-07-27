import { pagination, API_URL } from 'common/config/constants';

import { UserAction, getUsersRequest, getUsersSuccess, getUsersFailure } from './userActions';
import { UserData } from './models/userModels';

// todo: usersEffectFactory

export const getUsers = () => (dispatch: React.Dispatch<UserAction>) => {
    dispatch(getUsersRequest());

    return fetch(`${API_URL}/users?per_page=${pagination.size}`)
        .then(res => res.json())
        .then((users: UserData[]) => dispatch(getUsersSuccess(users)))
        .catch(() => dispatch(getUsersFailure('Failed to fetch users')));
};
