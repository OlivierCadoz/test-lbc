import React from 'react';
import { UserItemWrapper, UserName } from './UserItem.style';

export const UserItem = ({ user, clickAction }: any) => (
  <UserItemWrapper onClick={() => clickAction(user)}>
    <UserName>
      {user.firstName} {user.lastName}
    </UserName>
  </UserItemWrapper>
);
