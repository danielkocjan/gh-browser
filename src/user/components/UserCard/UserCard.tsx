import React from 'react';

import { UserData } from 'user/models/userModels';
import { UserHeader } from 'user/components/UserHeader/UserHeader';

import styles from './userCard.module.scss';

interface UserCardProps {
    user: UserData;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => (
    <li className={styles.card}>
        <UserHeader login={user.login} avatarUrl={user.avatarUrl} />
    </li>
);
