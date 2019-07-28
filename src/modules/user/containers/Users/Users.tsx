import React, { useState, useEffect } from 'react';

import { withState, AppState, AppDispatch } from 'common/store';
import { useDebounce } from 'common/hooks/useDebounce';

import { UserData } from 'modules/user/models/userModels';
import { getUsersDispatch, searchUsersDispatch } from 'modules/user/userDispatchers';
import { getUsers, getUsersFetchingStatus } from 'modules/user/userSelectors';
import { UsersList } from 'modules/user/components/UsersList/UsersList';

import styles from './users.module.scss';

interface StateProps {
    users: UserData[];
    isFetching: boolean;
}

interface DispatchProps {
    getUsers: () => void;
    searchUsers: (searchTerm: string) => void;
}

const UsersContainer: React.FC<StateProps & DispatchProps> = ({
    getUsers,
    searchUsers,
    isFetching,
    users,
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm);

    useEffect(() => {
        debouncedSearch ? searchUsers(searchTerm) : getUsers();
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
            {isFetching ? 'Loading...' : <UsersList users={users} />}
        </section>
    );
};

const mapState = (state: AppState): StateProps => ({
    users: getUsers(state),
    isFetching: getUsersFetchingStatus(state),
});

const mapDispatch = (dispatch: AppDispatch): DispatchProps => ({
    getUsers: () => dispatch(getUsersDispatch()),
    searchUsers: searchTerm => dispatch(searchUsersDispatch(searchTerm)),
});

export const Users = withState(mapState, mapDispatch)(UsersContainer);
