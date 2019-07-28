import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withState } from 'common/store/withState';
import { AppState } from 'common/store/appReducer';
import { AppRoute } from 'common/config/routes';

import { UserCard } from 'modules/user/components/UserCard/UserCard';
import { UserData } from 'modules/user/models/userModels';
import { getUsersEffect } from 'modules/user/userEffects';
import { getUsers, getUsersFetchingStatus } from 'modules/user/userSelectors';

import styles from './users.module.scss';
import { AppDispatch } from 'common/store/appAction';

interface StateProps {
    users: UserData[];
    isFetching: boolean;
}

interface DispatchProps {
    getUsers: () => void;
}

class UsersContainer extends Component<StateProps & DispatchProps> {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        // todo: spinner hoc
        return this.props.isFetching ? (
            'Loading...'
        ) : (
            <section className={styles.users}>
                {this.props.users.map(user => (
                    <Link
                        className={styles.userCardWrapper}
                        to={`${AppRoute.Users}/${user.login}`}
                        key={user.id}
                    >
                        <UserCard user={user} />
                    </Link>
                ))}
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
});

export const Users = withState(mapState, mapDispatch)(UsersContainer);
