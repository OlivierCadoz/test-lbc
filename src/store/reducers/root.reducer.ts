import { combineReducers } from 'redux';
import { usersReducer } from './user.reducer';
import { messagesReducer } from './chat.reducer';

/**
 * ROOT REDUCER
 * Combine :
 * - User reducer
 * - Chat reducer
 * @param state 
 * @param action 
 * @returns 
 */
export const rootReducer = combineReducers({
  user: usersReducer,
  chat: messagesReducer,
});
