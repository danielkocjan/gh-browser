import React, { useReducer, useEffect } from 'react';

import { OutsideLink } from 'common/components/OutsideLink';
import { Spinner } from 'common/components/Spinner/Spinner';

import { userInitialState, userReducer } from 'modules/user/reducers/userReducer';
import { getUserReposDispatch } from 'modules/user/dispatchers/userDispatchers';

import styles from './userRepos.module.scss';

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
        <Spinner />
    ) : (
        <section>
            <h1>Popular repositories</h1>
            {userRepos &&
                userRepos.length > 0 &&
                userRepos.map(repo => (
                    <OutsideLink to={repo.htmlUrl} key={repo.id} className={styles.wrapper}>
                        <ul className={styles.repo}>
                            {repo.name} ({repo.stargazersCount} stars)
                        </ul>
                    </OutsideLink>
                ))}
        </section>
    );
};
