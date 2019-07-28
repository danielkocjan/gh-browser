import React from 'react';

import styles from './spinner.module.scss';

import { ReactComponent as SpinnerIcon } from './spinner.svg';

export const Spinner: React.FC = () => (
    <div className={styles.wrapper}>
        <SpinnerIcon className={styles.spinner} />
    </div>
);
