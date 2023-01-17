import * as activityNames from './actionNames/activityNames';

export const activityStarted = (isLoading = false) => ({
  type: activityNames.ACTIVITY_STARTED,
  payload: { isLoading: isLoading },
});

export const activityFinished = (isLoading = false) => ({
  type: activityNames.ACTIVITY_FINISHED,
  payload: { isLoading: isLoading },
});

//Error actions

export const setError = (errorMessage: string, title?: string) => ({
  type: activityNames.ERROR,
  payload: { title, errorMessage },
});

export const clearError = () => ({
  type: activityNames.CLEAR_ERROR,
});
