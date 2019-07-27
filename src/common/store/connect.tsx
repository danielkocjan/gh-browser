import React from 'react';

import { AppState } from './appReducer';
import { GlobalState } from './store';
import { Dispatch } from './dispatch';

const withDefault = (map?: any) => (data: any, props: any) => (map ? map(data, props) : {});

// SP - state props, DP - dispatch props, OP - own props
export type MapState<SP, OP> = (state: AppState, ownProps: OP) => SP;
export type MapDispatch<DP, OP> = (dispatch: Dispatch, ownProps: OP) => DP;

export const connect = <SP, DP, OP = {}>(
    mapState?: MapState<SP, OP>,
    mapDispatch?: MapDispatch<DP, OP>
) => (Component: React.ComponentType<SP & DP & OP>) => (props: OP) => (
    <GlobalState.Consumer>
        {({ state, dispatch }) => (
            <Component
                {...props}
                {...withDefault(mapState)(state, props)}
                {...withDefault(mapDispatch)(dispatch, props)}
            />
        )}
    </GlobalState.Consumer>
);
