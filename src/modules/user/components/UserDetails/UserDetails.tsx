import React from 'react';

import styles from './userDetails.module.scss';
import { UserDetailsData } from '../../models/userModels';
import { UserHeader } from '../UserHeader/UserHeader';

interface UserDetailsProps {
    user: UserDetailsData;
}

export const UserDetails: React.FC<UserDetailsProps> = ({ user }) => (
    <article className={styles.userDetails}>
        <UserHeader login={user.login} avatarUrl={user.avatarUrl} />
    </article>
);
