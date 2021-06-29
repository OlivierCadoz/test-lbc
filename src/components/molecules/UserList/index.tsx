import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_PRIVATE_CHAT } from '../../../store/action/chat.action';
import { User } from '../../../models/users.model';
import { useAppDispatch } from '../../../services/hook.service';
import { FETCH_USERS } from '../../../store/action/user.action';
import { UserItem } from '../../atoms/UserItem';
import { UserListContainer } from './UserList.style';

export const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(
    ({ user }: { user: { list: User[] } }) => user.list
  );
  const fetchPrivateChat = ({ id }: User) =>
    dispatch({ type: FETCH_PRIVATE_CHAT, payload: id });

  useAppDispatch(FETCH_USERS);

  return (
    <UserListContainer>
      {users &&
        users.map((user: User) => (
          <li key={`user-${user.id}`}>
            <UserItem user={user} clickAction={fetchPrivateChat} />
          </li>
        ))}
    </UserListContainer>
  );
};
