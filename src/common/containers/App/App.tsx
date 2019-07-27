import React from 'react';

import styles from './app.module.scss';
import { Users } from 'modules/user/containers/Users/Users';

export const App: React.FC = () => (
    <>
        <h1>gh-browser</h1>
        <main className={styles.appView}>
            <Users />
        </main>
    </>
);
