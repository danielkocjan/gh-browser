import React, { useEffect, useCallback } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { Spinner } from 'common/components/Spinner/Spinner';
import { UserDetails } from 'user/components/UserDetails/UserDetails';
import * as actions from 'user/actions/userActions';
import { useUserState } from 'user/userContext';
import { rootService } from 'common/services/rootService';
import { UserDetailsData } from 'user/models/userModels';

import styles from './user.module.scss';

type RouteProps = RouteComponentProps<{ login: string }>;

const UserContainer: React.FC<RouteProps> = ({
    match: {
        params: { login },
    },
}) => {
    const [{ userDetails, isFetchingUserDetails }, dispatch] = useUserState();

    const getUserDetails = useCallback(
        (login: string) => {
            dispatch(actions.getUserDetailsRequest());

            return rootService.userService
                .getUserDetails(login)
                .then((user: UserDetailsData) => dispatch(actions.getUserDetailsSuccess(user)))
                .catch(() => dispatch(actions.getUserDetailsFailure('Failed to get user details')));
        },
        [dispatch]
    );

    useEffect(() => {
        getUserDetails(login);
    }, [getUserDetails, login]);

    return isFetchingUserDetails ? (
        <Spinner />
    ) : userDetails && userDetails.login ? (
        <section className={styles.user}>
            <UserDetails user={userDetails} />
        </section>
    ) : (
        <h1>No user with login {login} found</h1>
    );
};

export const User = withRouter(UserContainer);
