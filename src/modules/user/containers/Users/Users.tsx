import React from 'react';

import styles from './users.module.scss';
import { usersMocks } from '../../__mocks__/usersMocks';
import { UserCard } from '../../components/UserCard/UserCard';

export const Users: React.FC = () => (
    <section className={styles.users}>
        {usersMocks.map(user => (
            <UserCard key={user.id} user={user} />
        ))}
    </section>
);
