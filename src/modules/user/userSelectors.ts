import { AppState } from 'common/store';

export const getUsers = ({ user }: AppState) => user.users;

export const getUsersFetchingStatus = ({ user }: AppState) => user.isFetchingUsers;

export const getUserDetailsByLogin = ({ user }: AppState, login: string) =>
    user.usersDetails.find(user => user.login === login);

export const getUserDetailsFetchingStatus = ({ user }: AppState) => user.isFetchingUserDetails;
