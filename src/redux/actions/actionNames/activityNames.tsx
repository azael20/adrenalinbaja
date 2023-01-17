import { ActivityProps } from '../../types/loginTypes';

export const ACTIVITY_STARTED = 'ACTIVITY_STARTED';
export const ACTIVITY_FINISHED = 'ACTIVITY_FINISHED';

export const ERROR = 'ERROR';

export const CLEAR_ERROR = 'CLEAR_ERROR';

interface ActivityAttemptAction {
  type:
    | typeof ACTIVITY_STARTED
    | typeof ACTIVITY_FINISHED
    | typeof ERROR
    | typeof CLEAR_ERROR;
  payload: ActivityProps;
}

export type ActivityActionTypes = ActivityAttemptAction;
