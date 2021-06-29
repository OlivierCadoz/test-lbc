import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Message } from '../../../models/chat.model';
import { useAppDispatch, useKeepScrollDown } from '../../../services/hook.service';
import {
  FETCH_PUBLIC_MESSAGES,
  POST_PUBLIC_MESSAGES,
} from '../../../store/action/chat.action';
import { ChatForm } from '../../atoms/ChatForm';
import { ChatBubble } from '../../molecules/ChatBubble';
import { MessageList, PublicChatContainer } from './PublicChat.style';

const addPublicMessage = (dispatch: Dispatch<any>) => (value: string) =>
  dispatch({
    type: POST_PUBLIC_MESSAGES,
    payload: {
      authorId: 0,
      message: value,
      private: false,
    },
  });

export const PublicChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector(({ chat }: any) => chat.publicList);

  useAppDispatch(FETCH_PUBLIC_MESSAGES)

  useKeepScrollDown('public-chat', messages);

  return (
    <PublicChatContainer>
      <MessageList id="public-chat">
        {messages &&
          messages.map((mes: Message) => (
            <li key={`public-${mes.id}`} className={!mes.user ? 'self' : ''}>
              <ChatBubble message={mes} />
            </li>
          ))}
      </MessageList>

      <ChatForm submit={addPublicMessage(dispatch)} />
    </PublicChatContainer>
  );
};
