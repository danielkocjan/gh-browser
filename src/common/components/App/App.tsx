import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { AppRoute } from 'common/config/routes';
import styles from './app.module.scss';

import { UserProvider } from 'user/userContext';
import { Users } from 'user/components/Users/Users';
import { User } from 'user/components/User/User';

export const App: React.FC = () => (
    <Router>
        <UserProvider>
            <main className={styles.appView}>
                <Switch>
                    <Route path={AppRoute.Users} exact component={Users} />
                    <Route path={`${AppRoute.Users}/:login`} component={User} />
                    <Redirect to={AppRoute.Users} />
                </Switch>
            </main>
        </UserProvider>
    </Router>
);
