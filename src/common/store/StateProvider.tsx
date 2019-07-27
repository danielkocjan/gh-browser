import React, { useContext, ReducerState, Reducer } from 'react';

import { AppReducer } from './appReducer';
import { GlobalState } from './store';
import { AppAction } from './appAction';
import { appDispatch } from './dispatch';

interface StateProviderProps {
    reducer: Reducer<ReturnType<AppReducer>, AppAction>;
    initialState: ReducerState<AppReducer>;
}

export const StateProvider: React.FC<StateProviderProps> = ({
    reducer,
    initialState,
    children,
}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <GlobalState.Provider value={{ state, dispatch: appDispatch(dispatch, state) }}>
            {children}
        </GlobalState.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalState);
