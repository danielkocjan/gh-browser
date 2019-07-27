import { User } from '../models/userModels';
import { pagination } from 'common/config/constants';

export const users = [
    {
        login: 'mojombo',
        avatarUrl: 'https://i.pravatar.cc/800',
        url: 'https://api.github.com/users/mojombo',
        htmlUrl: 'https://github.com/mojombo',
        reposUrl: 'https://api.github.com/users/mojombo/repos',
    },
    {
        login: 'defunkt',
        avatarUrl: 'https://i.pravatar.cc/640',
        url: 'https://api.github.com/users/defunkt',
        htmlUrl: 'https://github.com/defunkt',
        reposUrl: 'https://api.github.com/users/defunkt/repos',
    },
    {
        login: 'pjhyett',
        avatarUrl: 'https://i.pravatar.cc/480',
        url: 'https://api.github.com/users/pjhyett',
        htmlUrl: 'https://github.com/pjhyett',
        reposUrl: 'https://api.github.com/users/pjhyett/repos',
    },
];

export const usersMocks: User[] = Array(pagination.size)
    .fill('')
    .map((_, index) => ({
        ...users[index % users.length],
        id: index + 1,
    }));
