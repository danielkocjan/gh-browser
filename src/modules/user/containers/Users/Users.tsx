import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'common/config/routes';

import styles from './users.module.scss';
import { usersMocks } from '../../__mocks__/usersMocks';
import { UserCard } from '../../components/UserCard/UserCard';

export const Users: React.FC = () => (
    <section className={styles.users}>
        {usersMocks.map(user => (
            <Link to={`${AppRoute.Users}/${user.id}`} key={user.id}>
                <UserCard user={user} />
            </Link>
        ))}
    </section>
);
