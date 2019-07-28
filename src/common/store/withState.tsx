import React, { ComponentType } from 'react';

import { withDefault } from 'common/helpers/withDefault';
import { AppState, AppDispatch, GlobalState } from './';

export type MapState<StateProps, OwnProps> = (state: AppState, ownProps: OwnProps) => StateProps;

export type MapDispatch<DispatchProps, OwnProps> = (
    dispatch: AppDispatch,
    ownProps: OwnProps
) => DispatchProps;

export const withState = <StateProps, DispatchProps, OwnProps = {}>(
    mapState?: MapState<StateProps, OwnProps>,
    mapDispatch?: MapDispatch<DispatchProps, OwnProps>
) => (Component: ComponentType<StateProps & DispatchProps & OwnProps>) => (props: OwnProps) => (
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
