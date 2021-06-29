import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const ChatBubbleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &.self span,
  p {
    align-self: flex-end;
  }
`;

export const ChatUserName = styled.span`
  color: ${colors.secondary};
  border-bottom: 2px solid ${colors.primary};
`;

export const ChatUserMessage = styled.p`
  margin-top: 8px;
  padding: 8px 12px;
  border-radius: 8px;
  box-shadow: 0 0 3px #00000029;
  white-space: pre-line;
`;
