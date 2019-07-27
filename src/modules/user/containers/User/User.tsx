import React from 'react';

import styles from './user.module.scss';
import { userDetailsMock } from '../../__mocks__/userDetailsMocks';
import { UserDetails } from '../../components/UserDetails/UserDetails';

export const User: React.FC = () => (
    <section className={styles.user}>
        <UserDetails user={userDetailsMock} />
    </section>
);
