import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { AppState } from 'common/store/appReducer';
import { withState } from 'common/store/withState';
import { AppDispatch } from 'common/store/appAction';
import { compose } from 'common/helpers/compose';

import { UserDetails } from 'modules/user/components/UserDetails/UserDetails';
import { UserDetailsData } from 'modules/user/models/userModels';
import { getUserDetailsByLogin, getUserDetailsFetchingStatus } from 'modules/user/userSelectors';
import { getUserDetailsEffect } from 'modules/user/userEffects';

import styles from './user.module.scss';

interface StateProps {
    userLogin: string;
    userDetails?: UserDetailsData;
    isFetching: boolean;
}

interface DispatchProps {
    getUserDetails: (login: string) => void;
}

type RouteProps = RouteComponentProps<{ login: string }>;

type UserContainerProps = StateProps & DispatchProps & RouteProps;

export class UserContainer extends Component<UserContainerProps> {
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

const mapState = (state: AppState, props: UserContainerProps): StateProps => ({
    userLogin: props.match.params.login,
    userDetails: getUserDetailsByLogin(state, props.match.params.login),
    isFetching: getUserDetailsFetchingStatus(state),
});

const mapDispatch = (dispatch: AppDispatch): DispatchProps => ({
    getUserDetails: login => dispatch(getUserDetailsEffect(login)),
});

export const User = compose(
    withRouter,
    withState(mapState, mapDispatch)
)(UserContainer);
