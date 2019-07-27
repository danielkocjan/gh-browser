import React from 'react';

import styles from './userHeader.module.scss';

interface UserHeaderProps {
    login: string;
    avatarUrl: string;
}

export const UserHeader: React.FC<UserHeaderProps> = ({ login, ...props }) => (
    <header className={styles.header}>
        <h1 className={styles.login}>{login}</h1>
        <img className={styles.avatar} src={props.avatarUrl} alt={login} />
    </header>
);
