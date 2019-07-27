import { Action } from 'common/store/appAction';
import { UserData } from './models/userModels';

export const GET_USERS_REQUESTED = '[USER] GET_USERS_REQUESTED';
export type GetUsersRequest = Action<typeof GET_USERS_REQUESTED>;
export const getUsersRequest = (): GetUsersRequest => ({
    type: GET_USERS_REQUESTED,
});

export const GET_USERS_SUCCEEDED = '[USER] GET_USERS_SUCCEEDED';
export type GetUsersSuccess = Action<typeof GET_USERS_SUCCEEDED, UserData[]>;
export const getUsersSuccess = (users: UserData[]): GetUsersSuccess => ({
    type: GET_USERS_SUCCEEDED,
    payload: users,
});

export const GET_USERS_FAILED = '[USER] GET_USERS_FAILED';
export type GetUsersFailure = Action<typeof GET_USERS_FAILED, string>;
export const getUsersFailure = (error: string): GetUsersFailure => ({
    type: GET_USERS_FAILED,
    payload: error,
});

export type UserAction = GetUsersRequest | GetUsersSuccess | GetUsersFailure;
