import { HttpService } from 'common/services/HttpService';
import { API_URL, pagination } from 'common/config/constants';

import { UserData, UserDetailsData } from './models/userModels';

export class UserService {
    constructor(private readonly httpService: HttpService) {}

    public getUsers() {
        return this.httpService.get<UserData[]>(`${API_URL}/users?per_page=${pagination.size}`);
    }

    public getUserDetails(login: string) {
        return this.httpService.get<UserDetailsData>(`${API_URL}/users/${login}`);
    }
}
