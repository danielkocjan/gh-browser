import React, { Component } from 'react';

import { withState, AppState, AppDispatch } from 'common/store';

import { UserData } from 'modules/user/models/userModels';
import { getUsersEffect, searchUsersEffect } from 'modules/user/userEffects';
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

class UsersContainer extends Component<StateProps & DispatchProps> {
    componentDidMount() {
        this.props.getUsers();
    }

    onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
        const searchTerm = e.currentTarget.value;

        return searchTerm ? this.props.searchUsers(searchTerm) : this.props.getUsers();
    };

    render() {
        return (
            <section className={styles.users}>
                <input placeholder="Search users..." onChange={this.onSearchChange} />
                <UsersList isFetching={this.props.isFetching} users={this.props.users} />
            </section>
        );
    }
}

const mapState = (state: AppState): StateProps => ({
    users: getUsers(state),
    isFetching: getUsersFetchingStatus(state),
});

const mapDispatch = (dispatch: AppDispatch): DispatchProps => ({
    getUsers: () => dispatch(getUsersEffect()),
    searchUsers: searchTerm => dispatch(searchUsersEffect(searchTerm)),
});

export const Users = withState(mapState, mapDispatch)(UsersContainer);
