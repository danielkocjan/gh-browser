import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'common/store/connect';
import { AppState } from 'common/store/appReducer';
import { AppRoute } from 'common/config/routes';

import styles from './users.module.scss';
import { UserCard } from '../../components/UserCard/UserCard';

import { UserData } from 'modules/user/models/userModels';
import { getUsers } from 'modules/user/userEffects';

interface StateProps {
    users: UserData[];
    isFetchingUsers: boolean;
}

interface DispatchProps {
    getUsers: any;
}

class UsersContainer extends Component<StateProps & DispatchProps, any> {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        // todo: spinner hoc
        return this.props.isFetchingUsers ? (
            'Loading...'
        ) : (
            <section className={styles.users}>
                {this.props.users.map(user => (
                    <Link
                        className={styles.userCardWrapper}
                        to={`${AppRoute.Users}/${user.id}`}
                        key={user.id}
                    >
                        <UserCard user={user} />
                    </Link>
                ))}
            </section>
        );
    }
}

const mapState = ({ user }: AppState): StateProps => ({
    users: user.users,
    isFetchingUsers: user.isFetchingUsers,
});

const mapDispatch = (dispatch: React.Dispatch<any>) => ({
    getUsers: () => dispatch(getUsers()),
});

export const Users = connect(
    mapState,
    mapDispatch
)(UsersContainer);
