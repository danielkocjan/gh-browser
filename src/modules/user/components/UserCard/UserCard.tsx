import React from 'react';

import styles from './userCard.module.scss';
import { UserData } from '../../models/userModels';

interface UserCardProps {
    user: UserData;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => (
    <article className={styles.card}>
        <header className={styles.cardHeader}>
            <h1 className={styles.login}>{user.login}</h1>
            <img className={styles.loginAvatar} src={user.avatarUrl} alt={user.login} />
        </header>
    </article>
);
