import { Action } from 'common/store';
import { UserData, UserDetailsData } from 'modules/user/models/userModels';

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

export const SEARCH_USERS_REQUESTED = '[USER] SEARCH_USERS_REQUESTED';
export type SearchUsersRequest = Action<typeof SEARCH_USERS_REQUESTED>;
export const searchUsersRequest = (): SearchUsersRequest => ({
    type: SEARCH_USERS_REQUESTED,
});

export const SEARCH_USERS_SUCCEEDED = '[USER] SEARCH_USERS_SUCCEEDED';
export type SearchUsersSuccess = Action<typeof SEARCH_USERS_SUCCEEDED, UserData[]>;
export const searchUsersSuccess = (users: UserData[]): SearchUsersSuccess => ({
    type: SEARCH_USERS_SUCCEEDED,
    payload: users,
});

export const SEARCH_USERS_FAILED = '[USER] SEARCH_USERS_FAILED';
export type SearchUsersFailure = Action<typeof SEARCH_USERS_FAILED, string>;
export const searchUsersFailure = (error: string): SearchUsersFailure => ({
    type: SEARCH_USERS_FAILED,
    payload: error,
});

export const GET_USER_DETAILS_REQUESTED = '[USER] GET_USER_DETAILS_REQUESTED';
export type GetUserDetailsRequest = Action<typeof GET_USER_DETAILS_REQUESTED>;
export const getUserDetailsRequest = (): GetUserDetailsRequest => ({
    type: GET_USER_DETAILS_REQUESTED,
});

export const GET_USER_DETAILS_SUCCEEDED = '[USER] GET_USER_DETAILS_SUCCEEDED';
export type GetUserDetailsSuccess = Action<typeof GET_USER_DETAILS_SUCCEEDED, UserDetailsData>;
export const getUserDetailsSuccess = (userDetails: UserDetailsData): GetUserDetailsSuccess => ({
    type: GET_USER_DETAILS_SUCCEEDED,
    payload: userDetails,
});

export const GET_USER_DETAILS_FAILED = '[USER] GET_USER_DETAILS_FAILED';
export type GetUserDetailsFailure = Action<typeof GET_USER_DETAILS_FAILED, string>;
export const getUserDetailsFailure = (error: string): GetUserDetailsFailure => ({
    type: GET_USER_DETAILS_FAILED,
    payload: error,
});

export type UserAction =
    | GetUsersRequest
    | GetUsersSuccess
    | GetUsersFailure
    | SearchUsersRequest
    | SearchUsersSuccess
    | SearchUsersFailure
    | GetUserDetailsRequest
    | GetUserDetailsSuccess
    | GetUserDetailsFailure;
