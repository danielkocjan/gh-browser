import React from 'react';

import { OutsideLink } from 'common/components/OutsideLink';
import { UserHeader } from 'modules/user/components/UserHeader/UserHeader';
import { FollowersCounter } from 'modules/user/components/FollowersCounter/FollowersCounter';
import { UserRepos } from 'modules/user/components/UserRepos/UserRepos';
import { UserDetailsData } from 'modules/user/models/userModels';

import styles from './userDetails.module.scss';

interface UserDetailsProps {
    user: UserDetailsData;
}

export const UserDetails: React.FC<UserDetailsProps> = ({ user }) => (
    <article className={styles.userDetails}>
        <UserHeader login={user.login} avatarUrl={user.avatarUrl} />
        {/* // todo: split this into smaller components */}
        <main className={styles.content}>
            {user.bio && <p className={styles.bio}>{user.bio}</p>}

            <section className={styles.additionalInfo}>
                <h1>User details</h1>
                <div className={styles.additionalInfoRow}>
                    {user.location && <span>{user.location}</span>}
                    {user.email && <span>{user.email}</span>}
                </div>
                <div className={styles.additionalInfoRow}>
                    {user.company && <span>{user.company}</span>}
                    {user.blog && <OutsideLink to={user.blog}>{user.blog}</OutsideLink>}
                </div>
                <FollowersCounter followers={user.followers} following={user.following} />
            </section>
            <UserRepos login={user.login} />
        </main>
        <footer className={styles.footer}>
            <OutsideLink to={user.htmlUrl}>View profile on Github for more details</OutsideLink>
        </footer>
    </article>
);
