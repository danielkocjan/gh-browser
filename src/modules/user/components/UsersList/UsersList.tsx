import React from 'react';
import { Link } from 'react-router-dom';

import { UserData } from 'modules/user/models/userModels';
import { UserCard } from 'modules/user/components/UserCard/UserCard';
import { AppRoute } from 'common/config/routes';

interface UsersListProps {
    users: UserData[];
    isFetching: boolean;
}

// todo: spinner hoc
export const UsersList: React.FC<UsersListProps> = ({ isFetching, users }) => (
    <ul>
        {isFetching
            ? 'Loading...'
            : users &&
              users.length &&
              users.map(user => (
                  <Link to={`${AppRoute.Users}/${user.login}`} key={user.id}>
                      <UserCard user={user} />
                  </Link>
              ))}
    </ul>
);
