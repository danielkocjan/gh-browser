import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { AppState } from 'common/store/appReducer';
import { connect } from 'common/store/connect';
import { compose } from 'common/helpers/compose';

import styles from './user.module.scss';
import { UserDetails } from 'modules/user/components/UserDetails/UserDetails';
import { UserDetailsData } from 'modules/user/models/userModels';
import { getUserDetailsByLogin, getUserDetailsFetchingStatus } from 'modules/user/userSelectors';
import { getUserDetails } from 'modules/user/userEffects';

interface StateProps {
    userLogin: string;
    userDetails?: UserDetailsData;
    isFetching: boolean;
}

interface DispatchProps {
    getUserDetails: typeof getUserDetails;
}

type RouteProps = RouteComponentProps<{ login: string }>;

type UserProps = StateProps & DispatchProps & RouteProps;

export class UserContainer extends Component<UserProps> {
    componentDidMount() {
        !this.props.userDetails && this.props.getUserDetails(this.props.userLogin);
    }

    render() {
        // todo: spinner hoc
        return this.props.isFetching ? (
            'Loading...'
        ) : this.props.userDetails ? (
            <section className={styles.user}>
                <UserDetails user={this.props.userDetails} />
            </section>
        ) : (
            `No user with login ${this.props.userLogin} found`
        );
    }
}

const mapState = (state: AppState, props: UserProps): StateProps => ({
    userLogin: props.match.params.login,
    userDetails: getUserDetailsByLogin(state, props.match.params.login),
    isFetching: getUserDetailsFetchingStatus(state),
});

const mapDispatch = (dispatch: React.Dispatch<any>) => ({
    getUserDetails: (login: string) => dispatch(getUserDetails(login)),
});

export const User = compose(
    withRouter,
    connect(
        mapState,
        mapDispatch
    )
)(UserContainer);
