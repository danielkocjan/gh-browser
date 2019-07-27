import { Action } from 'common/store/appAction';
import { UserData } from './models/userModels';

export const GET_USERS = '[USER] GET_USERS';
export type GetUsers = Action<typeof GET_USERS>;
export const getUsers = (): GetUsers => ({
    type: GET_USERS,
});

export const GET_USERS_SUCCEEDED = '[USER] GET_USERS_SUCCEEDED';
export type GetUsersSuccess = Action<typeof GET_USERS_SUCCEEDED, UserData[]>;
export const getUsersSuccess = (payload: UserData[]): GetUsersSuccess => ({
    type: GET_USERS_SUCCEEDED,
    payload,
});

export const GET_USERS_FAILED = '[USER] GET_USERS_FAILED';
export type GetUsersFailure = Action<typeof GET_USERS_FAILED, string>;
export const getUsersFailure = (payload: string): GetUsersFailure => ({
    type: GET_USERS_FAILED,
    payload,
});

export type UserAction = GetUsers | GetUsersSuccess | GetUsersFailure;
