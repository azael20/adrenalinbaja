import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { activityReducer } from './activityReducer';

export const rootReducer = combineReducers({
  sessionState: authReducer,
  activityState: activityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
