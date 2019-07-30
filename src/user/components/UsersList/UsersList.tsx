import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'common/config/routes';
import { UserData } from 'user/models/userModels';
import { UserCard } from 'user/components/UserCard/UserCard';

interface UsersListProps {
    users: UserData[];
}

export const UsersList: React.FC<UsersListProps> = ({ users }) => (
    <ul>
        {users && users.length > 0 ? (
            users.map(user => (
                <Link to={`${AppRoute.Users}/${user.login}`} key={user.id}>
                    <UserCard user={user} />
                </Link>
            ))
        ) : (
            <h1>No users found</h1>
        )}
    </ul>
);
