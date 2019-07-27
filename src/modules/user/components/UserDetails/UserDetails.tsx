import React from 'react';

import { OutsideLink } from 'common/components/OutsideLink';
import { UserHeader } from 'modules/user/components/UserHeader/UserHeader';
import { FollowersCounter } from 'modules/user/components/FollowersCounter/FollowersCounter';
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

            <aside className={styles.additionalInfo}>
                <div className={styles.additionalInfoRow}>
                    {user.location && <span>{user.location}</span>}
                    {user.email && <span>{user.email}</span>}
                </div>
                <div className={styles.additionalInfoRow}>
                    {user.company && <span>{user.company}</span>}
                    {user.blog && <OutsideLink to={user.blog}>{user.blog}</OutsideLink>}
                </div>
                <FollowersCounter followers={user.followers} following={user.following} />
            </aside>
            <div>repositories...</div>
        </main>
        <footer className={styles.footer}>
            <OutsideLink to={user.htmlUrl}>View profile on Github for more details</OutsideLink>
        </footer>
    </article>
);
