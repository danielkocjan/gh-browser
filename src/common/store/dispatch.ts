import { AppAction } from './appAction';
import { AppState } from './appReducer';

export type AppEffect = (dispatch: React.Dispatch<AppAction>, state: AppState) => void;

export type Dispatch = React.Dispatch<AppEffect | AppAction>;

export const appDispatch = (dispatch: React.Dispatch<AppAction>, state: AppState) => (
    input: AppEffect | AppAction
) => (input instanceof Function ? input(dispatch, state) : dispatch(input));
