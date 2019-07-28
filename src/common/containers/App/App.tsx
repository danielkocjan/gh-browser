import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { AppRoute } from 'common/config/routes';
import { StateProvider, appReducer, appInitialState } from 'common/store';
import styles from './app.module.scss';

import { Users } from 'modules/user/containers/Users/Users';
import { User } from 'modules/user/containers/User/User';

export const App: React.FC = () => (
    <StateProvider initialState={appInitialState} reducer={appReducer}>
        <Router>
            <main className={styles.appView}>
                <Switch>
                    <Route path={AppRoute.Users} exact component={Users} />
                    <Route path={`${AppRoute.Users}/:login`} component={User} />
                    <Redirect to={AppRoute.Users} />
                </Switch>
            </main>
        </Router>
    </StateProvider>
);
