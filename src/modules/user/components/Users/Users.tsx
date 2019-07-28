import React, { useState, useEffect, useReducer } from 'react';

import { useDebounce } from 'common/hooks/useDebounce';
import { Spinner } from 'common/components/Spinner/Spinner';

import { userReducer, userInitialState } from 'modules/user/reducers/userReducer';
import { UsersList } from 'modules/user/components/UsersList/UsersList';
import { getUsersDispatch, searchUsersDispatch } from 'modules/user/dispatchers/userDispatchers';

import styles from './users.module.scss';

export const Users: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [{ users, isFetchingUsers }, dispatch] = useReducer(userReducer, userInitialState);

    const debouncedSearch = useDebounce(searchTerm);

    useEffect(() => {
        debouncedSearch ? searchUsersDispatch(dispatch, searchTerm) : getUsersDispatch(dispatch);
    }, [debouncedSearch]);

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
