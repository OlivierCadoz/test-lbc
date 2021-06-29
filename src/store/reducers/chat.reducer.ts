import { Action } from '../../models/actions.model';
import { Chat } from '../../models/chat.model';
import {
  SET_PUBLIC_MESSAGES,
  ADD_PUBLIC_MESSAGES,
  ADD_PRIVATE_MESSAGES,
  ADD_PRIVATE_CHAT,
  CLOSE_CHAT,
} from '../action/chat.action';

export const initialState = {
  publicList: [] as Chat[],
  privateList: [],
};

/**
 * CHAT REDUCER
 * Listening to action :
 * - SET_PUBLIC_MESSAGES
 * - ADD_PUBLIC_MESSAGES
 * - ADD_PRIVATE_CHAT
 * - ADD_PRIVATE_MESSAGES
 * - CLOSE_CHAT
 * @param state
 * @param action
 * @returns
 */
export const messagesReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  const {
    publicList,
    privateList,
  }: { publicList: Chat[]; privateList: Chat[] } = state;
  switch (type) {
    case SET_PUBLIC_MESSAGES:
      return {
        ...state,
        publicList: payload,
      };
    case ADD_PUBLIC_MESSAGES:
      return {
        ...state,
        publicList: [
          ...publicList,
          {
            id: publicList.length,
            ...payload,
          },
        ],
      };
    case ADD_PRIVATE_CHAT:
      return {
        ...state,
        privateList: [payload, ...privateList].slice(0, 2),
      };
    case ADD_PRIVATE_MESSAGES:
      const { authorId, message, chatId } = payload;
      const chatIndex = privateList.findIndex((c: Chat) => c.id === chatId);
      const chat = privateList[chatIndex];

      chat.messages.push({
        authorId,
        message,
        id: chat.messages.length,
      });

      return {
        ...state,
        privateList: [...privateList],
      };
    case CLOSE_CHAT:
      const { id } = payload;
      const index = privateList.findIndex((c: Chat) => c.id === id);
      privateList.splice(index, 1);

      return {
        ...state,
        privateList: [...privateList],
      };
    default:
      return state;
  }
};
