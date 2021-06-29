import { Action } from '../../models/actions.model';
import { SET_USERS } from '../action/user.action';

const initialState = {
  list: [],
};

/**
 * USER REDUCER
 * Listening to action :
 * - SET_USERS
 * @param state 
 * @param action 
 * @returns 
 */
export const usersReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        list: payload
      }
    default:
      return state;
  }
};
