import {
  ActivityProps,
  LoginProps, LoginReducerProps,
  RegisterProps,
  UserProps,
} from '../../types/loginTypes';

export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';

export const REGISTER_ATTEMPT = 'REGISTER_ATTEMPT';
export const REGISTER_SUCCESSFUL = 'REGISTER_SUCCESSFUL';

export const LOGOUT = 'LOGOUT';

interface LoginAttemptAction {
  type: typeof LOGIN_SUCCESSFUL;
  payload: LoginReducerProps;
}

interface RegisterAttemptAction {
  type: typeof REGISTER_SUCCESSFUL;
  payload: any;
}

interface LogoutAttemptAction {
  type: typeof LOGOUT;
  payload: UserProps;
}

export type AuthActionTypes =
  | LoginAttemptAction
  | RegisterAttemptAction
  | LogoutAttemptAction;
