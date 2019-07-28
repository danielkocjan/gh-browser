import { HttpService } from './HttpService';

import { UserService } from 'modules/user/UserService';

const httpService = new HttpService();
const userService = new UserService(httpService);

export const rootService = {
    httpService,
    userService,
};
