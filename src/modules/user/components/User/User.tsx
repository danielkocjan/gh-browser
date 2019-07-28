import React, { useReducer, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { Spinner } from 'common/components/Spinner/Spinner';
import { UserDetails } from 'modules/user/components/UserDetails/UserDetails';
import { userReducer, userInitialState } from 'modules/user/reducers/userReducer';
import { getUserDetailsDispatch } from 'modules/user/dispatchers/userDispatchers';

import styles from './user.module.scss';

type RouteProps = RouteComponentProps<{ login: string }>;

const UserContainer: React.FC<RouteProps> = ({
    match: {
        params: { login },
    },
}) => {
    const [{ userDetails, isFetchingUserDetails }, dispatch] = useReducer(
        userReducer,
        userInitialState
    );

    useEffect(() => {
        getUserDetailsDispatch(dispatch, login);
    }, [login]);

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
