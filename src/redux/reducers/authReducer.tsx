import * as loginNames from '../actions/actionNames/authNames';
import { LoginStateProps } from '../types/loginTypes';
import { AuthActionTypes } from '../actions/actionNames/authNames';

const initialState: LoginStateProps = {
  isLoggedIn: false,
  token: '',
  user: {},
};

export const authReducer = (
  state: LoginStateProps = initialState,
  action: AuthActionTypes
) => {
  switch (action.type) {
    case loginNames.LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case loginNames.REGISTER_SUCCESSFUL:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    case loginNames.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        token: '',
        user: {},
      };
    default:
      return state;
  }
};
