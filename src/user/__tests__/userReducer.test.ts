import * as actions from 'user/actions/userActions';
import { userInitialState, userReducer } from 'user/reducers/userReducer';
import { usersMocks } from 'user/__mocks__/usersMocks';
import { userDetailsMock } from 'user/__mocks__/userDetailsMocks';

describe('user reducer', () => {
    it('should handle getUsersSuccess', () => {
        expect(userReducer(userInitialState, actions.getUsersSuccess(usersMocks))).toEqual({
            ...userInitialState,
            users: usersMocks,
        });
    });

    it('should handle getUserDetailsSuccess', () => {
        expect(
            userReducer(userInitialState, actions.getUserDetailsSuccess(userDetailsMock))
        ).toEqual({
            ...userInitialState,
            userDetails: userDetailsMock,
        });
    });
});
