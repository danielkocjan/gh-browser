import React, { useEffect, useCallback } from 'react';

import { OutsideLink } from 'common/components/OutsideLink';
import { Spinner } from 'common/components/Spinner/Spinner';

import { useUserState } from 'user/userContext';
import { rootService } from 'common/services/rootService';
import { UserRepoData } from 'user/models/userModels';
import * as actions from 'user/actions/userActions';

import styles from './userRepos.module.scss';
import { SearchResponse } from 'user/models/userRequestModels';

interface UserReposProps {
    login: string;
}

export const UserRepos: React.FC<UserReposProps> = ({ login }) => {
    const [{ userRepos, isFetchingUserRepos }, dispatch] = useUserState();

    const getUserRepos = useCallback(
        (login: string) => {
            dispatch(actions.getUserReposRequest());
            return rootService.userService
                .getUserRepos(login)
                .then(({ items }: SearchResponse<UserRepoData[]>) =>
                    dispatch(actions.getUserReposSuccess(items))
                )
                .catch(() => dispatch(actions.getUserReposFailure('Failed to get user repos')));
        },
        [dispatch]
    );

    useEffect(() => {
        getUserRepos(login);
    }, [getUserRepos, login]);

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
