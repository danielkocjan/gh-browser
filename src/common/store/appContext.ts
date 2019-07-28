import { createContext } from 'react';

import { AppState, appInitialState } from './appReducer';
import { AppDispatch } from './appAction';

export interface Context {
    state: AppState;
    dispatch?: AppDispatch;
}

export const GlobalState = createContext<Context>({
    state: appInitialState,
});
