import React from 'react';
import { useSelector } from 'react-redux';
import { PrivateChatList } from '../../organisms/PrivateChatList';
import { PrivateChatContainer } from './PrivateChat.style';

export const PrivateChat = () => {
  const chats = useSelector(({ chat }: any) => chat.privateList);
  return (
    <PrivateChatContainer>
      <PrivateChatList chatList={chats} />
    </PrivateChatContainer>
  );
};
