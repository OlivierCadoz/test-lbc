import { getUsers } from '../../services/user.service';
import {
  fetchPublicMessages,
  fetchPrivateChat,
  postPublicMessages,
  postPrivateMessages,
} from '../../services/chat.service';
import { FETCH_USERS, SET_USERS } from '../action/user.action';
import {
  FETCH_PUBLIC_MESSAGES,
  FETCH_PRIVATE_CHAT,
  POST_PUBLIC_MESSAGES,
  POST_PRIVATE_MESSAGES,
  SET_PUBLIC_MESSAGES,
  ADD_PUBLIC_MESSAGES,
  ADD_PRIVATE_MESSAGES,
  ADD_PRIVATE_CHAT,
} from '../action/chat.action';
import { Action } from '../../models/actions.model';
import { store } from '..';
import { Chat, Message } from '../../models/chat.model';
import { User } from '../../models/users.model';

/**
 * REQUEST MIDDLEWARE
 * Listening to action :
 * - FETCH_USERS
 * - FETCH_PUBLIC_MESSAGES
 * - FETCH_PRIVATE_CHAT
 * - POST_PUBLIC_MESSAGES
 * @returns
 */
export const requestMiddleware =
  () => (next: any) => async (action: Action) => {
    const { type, payload } = action;

    if (type === FETCH_USERS) {
      const { data, status } = await getUsers();

      if (status === 200) {
        return next({
          type: SET_USERS,
          payload: data,
        });
      }
    }

    if (type === FETCH_PUBLIC_MESSAGES) {
      const { data, status } = await fetchPublicMessages();

      if (status === 200) {
        let { messages } = data;
        const { list } = store.getState().user;

        messages = messages.map((mes: Message) => ({
          ...mes,
          user: list.filter((user: User) => user.id === mes.authorId)[0],
        }));

        return next({
          type: SET_PUBLIC_MESSAGES,
          payload: messages,
        });
      }
    }

    if (type === FETCH_PRIVATE_CHAT) {
      const { data, status } = await fetchPrivateChat(payload);
      const { list } = store.getState().user;
      const { privateList }: any = store.getState().chat;

      const chat = data[0];
      chat.user = list.filter((user: User) => user.id === chat.authorId)[0];
      const hasChatAlready = !!privateList.find((c: Chat) => c.id === chat.id);

      if (status === 200 && !hasChatAlready) {
        return next({
          type: ADD_PRIVATE_CHAT,
          payload: chat,
        });
      }
    }

    if (type === POST_PUBLIC_MESSAGES) {
      const { status } = postPublicMessages(payload);

      if (status === 200) {
        return next({
          type: ADD_PUBLIC_MESSAGES,
          payload,
        });
      }
    }

    if (type === POST_PRIVATE_MESSAGES) {
      const { status } = postPrivateMessages(payload);

      if (status === 200) {
        return next({
          type: ADD_PRIVATE_MESSAGES,
          payload: payload,
        });
      }
    }

    return next(action);
  };