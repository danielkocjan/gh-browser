import React from 'react';

import styles from './userCard.module.scss';
import { UserData } from '../../models/userModels';
import { UserHeader } from '../UserHeader/UserHeader';

interface UserCardProps {
    user: UserData;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => (
    <article className={styles.card}>
        <UserHeader login={user.login} avatarUrl={user.avatarUrl} />
    </article>
);
