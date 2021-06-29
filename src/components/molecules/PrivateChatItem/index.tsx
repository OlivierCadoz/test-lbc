import React, { Dispatch, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Chat, Message } from '../../../models/chat.model';
import { useKeepScrollDown } from '../../../services/hook.service';
import {
  POST_PRIVATE_MESSAGES,
  CLOSE_CHAT,
} from '../../../store/action/chat.action';
import { ChatForm } from '../../atoms/ChatForm';
import { ChatUserMessage } from '../ChatBubble/ChatBubble.style';
import {
  ChatWrapper,
  ChatHeader,
  ChatList,
  ChatContent,
  ChatCloseButton,
} from './PrivateChatItem.style';

const addPrivateMessage =
  (dispatch: Dispatch<any>) => (chatId: number) => (value: string) =>
    dispatch({
      type: POST_PRIVATE_MESSAGES,
      payload: {
        chatId,
        authorId: 0,
        message: value,
        private: true,
      },
    });

export const PrivateChatItem = ({ chat }: { chat: Chat }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const { id, messages, user = { firstName: '', lastName: '', id: 0 } } = chat;

  const closeChat = (event: any) => {
    dispatch({ type: CLOSE_CHAT, payload: { id } });
    event.stopPropagation();
  };

  useKeepScrollDown(`chat-list-${id}`, messages.length);

  return (
    <ChatWrapper>
      <ChatHeader onClick={() => setActive(!active)}>
        <span>
          {user.firstName} {user.lastName}
        </span>
        <ChatCloseButton onClick={closeChat} />
      </ChatHeader>
      <ChatContent className={active ? 'active' : ''}>
        <ChatList id={`chat-list-${id}`}>
          {messages &&
            messages.map((mes: Message) => (
              <li
                key={`private-${mes.id}`}
                className={user.id !== mes.authorId ? 'self' : ''}
              >
                <ChatUserMessage>{mes.message}</ChatUserMessage>
              </li>
            ))}
        </ChatList>
        <ChatForm submit={addPrivateMessage(dispatch)(id)} />
      </ChatContent>
    </ChatWrapper>
  );
};
