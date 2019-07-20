import React from 'react';

import { usersMocks } from '../../__mocks__/usersMocks';
import { UserCard } from '../../components/UserCard';

export const UsersContainer: React.FC = () => (
    <section>
        <h1>Users</h1>
        {usersMocks.map(user => (
            <UserCard key={user.id} user={user} />
        ))}
    </section>
);
