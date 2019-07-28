import React, { useReducer, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { UserDetails } from 'modules/user/components/UserDetails/UserDetails';
import { userReducer, userInitialState } from 'modules/user/userReducer';
import { getUserDetailsDispatch } from 'modules/user/userDispatchers';

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
        <div>Loading...</div>
    ) : userDetails && userDetails.login ? (
        <section className={styles.user}>
            <UserDetails user={userDetails} />
        </section>
    ) : (
        <div>No user with login {login} found</div>
    );
};

export const User = withRouter(UserContainer);
