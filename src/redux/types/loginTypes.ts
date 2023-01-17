export interface LoginReducerProps {
  user: UserProps;
  token: string;
}

export interface UserProps {
  token: string;
  name: string;
  lastName: string;
  username: string;
  email: string;
}

export interface LoginStateProps {
  isLoggedIn: boolean;
  user: UserProps | object;
  token: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface RegisterProps {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface ActivityProps {
  isLoading: boolean;
  errorMessage: string;
}
