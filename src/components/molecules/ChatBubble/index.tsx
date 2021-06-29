import React from 'react';
import { Message } from '../../../models/chat.model';
import {
  ChatBubbleWrapper,
  ChatUserName,
  ChatUserMessage,
} from './ChatBubble.style';

export const ChatBubble = ({ message }: { message: Message }) => {
  const { user = { firstName: '', lastName: '' }, message: mes } = message;
  const self = !user;
  console.log(mes)

  return (
    <ChatBubbleWrapper className={self ? 'self' : ''}>
      <ChatUserName>
        {self ? 'You' : `${user.firstName} ${user.lastName}`}
      </ChatUserName>
      <ChatUserMessage>{mes}</ChatUserMessage>
    </ChatBubbleWrapper>
  );
};
