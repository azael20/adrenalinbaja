import * as activityNames from '../actions/actionNames/activityNames';
import { ActivityActionTypes } from '../actions/actionNames/activityNames';
import { ActivityProps } from '../types/loginTypes';

const initialState: ActivityProps = {
  isLoading: false,
  errorMessage: '',
};

export const activityReducer = (
  state: ActivityProps = initialState,
  action: ActivityActionTypes
) => {
  switch (action.type) {
    case activityNames.ACTIVITY_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case activityNames.ACTIVITY_FINISHED:
      return {
        ...state,
        isLoading: false,
      };
    case activityNames.ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    case activityNames.CLEAR_ERROR:
      return {
        ...state,
        errorMessage: '',
      };
    default:
      return state;
  }
};
