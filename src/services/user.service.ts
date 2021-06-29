import { User } from '../models/users.model';

const users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    id: 2,
    firstName: 'Claudia',
    lastName: 'Smith',
  },
  {
    id: 3,
    firstName: 'Archibald',
    lastName: 'Demeuré',
  },
  {
    id: 4,
    firstName: 'Jess',
    lastName: 'Carpenter',
  },
  {
    id: 5,
    firstName: 'Anne',
    lastName: 'Gros',
  },
];

/**
 * Fetch all users
 */
export const getUsers = (): { data: User[]; status: number } => {
  return { data: users, status: 200 };
};
