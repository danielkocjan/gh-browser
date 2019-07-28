import React, { useContext, ReducerState, Reducer, useReducer } from 'react';

import { AppReducer } from './appReducer';
import { GlobalState } from './appContext';
import { AppAction, appDispatch } from './appAction';

interface StateProviderProps {
    reducer: Reducer<ReturnType<AppReducer>, AppAction>;
    initialState: ReducerState<AppReducer>;
}

export const StateProvider: React.FC<StateProviderProps> = ({
    reducer,
    initialState,
    children,
}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalState.Provider value={{ state, dispatch: appDispatch(dispatch, state) }}>
            {children}
        </GlobalState.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalState);
