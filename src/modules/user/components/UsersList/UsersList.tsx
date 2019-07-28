import React from 'react';
import { Link } from 'react-router-dom';

import { UserData } from 'modules/user/models/userModels';
import { UserCard } from 'modules/user/components/UserCard/UserCard';
import { AppRoute } from 'common/config/routes';

interface UsersListProps {
    users: UserData[];
}

// todo: spinner hoc
export const UsersList: React.FC<UsersListProps> = ({ users }) => (
    <ul>
        {users && users.length > 0 ? (
            users.map(user => (
                <Link to={`${AppRoute.Users}/${user.login}`} key={user.id}>
                    <UserCard user={user} />
                </Link>
            ))
        ) : (
            <h1>
                No users found{' '}
                <span role="img" aria-label="Crying Cat Face">
                    😿
                </span>
            </h1>
        )}
    </ul>
);
