import { HttpService } from 'common/services/HttpService';
import { API_URL, pagination, reposCount } from 'common/config/constants';

import { UserData, UserDetailsData, UserRepoData } from 'user/models/userModels';
import { SearchResponse, SearchResource } from 'user/models/userRequestModels';

export class UserService {
    constructor(private readonly httpService: HttpService) {}

    public getUsers() {
        return this.httpService.get<UserData[]>(`${API_URL}/users?per_page=${pagination.size}`);
    }

    public getUserDetails(login: string) {
        return this.httpService.get<UserDetailsData>(`${API_URL}/users/${login}`);
    }

    public searchUsers(searchTerm: string) {
        return this.httpService.get<SearchResponse<UserData[]>>(
            `${API_URL}/search/users?per_page=${pagination.size}&q=${searchTerm}`
        );
    }

    public getUserRepos(login: string) {
        const url = `${API_URL}/search/repositories`;
        const query = `?q=user:${login}&per_page=${reposCount}&sort=stars&order=desc`;

        return this.httpService.get<SearchResponse<UserRepoData[]>>(`${url}${query}`);
    }

    // todo: finish url serialization method
    private searchUrl(resource: SearchResource, params: Record<string, string>) {
        const query = Object.entries(params);

        return `${API_URL}/search/${resource}/${query}`;
    }
}
