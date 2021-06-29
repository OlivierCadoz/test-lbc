import styled from 'styled-components';
import { colors } from '../../../constants/colors';

export const ChatFormWrapper = styled.form`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: baseline;
  min-height: 60px;
  width: 100%;
  padding: 16px 20px;
  border-top: 3px solid ${colors.primary};
  background-color: #fff;
`;

export const ChatFormTextarea = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 8px 12px;
  border: 2px solid ${colors.secondary};
  border-radius: 8px;
  resize: none;

  & + button {
    margin-left: 12px;
  }
`;

export const ChatFormButton = styled.button`
  cursor: pointer;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  color: #fff;
  background-color: ${colors.secondary};
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: ${colors.primary};
  }
`;
