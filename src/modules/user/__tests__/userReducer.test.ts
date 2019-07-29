import * as actions from 'modules/user/actions/userActions';
import { userInitialState, userReducer } from 'modules/user/reducers/userReducer';
import { usersMocks } from 'modules/user/__mocks__/usersMocks';
import { userDetailsMock } from 'modules/user/__mocks__/userDetailsMocks';

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
