import { LoginProps, RegisterProps } from '../redux/types/loginTypes';
import { useDispatch } from 'react-redux';

import auth from '@react-native-firebase/auth';
import {
  loginSuccessful,
  registerSuccessful,
} from '../redux/actions/loginActions';
import {
  activityFinished,
  activityStarted,
  setError,
} from '../redux/actions/activityActions';

const useAuthService = () => {
  const dispatch = useDispatch();

  const loginService = (input: LoginProps) => {
    dispatch(activityStarted(true));

    const { email, password } = input;

    return auth()
      .signInWithEmailAndPassword(email, password)
      .then(cred => {
        dispatch(activityFinished(false));
        if (cred.user) {
          auth().onAuthStateChanged((data: any) => {
            const fullName = data?.displayName?.split(' ');

            dispatch(
              loginSuccessful({
                isLoggedIn: true,
                token: data.uid,
                user: {
                  name: fullName[0],
                  lastName: fullName[1],
                  username: data.email.substring(data.email.indexOf('@'), 0),
                  email: data.email,
                },
              })
            );
          });
        }
      })
      .catch(err => {
        dispatch(activityFinished(false));
        if (err.code === 'auth/user-not-found') {
          dispatch(setError('User not found.'));
          return;
        }
        dispatch(setError(err.message));
      });
  };

  const registerService = (input: RegisterProps) => {
    dispatch(activityStarted(true));
    const { name, lastName, email, password } = input;

    return auth()
      .createUserWithEmailAndPassword(email, password)
      .then(cred => {
        if (cred.user) {
          cred.user
            .updateProfile({
              displayName: name + ' ' + lastName,
            })
            .then(() => {
              auth().onAuthStateChanged((data: any) => {
                dispatch(activityFinished(false));
                if (data) {
                  const fullName = data?.displayName?.split(' ') || '';

                  dispatch(
                    registerSuccessful({
                      isLoggedIn: true,
                      token: data.uid,
                      user: {
                        name: fullName[0],
                        lastName: fullName[1],
                        username: data.email.substring(
                          data.email.indexOf('@'),
                          0
                        ),
                        email: data.email,
                      },
                    })
                  );
                }
              });
            })
            .catch(error => {
              dispatch(activityFinished(false));
              dispatch(setError(error.message));
            });
        }
      })
      .catch(err => {
        dispatch(activityFinished(false));
        if (err.code === 'auth/email-already-in-use') {
          dispatch(setError('The email address is already in use.'));
          return;
        }
        dispatch(setError(err.message));
      });
  };

  return {
    loginService,
    registerService,
  };
};

export default useAuthService;
