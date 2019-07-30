import { HttpService } from './HttpService';

import { UserService } from 'user/services/UserService';

const httpService = new HttpService();
const userService = new UserService(httpService);

export const rootService = {
    httpService,
    userService,
};
