import { createContext } from 'react';

import { AppState, appInitialState } from './appReducer';
import { AppAction } from './appAction';

export interface Context {
    state: AppState;
    dispatch: React.Dispatch<AppAction>;
}

export const GlobalState = createContext<Context>({
    state: appInitialState,
    dispatch: () => {},
});
