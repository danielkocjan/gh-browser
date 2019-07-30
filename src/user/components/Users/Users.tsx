import React, { useState, useEffect, useCallback } from 'react';

import { useDebounce } from 'common/hooks/useDebounce';
import { Spinner } from 'common/components/Spinner/Spinner';

import { UsersList } from 'user/components/UsersList/UsersList';
import * as actions from 'user/actions/userActions';
import { useUserState } from 'user/userContext';
import { rootService } from 'common/services/rootService';
import { SearchResponse } from 'user/models/userRequestModels';
import { UserData } from 'user/models/userModels';

import styles from './users.module.scss';

export const Users: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearch = useDebounce(searchTerm);

    const [{ users, isFetchingUsers }, dispatch] = useUserState();

    const getUsers = useCallback(() => {
        dispatch(actions.getUsersRequest());

        return rootService.userService
            .getUsers()
            .then((users: UserData[]) => dispatch(actions.getUsersSuccess(users)))
            .catch(() => dispatch(actions.getUsersFailure('Failed to get users')));
    }, [dispatch]);

    const searchUsers = useCallback(
        (searchTerm: string) => {
            if (!searchTerm.length) {
                return;
            }

            dispatch(actions.searchUsersRequest());

            return rootService.userService
                .searchUsers(searchTerm)
                .then(({ items }: SearchResponse<UserData[]>) =>
                    dispatch(actions.searchUsersSuccess(items))
                )
                .catch(() => dispatch(actions.searchUsersFailure('Failed to search users')));
        },
        [dispatch]
    );

    useEffect(() => {
        debouncedSearch ? searchUsers(debouncedSearch) : getUsers();
    }, [debouncedSearch, getUsers, searchUsers]);

    return (
        <section className={styles.users}>
            <header>
                <div className={styles.inputWrapper}>
                    <input
                        className={styles.searchInput}
                        placeholder="Search users"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.currentTarget.value)}
                    />
                    <button className={styles.searchClear} onClick={_ => setSearchTerm('')}>
                        <span role="img" aria-label="Cross Mark">
                            ✕
                        </span>
                    </button>
                </div>
            </header>
            {isFetchingUsers ? <Spinner /> : <UsersList users={users} />}
        </section>
    );
};
