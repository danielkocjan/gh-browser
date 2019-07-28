import { UserData } from './userModels';

export interface SearchUsersResponse {
    totalCount: number;
    items: UserData[];
}
