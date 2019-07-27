import React from 'react';

import styles from './userDetails.module.scss';
import { UserDetailsData } from '../../models/userModels';

interface UserDetailsProps {
    user: UserDetailsData;
}

export const UserDetails: React.FC<UserDetailsProps> = ({ user }) => (
    <article className={styles.userDetails}>
        <header className={styles.header}>
            <h1 className={styles.headerLogin}>{user.login}</h1>
            {user.name && <h2>{user.name}</h2>}
            <img className={styles.loginAvatar} src={user.avatarUrl} alt={user.login} />
        </header>
    </article>
);
