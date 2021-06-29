/**
 * Fetch all public messages
 */
const fetchPublicMessages = (): any => {
  return { data: messages[0], status: 200 };
};

/**
 * Fetch a private chat by user id
 * @param userId
 */
const fetchPrivateChat = (userId: number): any => {
  const data = messages.filter((mes) => mes.authorId === userId);
  return { data, status: 200 };
};

/**
 *
 * @param userId
 */
const postPublicMessages = (pm: any): { status: number } => {
  return { status: 200 };
};

/**
 *
 * @param userId
 */
const postPrivateMessages = (pm: any): { status: number } => {
  return { status: 200 };
};

const messages = [
  {
    id: 0,
    private: false,
    messages: [
      {
        id: 0,
        authorId: 0,
        message:
          'Etiam tempus, mauris sed tempor aliquet, velit lacus consectetur enim, et blandit justo risus varius magna.',
      },
      {
        id: 1,
        authorId: 1,
        message:
          'Etiam tempus, mauris sed tempor aliquet, velit lacus consectetur enim, et blandit justo risus varius magna.',
      },
      {
        id: 2,
        authorId: 0,
        message:
          'Etiam tempus, mauris sed tempor aliquet, velit lacus consectetur enim, et blandit justo risus varius magna.',
      },
      {
        id: 3,
        authorId: 2,
        message:
          'Etiam tempus, mauris sed tempor aliquet, velit lacus consectetur enim, et blandit justo risus varius magna.',
      },
      {
        id: 4,
        authorId: 2,
        message:
          'Etiam tempus, mauris sed tempor aliquet, velit lacus consectetur enim, et blandit justo risus varius magna.',
      },
      {
        id: 5,
        authorId: 3,
        message:
          'Etiam tempus, mauris sed tempor aliquet, velit lacus consectetur enim, et blandit justo risus varius magna.',
      },
      {
        id: 6,
        authorId: 4,
        message:
          'Etiam tempus, mauris sed tempor aliquet, velit lacus consectetur enim, et blandit justo risus varius magna.',
      },
    ],
  },
  {
    id: 1,
    authorId: 1,
    private: true,
    messages: [
      {
        id: 0,
        authorId: 0,
        message:
          'Etiam tempus, mauris sed tempor aliquet, velit lacus consectetur enim, et blandit justo risus varius magna.',
      },
      {
        id: 1,
        authorId: 1,
        message:
          'Etiam tempus, mauris sed tempor aliquet, velit lacus consectetur enim, et blandit justo risus varius magna.',
      },
    ],
  },
  {
    id: 2,
    authorId: 2,
    private: true,
    messages: [
      {
        id: 0,
        authorId: 2,
        message:
          'Etiam tempus, mauris sed tempor aliquet, velit lacus consectetur enim, et blandit justo risus varius magna.',
      },
    ],
  },
  {
    id: 3,
    authorId: 3,
    private: true,
    messages: [
      {
        id: 0,
        authorId: 3,
        message:
          'Etiam tempus, mauris sed tempor aliquet, velit lacus consectetur enim, et blandit justo risus varius magna.',
      },
      {
        id: 1,
        authorId: 0,
        message:
          'Etiam tempus, mauris sed tempor aliquet, velit lacus consectetur enim, et blandit justo risus varius magna.',
      },
    ],
  },
  {
    id: 4,
    authorId: 4,
    private: true,
    messages: [
      {
        id: 0,
        authorId: 4,
        message:
          'Etiam tempus, mauris sed tempor aliquet, velit lacus consectetur enim, et blandit justo risus varius magna.',
      },
      {
        id: 1,
        authorId: 4,
        message:
          'Etiam tempus, mauris sed tempor aliquet, velit lacus consectetur enim, et blandit justo risus varius magna.',
      },
      {
        id: 2,
        authorId: 0,
        message:
          'Etiam tempus, mauris sed tempor aliquet, velit lacus consectetur enim, et blandit justo risus varius magna.',
      },
    ],
  },
  {
    id: 5,
    authorId: 5,
    private: true,
    messages: [],
  },
];

export {
  fetchPublicMessages,
  fetchPrivateChat,
  postPublicMessages,
  postPrivateMessages,
};
