import React from 'react';
import { Chat } from '../../../models/chat.model';
import { PrivateChatItem } from '../../molecules/PrivateChatItem';
import { ChatListContainer } from './PrivateChatList.style';

export const PrivateChatList = ({ chatList }: { chatList: Chat[] }) => (
  <ChatListContainer>
    {chatList &&
      chatList.map((item: Chat) => (
        <li key={`private-chat-${item.id}`}>
          <PrivateChatItem chat={item} />
        </li>
      ))}
  </ChatListContainer>
);
