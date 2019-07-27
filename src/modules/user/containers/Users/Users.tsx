import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'common/store/connect';
import { AppState } from 'common/store/appReducer';
import { AppRoute } from 'common/config/routes';

import styles from './users.module.scss';
import { UserCard } from '../../components/UserCard/UserCard';

import { UserData } from 'modules/user/models/userModels';
import { getUsers } from 'modules/user/userEffects';
import { getUsers as getUsersSelector, getUsersFetchingStatus } from 'modules/user/userSelectors';

interface StateProps {
    users: UserData[];
    isFetching: boolean;
}

interface DispatchProps {
    getUsers: any;
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
    users: getUsersSelector(state),
    isFetching: getUsersFetchingStatus(state),
});

const mapDispatch = (dispatch: React.Dispatch<any>) => ({
    getUsers: () => dispatch(getUsers()),
});

export const Users = connect(
    mapState,
    mapDispatch
)(UsersContainer);
