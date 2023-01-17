import { setError } from '../redux/actions/activityActions';
import { useDispatch } from 'react-redux';
import { strings } from '../strings';

export const useCheckCredentials = () => {
  const dispatch = useDispatch();

  const validateEmail = (email: string) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(email);
  };

  const validateInput = (
    value: string,
    length: number,
    type: 'password' | 'name' | 'lastname'
  ) => {
    if (value.length < length) {
      dispatch(
        setError(
          type === 'password'
            ? strings.passwordError
            : type === 'name'
            ? strings.nameError
            : strings.lastNameError
        )
      );
      return false;
    }
    return true;
  };

  const checkConfirmPassword = (password: string, confirmPassword: string) => {
    if (confirmPassword !== password || confirmPassword.length === 0) {
      dispatch(setError(strings.confirmPasswordError));
      return false;
    }
    return true;
  };

  return {
    validateEmail,
    validateInput,
    checkConfirmPassword,
  };
};
