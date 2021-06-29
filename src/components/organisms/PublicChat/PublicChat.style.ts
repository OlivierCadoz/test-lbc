import styled from 'styled-components';

export const PublicChatContainer = styled.section`
  flex: 1;
  overflow: hidden;
  position: relative;
  height: 100%;
`;

export const MessageList = styled.ul`
  flex: 1;
  overflow: auto;
  padding: 20px 20px 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;

  li {
    max-width: 65%;

    &.self {
      align-self: flex-end;
    }

    & + li {
      margin-top: 24px;
    }
  }
`;
