import * as loginNames from './actionNames/authNames';
import { LoginProps, LoginStateProps, UserProps } from '../types/loginTypes';

export const loginSuccessful = ({
  isLoggedIn,
  token,
  user,
}: LoginStateProps) => {
  return {
    type: loginNames.LOGIN_SUCCESSFUL,
    payload: { isLoggedIn, token, user },
  };
};

export const registerSuccessful = ({
  isLoggedIn,
  token,
  user,
}: LoginStateProps) => {
  return {
    type: loginNames.REGISTER_SUCCESSFUL,
    payload: { isLoggedIn, token, user },
  };
};

export const logout = () => {
  return {
    type: loginNames.LOGOUT,
    payload: '',
  };
};
