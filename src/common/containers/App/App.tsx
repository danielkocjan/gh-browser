import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { AppRoute } from 'common/config/routes';
import styles from './app.module.scss';

import { Users } from 'modules/user/containers/Users/Users';
import { User } from 'modules/user/containers/User/User';

export const App: React.FC = () => (
    <Router>
        <h1>gh-browser</h1>
        <main className={styles.appView}>
            <Switch>
                <Route path={AppRoute.Users} exact component={Users} />
                <Route path={`${AppRoute.Users}/:id`} component={User} />
                <Redirect to={AppRoute.Users} />
            </Switch>
        </main>
    </Router>
);
