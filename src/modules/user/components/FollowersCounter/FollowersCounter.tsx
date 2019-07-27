import React from 'react';

import styles from './followersCounter.module.scss';

interface FollowersCounterProps {
    followers: number;
    following: number;
}

export const FollowersCounter: React.FC<FollowersCounterProps> = props => (
    <aside className={styles.followersCounter}>
        <span>Followers: {props.followers}</span>
        <span>Following: {props.following}</span>
    </aside>
);
