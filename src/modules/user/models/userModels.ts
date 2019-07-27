export interface UserData {
    login: string;
    id: number;
    avatarUrl: string;
    url: string;
    htmlUrl: string;
    reposUrl: string;
}

export interface UserDetailsData extends UserData {
    name: string;
    blog: string;
    hireable: boolean;
    publicRepos: number;
    followers: number;
    following: number;
    email?: string;
    company?: string;
    location?: string;
    bio?: string;
}
