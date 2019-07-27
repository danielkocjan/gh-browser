import React from 'react';

import styles from './userHeader.module.scss';

interface UserHeaderProps {
    login: string;
    avatarUrl: string;
}

export const UserHeader: React.FC<UserHeaderProps> = props => (
    <header className={styles.header}>
        <h1 className={styles.login}>{props.login}</h1>
        <img className={styles.loginAvatar} src={props.avatarUrl} alt={props.login} />
    </header>
);
