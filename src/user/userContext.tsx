import React, { createContext, useContext, useReducer, Dispatch } from 'react';

import { UserAction } from './actions/userActions';
import { userInitialState, userReducer, UserState } from './reducers/userReducer';

export const UserContext = createContext<[UserState, Dispatch<UserAction>]>([
    userInitialState,
    () => {},
]);

export const UserProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, userInitialState);

    return <UserContext.Provider value={[state, dispatch]}>{children}</UserContext.Provider>;
};

export const useUserState = () => useContext(UserContext);
