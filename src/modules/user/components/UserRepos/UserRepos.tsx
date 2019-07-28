import React, { useReducer, useEffect } from 'react';
import { userInitialState, userReducer } from 'modules/user/userReducer';
import { getUserReposDispatch } from 'modules/user/userDispatchers';

import styles from './userRepos.module.scss';
import { OutsideLink } from 'common/components/OutsideLink';

interface UserReposProps {
    login: string;
}

export const UserRepos: React.FC<UserReposProps> = ({ login }) => {
    const [{ userRepos, isFetchingUserRepos }, dispatch] = useReducer(
        userReducer,
        userInitialState
    );

    useEffect(() => {
        getUserReposDispatch(dispatch, login);
    }, [login]);

    return isFetchingUserRepos ? (
        <div>Loading...</div>
    ) : (
        <div>
            {userRepos.map(repo => (
                <OutsideLink to={repo.htmlUrl} key={repo.id}>
                    <ul>{repo.name}</ul>
                </OutsideLink>
            ))}
        </div>
    );
};
