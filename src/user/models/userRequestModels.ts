export interface SearchResponse<T> {
    totalCount: number;
    items: T;
}

export enum SearchResource {
    Repos = 'repositories',
    Users = 'users',
}
