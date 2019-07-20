import React from 'react';

import { User } from '../../models/userModels';

interface UserCardProps {
    user: User;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => (
    <article>
        <h1>{user.login}</h1>
        <figure>
            <img src={user.avatarUrl} alt={`@${user.login}`} />
        </figure>
    </article>
);
