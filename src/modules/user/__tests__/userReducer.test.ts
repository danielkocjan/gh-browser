import * as actions from '../userActions';
import { userInitialState, userReducer } from '../userReducer';
import { usersMocks } from '../__mocks__/usersMocks';
import { userDetailsMock } from '../__mocks__/userDetailsMocks';

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
