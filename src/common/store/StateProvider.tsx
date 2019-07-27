import React, { createContext, useContext, useReducer, ReducerState } from 'react';
import { AppReducer } from './appReducer';

export const GlobalState = createContext({});

interface StateProviderProps {
    reducer: AppReducer;
    initialState: ReducerState<AppReducer>;
}

export const StateProvider: React.FC<StateProviderProps> = ({
    reducer,
    initialState,
    children,
}) => (
    <GlobalState.Provider value={useReducer(reducer, initialState)}>
        {children}
    </GlobalState.Provider>
);

export const useGlobalState = () => useContext(GlobalState);
